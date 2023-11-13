import React from "react";
import styles from "./menuStyles.module.css";
import Tooltip from "../Tooltip";

const TopMenu = ({ onRegionChange, totalizer }) => {

  const selectStyle = {
    display: "inline-block",
    position: "relative",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    color: "#333",
    borderRadius: "4px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    padding: "8px 36px 8px 12px",
    appearance: "none",
    cursor: "pointer",
  };

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    color: "#191970",
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    onRegionChange(selectedValue);
  };

  return (
    <div className={styles.menu}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src="/IBGE-logo.png" width={120} alt="IBGE Logo" />
        <Tooltip text="Todos os dados foram baseados nas pesquisas do IBGE, usando o último censo de 2010">
          <img
            width={"20px"}
            src="/icone-interrogation.png"
            style={{ marginLeft: "16px" }}
          ></img>
        </Tooltip>
      </div>
      <div style={{display:"flex", alignItems:"center"}}>
        <div> Selecione a região: </div>
        <div style={{ position: "relative", display: "inline-block", marginLeft:"8px" }}>
          <select style={selectStyle} onChange={handleSelectChange}>
            <option value="1">Norte</option>
            <option value="2">Nordeste</option>
            <option value="3">Sudeste</option>
            <option value="4">Sul</option>
            <option value="5">Centro-Oeste</option>
          </select>
          <div style={arrowStyle}>▼</div>
        </div>
      </div>
      <div style={{display:"flex", alignItems:"center"}}>Total da região escolhida: {totalizer}</div>
    </div>
  );
};

export default TopMenu;
