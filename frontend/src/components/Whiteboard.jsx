import React, { useState, useRef, useEffect } from "react";

const Whiteboard = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      // Set initial canvas properties
      ctx.lineCap = "round";
      ctx.strokeStyle = "#000000"; // Black color
      ctx.lineWidth = 5;
    }
  }, []);

  const handleMouseDown = (e) => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-200 p-4">
      <div className="bg-white border border-gray-400 shadow-md">
        <canvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          width={window.innerWidth * 0.9}
          height={window.innerHeight * 0.8}
          className="cursor-crosshair"
        />
      </div>
    </div>
  );
};

export default Whiteboard;
