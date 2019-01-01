# Kubernetes Notes

## Kubernetes Clustes and Objects

Kubernetes is an orchestration tool that allows an organization to deploy a combination and configuration of Kubernetes objects onto Machines, called Nodes, within a Kubernetes Cluster that make up one or more service applications.

### Types of Kubernetes Objects

1. Pod
2. StatefulSet (apps/v1)
3. ReplicaController
4. Service
5. Event
6. ControllerRevision (apps/v1)
7. componentStatus
8. configMap
9. Endpoints
10. Namespace
11. Deployment (apps/v1)

#### Services Objects (Kubernetes Networking)

1. NodePort (Any pod to WAN)
2. IngressService (WAN-tunnel for Application Cluster)
3. ClusterIP (Application Cluster Assignments)
4. LoadBalancer

## Local Development Environment

`minikube` is a virtual macine based cluster, with the local macine acting as the 'master' & N=1 node.
`kubectl` is a CLI tool to control a cluster and apply/load images.

_NodePort_ objects exist as services which create the netwoark configuration between inter-cop-depedndencies, in a real-time service example.

## What gets deployed?

- Pods are decoupled application elements or compoents tt are used to group services into fully-featured user appiications.
- Config files are used to define an object and its respective properties.

## *ALWAYS USE A DECLARATIVE UPDATE APPROACH*

```bash
> kubectl apply -f <files>
> kubectl get pods
> kubectl get nodes
> kubectl describe <object-type> <object-id> 
```

