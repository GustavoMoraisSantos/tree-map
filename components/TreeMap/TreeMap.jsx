// components/TreeMap.jsx
import React from 'react';
import styles from './TreeMap.module.css';

const TreeMap = ({ data }) => {
  const renderNodes = (nodes) => {
    const totalSize = nodes.reduce((acc, node) => acc + node.size, 0);
    const nodeWidths = nodes.map((node) => (node.size / totalSize) * 100);
    const nodeHeights = nodes.map((node) => (node.size / totalSize) * 100);

    return nodes.map((node, index) => (
      <div
        key={index}
        className={styles.node}
        style={{ width: `${nodeWidths[index]}%`, height: `${nodeHeights[index]}%` }}
      >
        {node.name}
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      {data && data.children && renderNodes(data.children)}
    </div>
  );
};

export default TreeMap;
