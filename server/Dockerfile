# Use the official Node.js image.
FROM node:18

# Set the working directory inside the container.
WORKDIR /app

# Copy only package.json and package-lock.json files to the working directory.
COPY package*.json ./

# Install the application dependencies.
RUN npm install

# Copy the rest of the application files to the container.
COPY . .

# Expose the application port (e.g., 5000).
EXPOSE 5000

# Command to start the application.
CMD ["npm", "start"]
