# Simple NodeJs Kafka producer and consumer

### Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Run](#local-run)
- [API Reference](#api-reference)

### About The Project
Example development of a REST api using NodeJS:

### Getting Started

#### Prerequisites
1. This project requires Docker, Yarn and NodeJs to be installed in your system.

#### Local Run
1. To start up the Kafka broker and Kafka UI run:
```
docker compose up
```
2. Enter to the Kakfa UI in http://;localhost:8080 and create a topic.
3. To Start the application:
```
yarn start
```

### API Reference

#### Get all items

```http
  POST /api/producer
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `topic`   | `string` | **Required**.              |
| `message` | `any`    | **Required**.              |
