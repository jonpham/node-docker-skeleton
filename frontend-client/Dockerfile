# jpham / Node Frontend/React Client
# VERSION             0.1.0

## BUILD STAGE
# Specify a base image
FROM node:alpine as builder

# Info
LABEL description="node / react client webapp docker builder"

# Mounting Application to Container
WORKDIR '/usr/app'
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
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# Get built-compiled assets from `builder`
COPY --from=builder /usr/app/build /usr/share/nginx/html