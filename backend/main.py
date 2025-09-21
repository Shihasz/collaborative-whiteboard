from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Initialize the FastAPI app
app = FastAPI(
    title="Collaborative Whiteboard API",
    description="A real-time API for the collaborative whiteboard application.",
    version="0.1.0",
)

# Configure CORS (Cross-Origin Resource Sharing) middleware
# This allows the React frontend to make requests to the FastAPI backend.
origins = [
    "http://localhost:5173",  # The default port for Vite development server
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

# Define a root endpoint
@app.get("/", tags=["Status"])
async def read_root():
    """
    Returns a welcome message from the API.
    """
    return {"message": "Welcome to the Collaborative Whiteboard API!"}

# Define a simple status endpoint for health checks
@app.get("/api/status", tags=["Status"])
async def get_status():
    """
    Returns the current status of the API.
    """
    return {"status": "OK", "service": "FastAPI"}