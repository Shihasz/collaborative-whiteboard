# Collaborative Whiteboard

A real-time collaborative whiteboard application built with **FastAPI** and **React**. This project serves as a showcase for building full-stack web applications with modern technologies.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You will need the following tools installed on your system:

- **Docker Desktop** (with WSL2 integration enabled on Windows)
- **VS Code** with the **WSL extension** (on Windows)
- **Node.js** and **npm** (for local development)
- **Python 3.8+** and **pip** (for local development)

### Note on Cross-Platform Compatibility

This project is configured to run in a Docker environment, which makes it compatible across different operating systems including Windows, macOS, and Linux. The Docker containers provide an isolated and consistent environment, so you do not need to worry about OS-specific dependencies.

---

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Shihasz/collaborative-whiteboard.git
    cd collaborative-whiteboard
    ```

2.  **Build and run with Docker Compose:**
    ```bash
    docker-compose up --build
    ```
    This command builds the Docker images for both the frontend and backend and starts the services.

The frontend will be available at `http://localhost:5173`, and the backend API at `http://localhost:8000`.

---

## 🤝 Contributing

Contributions are what make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

---

## 📄 License

This project is licensed under the **MIT License**.
