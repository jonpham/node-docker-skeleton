#!/bin/bash
# SOURCE THIS FILE

IMAGE_NAME='docker-node-backend'
GROUP_NAME='jonpham'
DEVELOPMENT_PORT=4002

# Development
function build-docker-dev {
  docker build \
    --file Dockerfile.dev \
    --tag $GROUP_NAME/$IMAGE_NAME .
}

function run-docker-dev {
  build-docker-dev
  docker run \
    -p $DEVELOPMENT_PORT:3000 \
    -v $(pwd)/src:/usr/app/src \
    -v "$(pwd)/public":"/usr/app/public" \
    $GROUP_NAME/$IMAGE_NAME
}

function test-app-backend {
  docker-compose -d up
  app_name="${PWD##*/}_backend_1"
  docker exec -it $app_name npm run test
}

# Production 
function build-docker-prod {
  docker build -t $GROUP_NAME/$IMAGE_NAME .
}

function run-docker-prod {
  build-docker-prod
  docker run -d -p 8080:80 $GROUP_NAME/$IMAGE_NAME 
}
