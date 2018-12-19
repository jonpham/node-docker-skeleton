# jpham / Node Worker/Node
# VERSION             0.1.0

# Specify a base image
FROM node:alpine

# Info
LABEL description="node worker for calculating fib numbers"

# Mounting Application to Container
WORKDIR /usr/app
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy over Application files
COPY ./src ./src

# Default Start Command
CMD ["npm","run","start"]
