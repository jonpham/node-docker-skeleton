# jpham / Node Visit Counter with Redis
# VERSION             0.0.1

# Specify a base image
FROM node:alpine

# Info
LABEL description="empty nodejs / express webapp docker template"

# Mounting Application to Container
WORKDIR /usr/app
COPY ./package.json ./
COPY ./package-lock.json ./

# Install dependencies
RUN npm install

# Copy over Application files
COPY ./src ./src

# Network Configuration
EXPOSE 80/tcp

# Default Start Command
CMD ["npm","start"]
