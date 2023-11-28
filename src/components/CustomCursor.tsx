import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  const updateCursorPosition = (e: any) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateCursorPosition);
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="custom-cursor" style={{ left: cursorX - 15, top: cursorY - 15 }}></div>
  );
};

export default CustomCursor;