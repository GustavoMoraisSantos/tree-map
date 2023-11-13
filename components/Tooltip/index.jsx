import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {isHovered && (
         <div
         style={{
           position: 'absolute',
           background: 'rgba(0, 0, 0, 0.8)',
           color: '#fff',
           padding: '8px',
           borderRadius: '4px',
           zIndex: '1',
           top: '50%',
           left: '100%', 
           transform: 'translateY(-50%)',
           whiteSpace: 'nowrap',
         }}
       >
          {text}
        </div>
      )}
      <span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </span>
    </div>
  );
};


export default Tooltip;
