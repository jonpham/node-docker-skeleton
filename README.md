# Node-Docker-Skeleton

This Docker image is the basic project skeleton for a Node / Express / React App that 
integrates with AWS, Travic CI, & Docker-Compose.

To use some shortcut functions

```bash
source init-docker-dev.sh

# Development
run-docker-dev
test-app-web

# Production Deploys
run-docker-prod
```

## Building the Image

`$ docker build --tag <docker_image_name> .`
`$ docker run --daemon -p 8080:80 -v <host_path>:<container_path> <docker_image_name>`

Usage of `docker run -v <container_path>` without any mapping to the local path, means don't alias this folder it will be populated by the container.

If you have multiple Dockerfiles (prod,dev,qa):
`docker build --file <Dockerfile> --tag <docker_image_name> .`

## Building Applications with Docker-Compose

`docker-compose build`
or
`docker-compose up --build -d`

Stopping containers
`docker-compose down`

## Cleaning Up Containers

```bash
# Delete all containers
docker rm $(docker ps -a -q)
# Delete all images
docker rmi $(docker images -q)

## Docker-Compose
# Batch remove all
docker-compose system prune --all | --filter | --force
# docker-compose down options
docker-compose down --rmi all|local --remove-orphans
```

## Running Tests

### Locally

```bash
# Running inside a separate container
# Assumes test_cmd ~= 'npm run test'
# This method does not allow live-updates...
$ docker run -it <image_name> <test_cmd>

# if want to Run in Already existing container 
# (better since you'll be able to get live updates)
$ docker exec -it <container_name> <test_cmd>
```

Maybe look into `docker attach` ?

### Debugging

```bash
# Open Shell inside Container
docker exec -it <container_name> sh

# Docker Logs
docker logs --follow || --tail n_lines(all) <container_name>
```

## Deploying to AWS (ElasticBeanstalk)

Checkout .travis.yml for easy doployment through Travis CI to ElasticBeanstalk

## App Configuration

See _Dockerfile_ & _docker-compose.yml_ for configurations.

## Dependencies

- MongoDb
- Redis

## Development Dependencies

- Travis CI
- ESLint
- Docker
- Docker Compose
