import React, { useState, useEffect } from 'react';
// import './customCursor.css'; // Import your CSS file

const CustomCursor:React.FC = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  const updateCursorPosition = (e:any) => {
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
    //  w-10 h-10 fixed rounded-full bg-transparent border-2 border-gray-300 
    <div className="custom-cursor" style={{ left: cursorX-15, top: cursorY-15 }}></div>
  );
};

export default CustomCursor;