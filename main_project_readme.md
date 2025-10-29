# 🚀 Microservices 3-Tier Application on Kubernetes

[![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)](https://kubernetes.io/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![ArgoCD](https://img.shields.io/badge/ArgoCD-EF7B4D?style=for-the-badge&logo=argo&logoColor=white)](https://argoproj.github.io/cd/)

A production-ready, cloud-native microservices application demonstrating modern DevOps practices with container orchestration, GitOps deployment, and scalable architecture.

## 📋 Table of Contents

- [Overview](#-overview)
- [Architecture](#-architecture)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Repository Structure](#-repository-structure)
- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [Deployment](#-deployment)
- [Monitoring](#-monitoring--observability)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Scaling](#-scaling)
- [Security](#-security)
- [Contributing](#-contributing)

---

## 🎯 Overview

This project demonstrates a **complete end-to-end microservices architecture** deployed on Kubernetes, showcasing industry best practices for building, deploying, and managing cloud-native applications.

### Key Highlights

✅ **Microservices Architecture** - Independent, loosely-coupled services  
✅ **Container Orchestration** - Kubernetes for automated deployment and scaling  
✅ **GitOps Workflow** - ArgoCD for declarative continuous delivery  
✅ **Multi-Repository Structure** - Separate repos for frontend, backend, and infrastructure  
✅ **Production-Ready** - Health checks, resource limits, and auto-scaling configured  
✅ **Cloud Agnostic** - Deploy on any Kubernetes cluster (AWS EKS, GKE, Azure AKS, on-prem)

---

## 🏗️ Architecture

### High-Level Architecture

```
                    ┌──────────────┐
                    │    Users     │
                    └──────┬───────┘
                           │
                           ↓
                  ┌────────────────┐
                  │ Load Balancer  │
                  └────────┬───────┘
                           │
              ┌────────────┴────────────┐
              ↓                         ↓
     ┌────────────────┐       ┌────────────────┐
     │  Frontend Pod  │       │  Frontend Pod  │
     │ React + Nginx  │       │ React + Nginx  │
     └────────┬───────┘       └────────┬───────┘
              │                         │
              └────────────┬────────────┘
                           ↓
                  ┌────────────────┐
                  │ Backend Service│
                  └────────┬───────┘
                           │
              ┌────────────┴────────────┐
              ↓                         ↓
     ┌────────────────┐       ┌────────────────┐
     │  Backend Pod   │       │  Backend Pod   │
     │ Node.js + API  │       │ Node.js + API  │
     └────────┬───────┘       └────────┬───────┘
              │                         │
              └────────────┬────────────┘
                           ↓
                  ┌────────────────┐
                  │ MongoDB Service│
                  └────────┬───────┘
                           ↓
                  ┌────────────────┐
                  │  MongoDB Pod   │
                  │  + PV Storage  │
                  └────────────────┘
```

### Component Breakdown

| Component | Technology | Replicas | Purpose |
|-----------|-----------|----------|---------|
| Frontend | React 18 + Nginx | 2 | User interface, static assets |
| Backend | Node.js 18 + Express | 2 | REST API, business logic |
| Database | MongoDB 7.0 | 1 | Data persistence |
| Load Balancer | Kubernetes Service | 1 | External traffic routing |
| GitOps | ArgoCD | 1 | Automated deployment |

---

## ✨ Features

### Application Features
- 📝 CRUD Operations - Create, Read, Update, Delete tasks
- 🔄 Real-time Updates - Instant UI feedback
- 📱 Responsive Design - Mobile and desktop friendly
- 🎨 Modern UI - Clean, intuitive interface

### DevOps Features
- 🐳 Containerization - Multi-stage Docker builds
- ☸️ Orchestration - Kubernetes with auto-healing
- 🔄 GitOps - ArgoCD continuous delivery
- 📊 Health Checks - Liveness and readiness probes
- 🔒 Security - Non-root containers, resource limits
- 📈 Scalability - Horizontal Pod Autoscaling ready
- 💾 Persistence - StatefulSets with persistent volumes
- 🔧 Configuration - ConfigMaps and Secrets
- 🌐 Service Discovery - Internal DNS

---

## 🛠️ Tech Stack

**Frontend**
- React 18.2.0
- Nginx Alpine
- Fetch API

**Backend**
- Node.js 18 LTS
- Express 4.18
- Mongoose 8.0

**Database**
- MongoDB 7.0
- Persistent Volumes

**DevOps**
- Docker 24+
- Kubernetes 1.28+
- ArgoCD 2.9+
- Helm 3
- Git

---

## 📂 Repository Structure

This project follows a **multi-repository (polyrepo)** approach:

```
microservices-k8s-3tier/
│
├── frontend/                    # React Frontend Repo
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── package.json
│
├── backend/                     # Node.js Backend Repo
│   ├── server.js
│   ├── Dockerfile
│   └── package.json
│
└── infrastructure/              # K8s Infrastructure Repo
    ├── k8s-manifests/
    ├── helm-charts/
    └── argocd/
```

### Repository Links

| Repository | Description |
|------------|-------------|
| **Frontend** | React UI application |
| **Backend** | Node.js REST API |
| **Infrastructure** | K8s manifests & Helm charts |

---

## 📋 Prerequisites

### Required Tools

| Tool | Version | Installation |
|------|---------|--------------|
| Docker | 24.0+ | [Get Docker](https://docs.docker.com/get-docker/) |
| Kubernetes | 1.28+ | [Install kubectl](https://kubernetes.io/docs/tasks/tools/) |
| Helm | 3.0+ | [Install Helm](https://helm.sh/docs/intro/install/) |
| Git | 2.40+ | [Install Git](https://git-scm.com/downloads) |
| Node.js | 18 LTS | [Install Node](https://nodejs.org/) |

### Kubernetes Cluster

Choose one:
- **Local**: Minikube, Kind, Docker Desktop
- **Cloud**: AWS EKS, Google GKE, Azure AKS
- **On-Prem**: Kubeadm, Rancher

---

## 🚀 Quick Start

### 1. Clone Repositories

```bash
mkdir microservices-k8s-3tier && cd microservices-k8s-3tier

git clone https://github.com/YOUR-USERNAME/frontend-app.git
git clone https://github.com/YOUR-USERNAME/backend-app.git
git clone https://github.com/YOUR-USERNAME/k8s-infrastructure.git
```

### 2. Build Docker Images

```bash
# Frontend
cd frontend-app
docker build -t YOUR-DOCKERHUB-USERNAME/frontend:v1.0.0 .
docker push YOUR-DOCKERHUB-USERNAME/frontend:v1.0.0

# Backend
cd ../backend-app
docker build -t YOUR-DOCKERHUB-USERNAME/backend:v1.0.0 .
docker push YOUR-DOCKERHUB-USERNAME/backend:v1.0.0
```

### 3. Update Image References

```bash
cd ../k8s-infrastructure/k8s-manifests

# Update image tags in deployment files
sed -i 's|your-registry/frontend:latest|YOUR-DOCKERHUB-USERNAME/frontend:v1.0.0|g' frontend/deployment.yaml
sed -i 's|your-registry/backend:latest|YOUR-DOCKERHUB-USERNAME/backend:v1.0.0|g' backend/deployment.yaml
```

### 4. Deploy to Kubernetes

```bash
# Create namespace
kubectl create namespace microservices-app

# Deploy components
kubectl apply -f k8s-manifests/database/
kubectl apply -f k8s-manifests/backend/
kubectl apply -f k8s-manifests/frontend/

# Wait for ready
kubectl wait --for=condition=ready pod -l app=mongodb -n microservices-app --timeout=300s
kubectl wait --for=condition=ready pod -l app=backend -n microservices-app --timeout=300s
kubectl wait --for=condition=ready pod -l app=frontend -n microservices-app --timeout=300s
```

### 5. Access Application

```bash
# Get service URL
kubectl get svc frontend-service -n microservices-app

# For local clusters
kubectl port-forward svc/frontend-service 8080:80 -n microservices-app

# Open: http://localhost:8080
```

---

## 🚢 Deployment

### Option A: kubectl (Manual)

```bash
kubectl apply -f k8s-infrastructure/k8s-manifests/
```

### Option B: Helm

```bash
helm install microservices-app ./k8s-infrastructure/helm-charts/microservices-app \
  --namespace microservices-app \
  --create-namespace \
  --set frontend.image.tag=v1.0.0 \
  --set backend.image.tag=v1.0.0
```

### Option C: ArgoCD (Recommended)

```bash
# Install ArgoCD
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# Wait for ready
kubectl wait --for=condition=ready pod -l app.kubernetes.io/name=argocd-server -n argocd --timeout=300s

# Get admin password
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d

# Access UI
kubectl port-forward svc/argocd-server -n argocd 8080:443

# Login: https://localhost:8080
# Username: admin
# Password: (from above)

# Deploy app
kubectl apply -f k8s-infrastructure/argocd/application.yaml
```

---

## 🎨 Architecture Decisions

### Why Microservices?

- **Independent Scaling** - Scale services independently
- **Technology Flexibility** - Best tool for each service
- **Fault Isolation** - Service failures don't crash system
- **Team Autonomy** - Different teams, different services

### Why Kubernetes?

- **Self-Healing** - Auto-restart failed containers
- **Load Balancing** - Traffic distribution
- **Rolling Updates** - Zero-downtime deployments
- **Resource Management** - Efficient infrastructure use
- **Portability** - Run anywhere

### Why ArgoCD?

- **GitOps** - Git as single source of truth
- **Automated Sync** - Auto-deploy from Git
- **Rollback** - Easy version rollback
- **Multi-Cluster** - Manage multiple clusters
- **Visualization** - Real-time deployment status

### Why Multi-Repo?

- **Clear Ownership** - Team-owned repositories
- **Independent CI/CD** - Deploy independently
- **Better Security** - Granular access control
- **Simplified Development** - Smaller, focused repos

---

## 📊 Monitoring & Observability

### Health Checks

```bash
# Backend health
curl http://backend-service:3000/health

# Response:
# {
#   "status": "healthy",
#   "timestamp": "2025-10-29T10:30:00Z",
#   "mongodb": "connected"
# }
```

### Kubernetes Probes

```yaml
livenessProbe:
  httpGet:
    path: /health
    port: 3000
  initialDelaySeconds: 30
  periodSeconds: 10

readinessProbe:
  httpGet:
    path: /health
    port: 3000
  initialDelaySeconds: 10
  periodSeconds: 5
```

### Viewing Logs

```bash
# View deployment logs
kubectl logs -f deployment/backend -n microservices-app

# View specific pod
kubectl logs -f POD_NAME -n microservices-app

# View all replicas
kubectl logs -f -l app=backend -n microservices-app
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions Example

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Build Docker image
        run: docker build -t ${{ secrets.DOCKERHUB_USERNAME }}/backend:${{ github.sha }} .
      
      - name: Push to Docker Hub
        run: docker push ${{ secrets.DOCKERHUB_USERNAME }}/backend:${{ github.sha }}
      
      - name: Update K8s manifest
        run: |
          cd ../k8s-infrastructure
          sed -i "s|backend:.*|backend:${{ github.sha }}|g" k8s-manifests/backend/deployment.yaml
          git commit -am "Update backend to ${{ github.sha }}"
          git push
```

### ArgoCD Auto-Sync

ArgoCD automatically:
1. Monitors Git for changes
2. Compares desired vs actual state
3. Syncs differences
4. Reports status

---

## 📈 Scaling

### Manual Scaling

```bash
# Scale frontend
kubectl scale deployment frontend --replicas=5 -n microservices-app

# Scale backend
kubectl scale deployment backend --replicas=10 -n microservices-app
```

### Horizontal Pod Autoscaling

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: backend-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: backend
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
```

---

## 🔒 Security

### Container Security

✅ Non-root containers  
✅ Read-only filesystem  
✅ Security scanning  
✅ Minimal base images (Alpine)

### Kubernetes Security

✅ RBAC (Role-Based Access Control)  
✅ Network Policies  
✅ Resource Limits  
✅ Secrets Management  
✅ Pod Security Standards

### Network Policy Example

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: backend-policy
spec:
  podSelector:
    matchLabels:
      app: backend
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: frontend
    ports:
    - port: 3000
```

---

## 🧪 Testing

### Unit Tests

```bash
# Backend
cd backend-app
npm test

# Frontend
cd frontend-app
npm test
```

### Integration Tests

```bash
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name": "Test item"}'
```

### Smoke Tests

```bash
# Verify pods
kubectl get pods -n microservices-app

# Test service
kubectl run curl --image=curlimages/curl -i --rm --restart=Never -- \
  curl http://backend-service:3000/health
```

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### Guidelines

- Follow existing code style
- Add tests for new features
- Update documentation
- Keep commits atomic

---

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/YOUR-USERNAME/microservices-k8s-3tier/issues)
- **Discussions**: [GitHub Discussions](https://github.com/YOUR-USERNAME/microservices-k8s-3tier/discussions)

---

## 🙏 Acknowledgments

- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [ArgoCD Documentation](https://argo-cd.readthedocs.io/)
- [React Documentation](https://react.dev/)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Manual](https://docs.mongodb.com/)

---

## 📚 Additional Resources

- [Kubernetes Best Practices](https://kubernetes.io/docs/concepts/configuration/overview/)
- [12-Factor App](https://12factor.net/)
- [GitOps Principles](https://opengitops.dev/)
- [Container Security](https://snyk.io/learn/container-security/)

---

**⭐ If you find this helpful, please star it!**

**🔗 Connect:**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/YOUR-PROFILE)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=flat&logo=twitter&logoColor=white)](https://twitter.com/YOUR-HANDLE)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/YOUR-USERNAME)

---

*Built with ❤️ using Kubernetes, Docker, React, Node.js, and MongoDB*