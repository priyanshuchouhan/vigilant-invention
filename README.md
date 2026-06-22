# Todo API

Node.js Express Todo API with JWT Authentication and PostgreSQL.

## Features

- User Signup
- User Login
- JWT Authentication
- Todo CRUD APIs
- Health Check Endpoint
- Swagger Documentation

## Endpoints

POST /auth/signup

POST /auth/login

GET /health

POST /todos

GET /todos

PUT /todos/:id

DELETE /todos/:id

## Run Locally

```bash
npm install
npm run dev
```

## Docker

```bash
docker build -t todo-api .
docker run -p 3000:3000 todo-api
```

## Terraform

```bash
terraform init
terraform plan
terraform apply
```

## AWS

- Amazon ECR
- ECS Fargate
- Application Load Balancer
- CloudWatch Logs
