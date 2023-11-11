// pages/index.js
import React, { useEffect, useState } from "react";
import Head from "next/head";
import TopMenu from "../components/menu/TopMenu";
import { fetchRegionalData } from "../services/externalApi";

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState("1");

  const handleRegionChange = (value) => {
    console.log('Região selecionada:', value);
    setSelectedRegion(value);
  };

  useEffect(() => {
    // 1 - Norte
    // 2 - Nordeste
    // 3 - Sudeste
    // 4 - Sul
    // 5 - Centro-Oeste
    fetchRegionalData(selectedRegion);
  }, [selectedRegion]);

  const treeData = {
    name: "group",
    children: [
      { name: "grupo 1", value: 603 },
      { name: "grupo 2", value: 330 },
      { name: "grupo 3", value: 1 },
      { name: "grupo 4", value: 34 },
      { name: "grupo 5", value: 34 },
      { name: "grupo 6", value: 100 },
      { name: "grupo 7", value: 34 },
      { name: "grupo 8", value: 47 },
      { name: "grupo 9", value: 75 },
      { name: "grupo 10", value: 47 },
      { name: "grupo 11", value: 47 },
      { name: "grupo 12", value: 47 },
      { name: "grupo 13", value: 47 },
      { name: "grupo 14", value: 45 },
      { name: "grupo 15", value: 47 },
      { name: "grupo 16", value: 50 },
      { name: "grupo 17", value: 50 },
      { name: "grupo 18", value: 99 },
      { name: "grupo 19", value: 47 },
    ],
  };

  const Treemap = ({ data }) => {
    const containerStyle = {
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
    };

    const groupStyle = {
      flex: "1",
      margin: "2px",
      backgroundColor: "lightblue",
    };

    return (
      <div style={containerStyle}>
        {data.children.map((group, index) => (
          <div
            key={index}
            style={{ ...groupStyle, flexBasis: `${group.value}%` }}
          >
            {group.name}
          </div>
        ))}
      </div>
    );
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
      <TopMenu onRegionChange={handleRegionChange} />

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
