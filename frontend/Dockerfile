# Stage 1: Build the React application
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the production version of the app
RUN npm run build

# Stage 2: Serve the application using a lightweight web server (Nginx)
FROM nginx:alpine

# Copy the built files from the build stage into Nginx's public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# The default command for Nginx is already set to start the server
CMD ["nginx", "-g", "daemon off;"]