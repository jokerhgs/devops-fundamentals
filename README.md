# Docker Compose

Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application's services, and then with a single command, you create and start all the services from your configuration.

This implementation demonstrates a microservices architecture where multiple services are orchestrated together.

## Project Structure

This directory contains a multi-service setup:
- **`services/users`**: A Node.js service for user management (runs on port `3001`).
- **`services/products`**: A Node.js service for product management (runs on port `3002`).
- **`docker-compose.yaml`**: The orchestration file that builds and connects these services.

## Key Benefits

- **Single command setup**: Launch the entire microservices stack with `docker compose up`.
- **Isolation**: Each service lives in its own containerized environment.
- **Service Discovery**: Services can communicate with each other using their service names (e.g., `users`, `products`) as hostnames.

## Main Concepts

1.  **Services**: Define the containers that make up your app. In this project, we have `users` and `products`.
2.  **Networks**: Compose automatically sets up a network so containers can talk to each other.
3.  **Build Context**: Each service specifies its own `build` path (e.g., `./services/users`) where its `Dockerfile` is located.

## Common Commands

| Command | Description |
| :--- | :--- |
| `docker compose up` | Build, create, and start all services |
| `docker compose up -d` | Start services in detached mode (background) |
| `docker compose down` | Stop and remove services and networks |
| `docker compose ps` | List status of the services |
| `docker compose logs -f` | Tail logs for all services |

## Example Orchestration

In our `docker-compose.yaml`, we map different host ports to the same internal container port (`4000`):

```yaml
services:
  users:
    build: ./services/users
    ports:
      - "3001:4000"
  
  products:
    build: ./services/products
    ports:
      - "3002:4000"
```

---
[← Back to Main Repository](https://github.com/jokerhgs/devops-fundamentals)
