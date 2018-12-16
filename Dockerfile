# jpham / Node Frontend/React 
# VERSION             0.1.0

# Specify a base image
FROM node:alpine

# Info
LABEL description="node / react webapp docker template"

# Mounting Application to Container
WORKDIR /usr/app
COPY ./package.json ./
COPY ./package-lock.json ./

# Install dependencies
RUN npm install

# Copy over Application files
COPY ./src ./src
COPY ./public ./public

# Network Configuration
EXPOSE 80/tcp

# Default Start Command
CMD ["npm","run","start"]
