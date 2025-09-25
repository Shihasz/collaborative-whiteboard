from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
import uvicorn

app = FastAPI(
    title="Collaborative Whiteboard API",
    description="A real-time API for the collaborative whiteboard application.",
    version="0.1.0",
)

# Define allowed origins for CORS (Crucial for development with React/Vite)
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"], # Allow all common methods
    allow_headers=["*"], # Allow all headers
)

# Global list to store active WebSocket connections for broadcasting
connected_clients = []

@app.get("/", tags=["Status"])
async def read_root():
    """Simple status endpoint to confirm the API is running."""
    return {"message": "Welcome to the Collaborative Whiteboard API!"}

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    """Handles incoming WebSocket connections and broadcasts drawing data."""
    await websocket.accept()
    connected_clients.append(websocket)
    
    try:
        while True:
            # Receive data (JSON with 'action', 'x', 'y') from a client
            data = await websocket.receive_text() 
            
            # Broadcast the received data to all other connected clients
            for client in connected_clients:
                if client != websocket:
                    await client.send_text(data)
    except Exception as e:
        # Handle connection closure (e.g., browser tab closed, network error)
        # This is expected behavior and should not typically crash the server
        print(f"Connection closed for a client.")
    finally:
        # Important: Remove the closed connection from the active list
        if websocket in connected_clients:
            connected_clients.remove(websocket)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)