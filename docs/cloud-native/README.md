# 🎨 Awesome Cloud Native [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)

![Twitter URL](https://img.shields.io/badge/-@mehdi_hadeli-%231DA1F2?style=flat-square&logo=twitter&logoColor=ffffff) 
[![blog](https://img.shields.io/badge/blog-dotnetuniversity.com-brightgreen?style=flat-square)](https://dotnetuniversity.com/https://dotnetuniversity.com/)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](./contributing.md)

Collection of useful articles and resources about [cloud native](https://landscape.cncf.io/).

> Cloud Native is a behavior and design philosophy. At its essence, any behavior or approach that improves resource utilization and application delivery efficiency in the cloud is called Cloud Native.

Contributions are always welcome! Please take a look at the [contribution guidelines](https://github.com/mehdihadeli/awesome-dotnet-async/blob/master/contributing.md) pages first.

Thanks to all [contributors](https://github.com/mehdihadeli/awesome-cloud-native/graphs/contributors), you're awesome and wouldn't be possible without you! The goal is to build a categorized community-driven collection of very well-known resources.

Check out my [blog](https://dotnetuniversity.com) or find me on [Linkedin](https://www.linkedin.com/in/mehdihadeli/) or [Twitter](https://twitter.com/mehdi_hadeli)!

# Contents
- [Orchestration and Scheduler](#orchestration-and-scheduler)
  - [Kubernetes](#kubernetes) 
- [Edge Computing](#edge-computing)
  - [K3s](#k3s)
  - [Kind](#kind)
  - [tilt](#tilt)
- [Container Runtime](#container-runtime)
  - [Containerd](#containerd)
  - [Docker](#docker)
  - [CRI-O](#cri-o)
- [PaaS Manager](#paas-manager)
  - [Rancher](#rancher)
- [Proxy](#proxy)
  - [Metallb](#metallb)
- [Service Mesh](#service-mesh)
  - [Maesh](#maesh)
  - [Linkerd](#linkerd)
- [Serverless](#serverless)
  - [OpenFass](#openfass)
  - [Fission](#fission)
- [Application Delivery](#application-delivery)
  - [Helm](#helm)
  - [Flux](#flux)
- [Revers Proxy](revers-proxy)
  - [reverse-proxy](#reverse-proxy)

## Orchestration and Scheduler

### Kubernetes

#### 📘 Resources
- [https://github.com/kubernetes/kubernetes](https://github.com/kubernetes/kubernetes)
- [fhsinchy/kubernetes-handbook-projects](https://github.com/fhsinchy/kubernetes-handbook-projects)
	> Project codes used in "The Kubernetes Handbook"
#### 📕 Articles
- [Kubernetes By Example](https://kubernetesbyexample.com/)
- [Kubernetes & Traefik 101— When Simplicity Matters](https://medium.com/@geraldcroes/kubernetes-traefik-101-when-simplicity-matters-957eeede2cf8)
- [Kubernetes on bare-metal in 10 minutes](https://blog.alexellis.io/kubernetes-in-10-minutes/)
- [A Guide to the Kubernetes Networking Model](https://sookocheff.com/post/kubernetes/understanding-kubernetes-networking-model/)
- [Building Stateful Services with Kubernetes](https://sookocheff.com/post/kubernetes/building-stateful-services/)

#### 🔖 Samples
- [https://github.com/arashkaffamanesh/practical-kubernetes-problems](https://github.com/arashkaffamanesh/practical-kubernetes-problems)
	> For Kubernauts' Practical Kubernetes Trainings

- [https://github.com/ContainerSolutions/kubernetes-examples](https://github.com/ContainerSolutions/kubernetes-examples)
	> Minimal self-contained examples of standard Kubernetes features and patterns in YAML

- [https://github.com/ContainerSolutions/k8s-deployment-strategies](https://github.com/ContainerSolutions/k8s-deployment-strategies)
	> Kubernetes deployment strategies explained
	
#### Books
- [Kubernetes Patterns: Reusable Elements for Designing Cloud-Native Applications](https://www.amazon.com/Kubernetes-Patterns-Designing-Cloud-Native-Applications/dp/1492050288)
- [Kubernetes Best Practices: Blueprints for Building Successful Applications on Kubernetes](https://www.amazon.com/Kubernetes-Best-Practices-Blueprints-Applications/dp/1492056472/)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

##### Deployment Strategies

###### 📕 Articles

- [Six Strategies for Application Deployment](https://thenewstack.io/deployment-strategies/)
- [Kubernetes deployment strategies](https://blog.container-solutions.com/kubernetes-deployment-strategies)

###### Videoes
- [Webinar: Deployment Strategies on Kubernetes](https://www.youtube.com/watch?v=1oPhfKye5Pg)
- [Deployment Strategies in Kubernetes | #1 | K8s Primer | Tech Primers](https://www.youtube.com/watch?v=4AUnI58ZI6M)
- [deployment strategies in kubernetes | recreate | rolling update | blue/green | canary](https://www.youtube.com/watch?v=efiMiaFjtn8)
- [Application Deployment Strategies](https://www.youtube.com/watch?v=OKM0tTYxQbk)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>


## Edge Computing

### K3S

[https://github.com/k3s-io/k3s](https://github.com/k3s-io/k3s)

> Lightweight Kubernetes. Production ready, easy to install, half the memory, all in a binary less than 100 MB.

#### 📕 Articles
- [K3s with k3d and MetalLB](https://blog.kubernauts.io/k3s-with-k3d-and-metallb-on-mac-923a3255c36e)
- [K3S with MetalLB on Multipass VMs](https://blog.kubernauts.io/k3s-with-metallb-on-multipass-vms-ac2b37298589)
- [Running k3s with metallb on Vagrant](https://medium.com/@toja/running-k3s-with-metallb-on-vagrant-bd9603a5113b)
- [Simplicity matters: Kubernetes 1.18.2 on your local machine with kubeadm and Multipass, Rancher k3s, RKE](https://blog.kubernauts.io/simplicity-matters-kubernetes-1-16-fffbf7e84944)
- [Kubernetes multi-node cluster with k3s and multipass](https://levelup.gitconnected.com/kubernetes-cluster-with-k3s-and-multipass-7532361affa3)
- [Bare-metal Kubernetes with K3s](https://blog.alexellis.io/bare-metal-kubernetes-with-k3s/)
#### 🔖 Samples

- [https://github.com/arashkaffamanesh/bonsai](https://github.com/arashkaffamanesh/bonsai)
> Rancher k3s and Rancher Server on Multipass VMs on your local machine and RKE cluster deployment through Rancher server running on k3s

- [https://github.com/arashkaffamanesh/kubeadm-multipass](https://github.com/arashkaffamanesh/kubeadm-multipass)
> Multi-Node Kubernetes 1.17.x with kubeadm on local multipass cloud with Docker, Containerd or CRI-O and Rancher Server on top

- [https://github.com/arashkaffamanesh/k3d-k3s-metallb](https://github.com/arashkaffamanesh/k3d-k3s-metallb)
> k3s with k3d and MetalLB for LoadBalancing (on Mac)

- [https://github.com/mattiaperi/k3s-multipass-cluster](https://github.com/mattiaperi/k3s-multipass-cluster)
> Kubernetes multi-nodes cluster with k3s and multipass

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Kind
- [https://github.com/kubernetes-sigs/kind](https://github.com/kubernetes-sigs/kind)
 > Kubernetes IN Docker - local clusters for testing Kubernetes

#### 📕 Articles
- [KIND and Load Balancing with MetalLB on Mac](https://www.thehumblelab.com/kind-and-metallb-on-mac/)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Tilt

#### 📕 Articles
- [Local Kubernetes Development with Tilt](https://sookocheff.com/post/kubernetes/local-kubernetes-development-with-tilt/)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

## Container Runtime

### Containerd

#### 📕 Articles
- [containerd development with multipass](https://blog.alexellis.io/containerd-development-multipass/)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Docker

#### 📕 Articles

#### Library

- [wagoodman/dive](https://github.com/wagoodman/dive)
	> A tool for exploring each layer in a docker image

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

#### Docker Compose

##### 📕 Articles
- [Speed Up Docker Compose with Parallel Builds](https://ardalis.com/speed-up-docker-compose-with-parallel-builds/)
- [How to Use Docker Compose to Run Multiple Instances of a Service in Development](https://pspdfkit.com/blog/2018/how-to-use-docker-compose-to-run-multiple-instances-of-a-service-in-development/)
- [Docker Compose scale with Dynamic Configuration - Part 1](https://tarunlalwani.com/post/docker-compose-scale-with-dynamic-configuration-part-1/)
- [Docker-Compose Scale](https://linuxhint.com/docker_compose_scale/)
<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### CRI-O

#### Videoes
- [[ Kube 98.1 ] Kubernetes cluster with CRI-O container runtime | Step by step tutorial](https://www.youtube.com/watch?v=bV5RcNiHlfw)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

## PaaS Manager

### Rancher

[rancher/rancher](https://github.com/rancher/rancher)
	>  Complete container management platform.

#### 📕 Articles

- [The Enterprise Grade Rancher Deployment Guide](https://blog.kubernauts.io/enterprise-grade-rancher-deployment-guide-ubuntu-fd261e00994c)
- [Howto – Set up a highly available instance of Rancher](https://blog.ronnyvdb.net/2019/01/20/howto-set-up-a-highly-available-instance-of-rancher/)

#### 🔖 Samples

- [https://github.com/arashkaffamanesh/multipass-rke-rancher](https://github.com/arashkaffamanesh/multipass-rke-rancher)
> Rancher Kubernetes Engine and Rancher Server on Multipass VMs

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>
## Proxy

### Metallb

[https://github.com/metallb/metallb](https://github.com/metallb/metallb)
> A network load-balancer implementation for Kubernetes using standard routing protocols

#### 📕 Articles
- [Using MetalLB And Traefik Load Balancing For Your Bare Metal Kubernetes Cluster – Part 1](https://www.devtech101.com/2019/02/23/using-metallb-and-traefik-load-balancing-for-your-bare-metal-kubernetes-cluster-part-1/)
- [Using Traefik As Your Ingress Controller Combined With MetalLB On Your Bare Metal Kubernetes Cluster – Part 2](https://www.devtech101.com/2019/03/02/using-traefik-as-your-ingress-controller-combined-with-metallb-on-your-bare-metal-kubernetes-cluster-part-2/)
- [Running k3s with metallb on Vagrant](https://medium.com/@toja/running-k3s-with-metallb-on-vagrant-bd9603a5113b)

#### 🔖 Samples

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Traefik

[https://github.com/traefik/traefik](https://github.com/traefik/traefik)
>  Træfik, a modern reverse proxy.

#### 📕 Articles
- [Traefik 2.0](https://traefik.io/blog/traefik-2-0-6531ec5196c2/)
- [Kubernetes & Traefik 101— When Simplicity Matters](https://medium.com/@geraldcroes/kubernetes-traefik-101-when-simplicity-matters-957eeede2cf8)
- [Traefik 2.0 & Docker 101](https://traefik.io/blog/traefik-2-0-docker-101-fc2893944b9d/)
- [Using MetalLB And Traefik Load Balancing For Your Bare Metal Kubernetes Cluster – Part 1](https://www.devtech101.com/2019/02/23/using-metallb-and-traefik-load-balancing-for-your-bare-metal-kubernetes-cluster-part-1/)
- [Using Traefik As Your Ingress Controller Combined With MetalLB On Your Bare Metal Kubernetes Cluster – Part 2](https://www.devtech101.com/2019/03/02/using-traefik-as-your-ingress-controller-combined-with-metallb-on-your-bare-metal-kubernetes-cluster-part-2/)

#### 🔖 Samples

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

## Service Mesh

### 📕 Articles
- [The Evolution of Distributed Systems on Kubernetes](https://www.infoq.com/articles/distributed-systems-kubernetes/)
- [Service Meshes: Why Istio? An Introduction](https://dzone.com/articles/why-istio-intro)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Maesh 
[https://github.com/traefik/mesh](https://github.com/traefik/mesh)
> Traefik Mesh - Simpler Service Mesh

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Linkerd

#### 📹 Videoes
- [ECS-M2: Service Mesh with Linkerd on Kubernetes](https://youtu.be/kH_ah8utAdM) - Elton Stoneman


#### 📕 Articles
- [Traefik Mesh: Simpler Service Mesh](https://doc.traefik.io/traefik-mesh/)
- [Announcing Maesh, a Lightweight and Simpler Service Mesh Made by the Traefik Team](https://traefik.io/blog/announcing-maesh-a-lightweight-and-simpler-service-mesh-made-by-the-traefik-team-cb866edc6f29/)

#### 🔖 Samples

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

## Serverless

### OpenFass

[https://github.com/openfaas/faas](https://github.com/openfaas/faas)
	> OpenFaaS - Serverless Functions Made Simple for Docker & Kubernetes.

#### 📕 Articles
- [faas-containerd - serverless without Kubernetes](https://blog.alexellis.io/faas-containerd-serverless-without-kubernetes/)
- [faasd - lightweight Serverless for your Raspberry Pi](https://blog.alexellis.io/faasd-for-lightweight-serverless/)
- [Introducing the OpenFaaS Operator for Serverless on Kubernetes](https://blog.alexellis.io/introducing-the-openfaas-operator/)

#### 📹 Videoes
- [OpenFaaS: From Zero to Serverless in 60 Seconds Anywhere with Alex Ellis](https://www.youtube.com/watch?v=C3agSKv2s_w)
- [GOTO 2018 • Serverless Beyond the Hype • Alex Ellis](https://www.youtube.com/watch?v=yOpYYYRuDQ0&feature=emb_title)

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Fission
 [https://github.com/fission/fission](https://github.com/fission/fission)
	> Fast and Simple Serverless Functions for Kubernetes

<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

	
## Application Delivery

### Helm
[https://helm.sh/](https://helm.sh/)

#### 📕 Articles
- [Helm Docs](https://helm.sh/docs/)
- [Guide to Helm 3 With an Express.js Microservice](https://www.civo.com/learn/guide-to-helm-3-with-an-express-js-microservice)
- [GitOps using Helm3 and Flux for a Node.js and Express.js Microservice](https://www.civo.com/learn/gitops-using-helm3-and-flux-for-an-node-js-and-express-js-microservice)

#### 🔖 Samples
- [https://github.com/kimcu-on-thenet/dnc-k8s-helm](https://github.com/kimcu-on-thenet/dnc-k8s-helm)
> An extremely simple .NET Core web api within EntityFrameworkCore which will be deployed in k8s by both kubectl and helm


<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>

### Flux

[https://github.com/fluxcd/flux](https://github.com/fluxcd/flux)
> A tool for turning container images into running Kubernetes services.

#### 📕 Articles

- [GitOps using Helm3 and Flux for a Node.js and Express.js Microservice](https://www.civo.com/learn/gitops-using-helm3-and-flux-for-an-node-js-and-express-js-microservice)


<div align="right">
  <b><a href="#contents">↥ Back To Top</a></b>
</div>



## Revers Proxy

### 📕 Articles

### Library
- [ProxyKit](https://github.com/ProxyKit/ProxyKit)
	> A toolkit to create code-first HTTP reverse proxies on ASP.NET Core
	
- [reverse-proxy](https://github.com/microsoft/reverse-proxy)
	> A toolkit for developing high-performance HTTP reverse proxy applications.

### Reverse-Proxy

#### 📕 Articles