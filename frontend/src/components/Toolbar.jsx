import React from "react";

const Toolbar = () => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg p-2 border border-gray-300 z-10">
      <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md">
        Tool
      </button>
    </div>
  );
};

export default Toolbar;
