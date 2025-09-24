import React from "react";

const Whiteboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-200">
      <div className="w-full h-full bg-white border border-gray-400 shadow-md">
        {/* The canvas or SVG drawing area will go here */}
        <h1 className="text-xl font-bold text-gray-700 p-4">Whiteboard Area</h1>
      </div>
    </div>
  );
};

export default Whiteboard;
