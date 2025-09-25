import { useState, useEffect } from "react";

// Custom hook to manage WebSocket connection and state
const useWebSocket = (url) => {
  const [ws, setWs] = useState(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const newWs = new WebSocket(url);

    newWs.onopen = () => {
      console.log("WebSocket connected");
      setConnected(true);
    };

    newWs.onclose = () => {
      console.log("WebSocket disconnected");
      setConnected(false);
      // Optional: Add logic here to attempt to reconnect
    };

    newWs.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    setWs(newWs);

    // Cleanup function to close the connection when the component unmounts
    return () => {
      newWs.close();
    };
  }, [url]);

  return [ws, connected];
};

export default useWebSocket;
