---
title: TaskQueue
description: Distributed task queue with priority scheduling, delayed jobs, and retries.
url: https://github.com/ADIBAINS/TaskQueue
order: 20
stack: [TypeScript, Kafka, Redis, Kubernetes, KEDA]
detail: Built the queue without a queue library and scaled workers based on Redis queue depth.
---

## How it works

The priority scheduler uses a binary min-heap, and Redis holds delayed jobs. Workers use Lua-based locks for distributed coordination. Failed jobs retry with exponential backoff before moving to a dead-letter queue.

## Scaling and delivery

KEDA scales workers against Redis queue depth. The Jenkins pipeline runs lint checks and Jest tests, then builds the Docker images and deploys with Helm.
