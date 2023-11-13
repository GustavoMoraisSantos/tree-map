import React, { useEffect, useState } from "react";
import Head from "next/head";
import TopMenu from "../components/menu/TopMenu";
import { fetchRegionalData } from "../services/externalApi";

export default function App() {
  const [selectedRegion, setSelectedRegion] = useState("1");
  const [treeData, setTreeData] = useState();

  const handleRegionChange = (value) => {
    setSelectedRegion(value);
  };

  useEffect(() => {
    // 1 - Norte
    // 2 - Nordeste
    // 3 - Sudeste
    // 4 - Sul
    // 5 - Centro-Oeste
    fetchRegionalData(selectedRegion).then((response) => {
      setTreeData(response.resultados);
    });
  }, [selectedRegion]);

  const Treemap = (data) => {
    if (data.data) {
      const newData = data.data.slice(1);
      const containerStyle = {
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
      };
  
      const groupStyle = {
        flex: "1",
        margin: "2px",
        backgroundColor: "lightblue",
        padding:"4px"
      };
  
      const normalize = (value, min, max) => {
        return ((value - min) / (max - min)) * 100;
      };
  
      const serieValues = newData.map((group) => group.series[0].serie[2010]);
      const minSerie = Math.min(...serieValues);
      const maxSerie = Math.max(...serieValues);
  
      return (
        <div style={containerStyle}>
          {newData &&
            newData.map((group, index) => (
              <div
                key={index}
                style={{
                  ...groupStyle,
                  flexBasis: `${normalize(
                    group.series[0].serie[2010],
                    minSerie,
                    maxSerie
                  )}%`,
                }}
              >
                <div>{Object.values(group.classificacoes[0].categoria).join(", ")}</div>
                <div>Quantidade: {group.series[0].serie[2010]}</div>
              </div>
            ))}
        </div>
      );
    }
  };

  const containerStyle = {
    background: "whitesmoke",
    width: "100%",
    height: "100vh",
    display: "flex",
    flexWrap: "wrap",
  };

  return (
    <div className="container">
      <Head>
        <title>Tree map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopMenu totalizer={treeData[0].series[0].serie[2010]} onRegionChange={handleRegionChange} />

      <main>
        <div style={containerStyle}>
          <Treemap data={treeData} />
        </div>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
