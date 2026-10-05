FROM node:22-alpine

WORKDIR /app

# Copy dependency definition files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the static assets
RUN npm run build

# Expose port 4173
EXPOSE 4173

# Serve the production build using Vite preview bound to all network interfaces
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]