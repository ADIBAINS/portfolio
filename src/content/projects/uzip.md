---
title: Uzip
description: URL shortener and click analytics built as four event-driven Go services.
url: https://github.com/ADIBAINS/Uzip
order: 10
stack: [Go, Kafka, Kubernetes, ClickHouse]
detail: Uses Argo CD for deployments and Prometheus, Grafana, and Jaeger for observability.
---

## How it works

Four Go services handle URL shortening and analytics. Kafka separates click processing from the redirect path. PostgreSQL, ClickHouse, and Redis support the application's storage, analytics, and caching needs.

## Deployment and monitoring

The services are containerized and deployed to Kubernetes with Helm. GitHub Actions builds and tests the images, and Argo CD syncs them to the cluster. Prometheus and Grafana surface metrics, and Jaeger provides distributed traces.
