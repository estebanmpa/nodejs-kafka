# Simple NodeJs Kafka producer and consumer

### Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Run](#local-run)
- [API Reference](#api-reference)

### About The Project
Basic example of Kafka's message exchange.
To send messages to Kafka it uses a REST endpoint.
To receive messages the consumer is subscribed at init and only shows the received message in the console.

### Getting Started

#### Prerequisites
1. This project requires Docker, Yarn and NodeJs to be installed in your system.

#### Local Run
1. To start up the Kafka broker and Kafka UI run:
```sh
docker compose up
```
2. Enter to the Kakfa UI in http://localhost:8080 and create a topic.
3. Enter the created topic name into .env file.
4. To Start the application:
```sh
yarn start
```

### API Reference

#### Produce a message

```http
  POST /api/producer
```

Example:

```json
{
    "topic": "example_topic",
    "message": "hola"
}
```

| Property  | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `topic`   | `string` | **Required**.              |
| `message` | `any`    | **Required**.              |
