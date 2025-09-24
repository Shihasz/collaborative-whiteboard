import React from "react";
import "./index.css";
import Whiteboard from "./components/Whiteboard";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Toolbar />
      <Whiteboard />
    </div>
  );
}

export default App;
