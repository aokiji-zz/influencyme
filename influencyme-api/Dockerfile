# Use a Node.js base image
FROM node:21

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to install dependencies
COPY package.json yarn.lock ./

# Install all dependencies (including devDependencies)
RUN yarn install
# Copy the entire project (excluding files in .dockerignore)
COPY . .

# Generate the Prisma client
RUN npx prisma format
RUN npx prisma generate

# Build the project
RUN yarn build
# Remove devDependencies to optimize image size

# Expose the port your API runs on
EXPOSE 8735

# Start the application
CMD ["node", "dist/main.js"]