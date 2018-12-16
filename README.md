# Node-Docker-Skeleton

This Docker image is the basic project skeleton for a Node / Express / React App that 
integrates with AWS, Travic CI, & Docker-Compose.

## Building the Image

`$ docker build --tag <docker_image_name> .`
`$ docker run --daemon -p 8080:80 -v <host_path>:<container_path> <docker_image_name>`

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

### Debugging

```bash
# Open Shell inside Container
docker exec -it <container_name> sh

# Docker Logs
docker logs --follow || --tail n_lines(all) <container_name>
```

## Deploying to AWS (ElasticBeanstalk)

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
