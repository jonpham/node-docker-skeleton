# jpham / Node Backend API
# VERSION             0.1.0

## BUILD STAGE
# Specify a base image
FROM node:alpine

# Info
LABEL description="node backend api docker builder"

# Mounting Application to Container
WORKDIR /usr/app
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy over Application files
COPY ./src ./src

# Set Docker Default Start CMD
CMD ["npm","run","start"]

