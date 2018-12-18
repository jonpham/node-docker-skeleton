# jpham / Node Frontend/React 
# VERSION             0.1.0

## BUILD STAGE
# Specify a base image
FROM node:alpine as builder

# Info
LABEL description="node / react webapp docker builder"

# Mounting Application to Container
WORKDIR /usr/app
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy over Application files
COPY ./src ./src
COPY ./public ./public

# Build Production Assets
RUN npm run build

## DEPLOYMENT
FROM nginx 

# DEPLOYED NETWORK CONFIG
# EXPOSE 80

# Copy SERVER Files from 'builder' context
COPY --from=builder /usr/app/build /usr/share/nginx/html