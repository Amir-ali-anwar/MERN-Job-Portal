# Use the official Node.js image.
FROM node:18 as build

# Set the working directory inside the container.
WORKDIR /app

# Copy only package.json and package-lock.json files to the working directory.
COPY package*.json ./

# Install the application dependencies.
RUN npm install

# Copy the rest of the application files to the container.
COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 3000

# Expose the application port (e.g., 5000).


CMD ["nginx", "-g", "daemon off;"]

