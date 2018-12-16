#!/bin/bash
# SOURCE THIS FILE

IMAGE_NAME='docker-react-frontend'
GROUP_NAME='jpham247'
DEVELOPMENT_PORT=4001

function build-docker {
  docker build -t $GROUP_NAME/$IMAGE_NAME .
}

function run-docker {
  docker run \
    -p $DEVELOPMENT_PORT:3000 \
    -v $(pwd)/src:/usr/app/src \
    -v "$(pwd)/public":"/usr/app/public" \
    $GROUP_NAME/$IMAGE_NAME
}
