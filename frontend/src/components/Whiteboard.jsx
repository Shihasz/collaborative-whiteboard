import React, { useState, useRef, useEffect } from "react";
import useWebSocket from "../hooks/useWebSocket";

const Whiteboard = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  // Using the connected state to manage UI and data sending
  const [ws, connected] = useWebSocket("ws://localhost:8000/ws");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      // Set dimensions based on current window size
      canvas.width = window.innerWidth * 0.9;
      canvas.height = window.innerHeight * 0.8;

      const ctx = canvas.getContext("2d");
      ctxRef.current = ctx;

      // Set initial canvas properties
      ctx.lineCap = "round";
      ctx.strokeStyle = "#000000"; // Black color
      ctx.lineWidth = 5;
    }

    if (ws) {
      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const ctx = ctxRef.current;
        if (!ctx) return;

        // Handle incoming drawing actions from other clients
        switch (data.action) {
          case "start":
            // Start a new path
            ctx.beginPath();
            ctx.moveTo(data.x, data.y);
            break;
          case "draw":
            // Draw a line segment
            ctx.lineTo(data.x, data.y);
            ctx.stroke();
            break;
          case "stop":
            // Close the path
            ctx.closePath();
            break;
          default:
            break;
        }
      };
    }

    return () => {
      if (ws) {
        ws.onmessage = null;
      }
    };
  }, [ws]);

  const handleMouseDown = (e) => {
    if (!ctxRef.current) return; // Allow local drawing setup even if WS is down
    const { offsetX, offsetY } = e.nativeEvent;

    // 1. Local Drawing: Start the path
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);

    // 2. WebSocket: Only send if connected
    if (connected && ws) {
      ws.send(JSON.stringify({ action: "start", x: offsetX, y: offsetY }));
    }
  };

  const handleMouseMove = (e) => {
    if (!isDrawing || !ctxRef.current) return;
    const { offsetX, offsetY } = e.nativeEvent;

    // 1. Local Drawing: Continue the path
    ctxRef.current.lineTo(offsetX, offsetY);
    ctxRef.current.stroke();

    // 2. WebSocket: Only send if connected
    if (connected && ws) {
      ws.send(JSON.stringify({ action: "draw", x: offsetX, y: offsetY }));
    }
  };

  const handleMouseUp = () => {
    if (!isDrawing) return;
    setIsDrawing(false);

    if (ctxRef.current) {
      ctxRef.current.closePath();
    }

    // WebSocket: Only send if connected
    if (connected && ws) {
      ws.send(JSON.stringify({ action: "stop" }));
    }
  };

  const handleMouseLeave = () => {
    handleMouseUp();
  };

  // UI State
  const statusMessage = connected
    ? "Online: Real-time Collaboration Active"
    : "Offline: Attempting to connect...";
  const statusColor = connected ? "bg-green-500" : "bg-red-500";

  return (
    <div className="flex flex-col items-center w-full h-full bg-gray-200 pt-20 pb-4">
      {/* Status Bar */}
      <div
        className={`p-1 px-4 mb-2 text-sm text-white rounded-full ${statusColor}`}
      >
        {statusMessage}
      </div>

      <div className="bg-white border border-gray-400 shadow-md">
        <canvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="cursor-crosshair"
        />
      </div>
    </div>
  );
};

export default Whiteboard;
