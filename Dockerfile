# Use the official Node.js image as base
FROM node:20.1.0 

# Set the working directory in the container
WORKDIR /src/index.js

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining application code
COPY . .


# Build the React app
RUN npm run build