# Use a slim Python image for a smaller final image size
FROM python:3.11-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose port 8000, the default port for Uvicorn
EXPOSE 8000

# Command to run the Uvicorn server when the container starts
# The `--host 0.0.0.0` makes the server accessible from outside the container
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--reload"]