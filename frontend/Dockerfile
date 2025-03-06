# Stage 1 - Build React App
FROM node:20 AS builder

WORKDIR /app

# Copy package.json and package-lock.json first for caching
COPY package.json package-lock.json ./

RUN npm install

# Copy the rest of the project files
COPY . .

# Build the project
RUN npm run build

# Debug: Check if /app/build exists
RUN ls -la /app/build

# Stage 2 - Serve with Nginx
FROM nginx:1.23-alpine

WORKDIR /usr/share/nginx/html

# Copy built files from builder to Nginx HTML directory
COPY --from=builder /app/build .

# Copy custom Nginx configuration (handle SPA routes)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
