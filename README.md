## HRMS Microservices Project

This project implements a **Human Resource Management System (HRMS)** using a **Spring Boot Microservices Architecture**.
The system demonstrates production-grade backend patterns including authentication, service discovery, observability, and containerization.

### Implemented Components

* **API Gateway**

  * Central entry point for all client requests
  * Handles routing to internal microservices

* **JWT Authentication**

  * Secure stateless authentication using JSON Web Tokens

* **RBAC Authorization**

  * Role-Based Access Control for restricting API access based on user roles

* **Refresh Tokens**

  * Enables secure renewal of access tokens without re-authentication

* **Auth Service + PostgreSQL**

  * Dedicated authentication microservice
  * Stores user credentials, roles, and refresh tokens

* **User Service**

  * Manages user-related data and operations

* **Contact Service**

  * Handles user contact information management

* **Redis Rate Limiting**

  * Protects APIs by limiting request frequency

* **Circuit Breaker**

  * Improves system resilience by preventing cascading failures

* **Eureka Service Discovery**

  * Dynamic service registration and discovery for microservices

* **Zipkin Tracing**

  * Distributed tracing for monitoring request flow across services

* **Prometheus Metrics**

  * Collects application metrics for monitoring

* **Grafana Dashboards**

  * Visualizes system metrics and performance

* **Docker Microservices**

  * Containerized deployment of all services for portability and scalability
