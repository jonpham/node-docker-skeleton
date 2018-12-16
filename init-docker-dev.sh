#!/bin/bash
# SOURCE THIS FILE

IMAGE_NAME='node-redis-counter'
GROUP_NAME='jpham247'
DEVELOPMENT_PORT=8081

function build-docker {
  docker build -t $GROUP_NAME/$IMAGE_NAME .
}

function run-docker {
  docker run -p $DEVELOPMENT_PORT:4001 $GROUP_NAME/$IMAGE_NAME
}
