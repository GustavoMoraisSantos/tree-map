import React from "react";
import styles from "./menuStyles.module.css";

const TopMenu =({ onRegionChange }) => {
  const selectStyle = {
    display: 'inline-block',
    position: 'relative',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    color: '#333',
    borderRadius: '4px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '8px 36px 8px 12px',
    appearance: 'none',
    cursor: 'pointer',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    color:"#191970",
  };


  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    // Chame a função de callback passada por propriedade
    onRegionChange(selectedValue);
  };

  return (
    <div className={styles.menu}>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <div style={{ position: "relative", display: "inline-block" }}>
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
  );
};

export default TopMenu;
