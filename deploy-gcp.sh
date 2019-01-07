#!/bin/bash

docker build -t jonpham/fib-react-client:latest \
             -t jonpham/fib-react-client:$GIT_SHA \
             -f ./frontend-client/Dockerfile ./frontend-client
docker build -t jonpham/fib-node-api:latest \
             -t jonpham/fib-node-api:$GIT_SHA \
             -f ./backend-client/Dockerfile ./backend-server
docker build -t jonpham/fib-node-worker:latest \
             -t jonpham/fib-node-worker:$GIT_SHA \
             -f ./worker/Dockerfile ./worker

# Take those images & push them to docker hub
docker push jonpham/fib-react-client:latest
docker push jonpham/fib-react-client:$GIT_SHA

docker push jonpham/fib-node-api:latest
docker push jonpham/fib-node-api:$GIT_SHA

docker push jonpham/fib-node-worker:latest
docker push jonpham/fib-node-worker:$GIT_SHA

# Kubernetes Launch
kubectl apply -f k8s
kubectl set image deployments/client-deployment client=jonpham/fib-react-client:$GIT_SHA
kubectl set image deployments/api-server-deployment api-server=jonpham/fib-node-api:$GIT_SHA
kubectl set image deployments/worker-deployment worker=jonpham/fib-node-worker:$GIT_SHA