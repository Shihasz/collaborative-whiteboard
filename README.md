# Collaborative Whiteboard

A real-time collaborative whiteboard application built with **FastAPI** and **React**. This project serves as a showcase for building full-stack web applications with modern technologies.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You will need the following tools installed on your system:

- **Docker Desktop** with **WSL2** integration enabled
- **VS Code** with the **WSL extension**
- **Node.js** and **npm**
- **Python 3.8+** and **pip**

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Shihasz/collaborative-whiteboard.git
    cd collaborative-whiteboard
    ```

2.  **Backend Setup:**
    Navigate to the backend directory, create and activate a virtual environment, and install the required dependencies.

    ```bash
    cd backend
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    ```

3.  **Frontend Setup:**
    Navigate to the frontend directory and install the Node.js dependencies.
    ```bash
    cd ../frontend
    npm install
    ```

## ▶️ Running the Application

Once both the backend and frontend are set up, you can run them concurrently.

### 1. Run the Backend (in a separate terminal)

Make sure your virtual environment is active.

```bash
cd backend
uvicorn main:app --reload
```

### 2. Run the Frontend (in another terminal)

```bash
cd frontend
npm run dev
```

The frontend will be available at http://localhost:5173, and the backend API at http://localhost:8000.

## 🤝 Contributing

Contributions are what make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.
