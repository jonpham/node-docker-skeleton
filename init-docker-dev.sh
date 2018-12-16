#!/bin/bash
# SOURCE THIS FILE

IMAGE_NAME='docker-react-frontend'
GROUP_NAME='jpham247'
DEVELOPMENT_PORT=4001

# Development
function run-docker-dev {
  docker run \
    -p $DEVELOPMENT_PORT:3000 \
    -v $(pwd)/src:/usr/app/src \
    -v "$(pwd)/public":"/usr/app/public" \
    $GROUP_NAME/$IMAGE_NAME
}

function test-app-web {
  docker-compose -d up
  app_name="${PWD##*/}_web_1"
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
