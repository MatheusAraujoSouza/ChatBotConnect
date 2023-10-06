# BARD Chatbot API Documentation

## Introduction

Welcome to the BARD Chatbot API! This API allows you to interact with the BARD chatbot by sending messages and receiving responses.

## Configuration

Before using this API, you need to configure your API token by setting it as an environment variable. This token is required for authentication when communicating with the BARD chatbot service.

### Environment Variable

You should set the following environment variable with your BARD API key:

- **BARD_API_KEY**: Your unique API key for accessing the BARD chatbot service.

Here's an example of how to set the environment variable in a Unix/Linux-based system:

```bash
export BARD_API_KEY=your-api-key-goes-here
```

## Base URL

The base URL for this API is: `https://your-api-base-url.com`

## Endpoints

### 1. Send a Message to BARD

**Endpoint:** `POST /simple-communication`

This endpoint allows you to send a message to the BARD chatbot and receive a response.

#### Request

- **Method:** POST
- **URL:** `/simple-communication`
- **Headers:**
  - `Content-Type: application/json`

#### Request Body

- **message** (string, required): The message you want to send to the chatbot.

Example Request Body:

```json
{
  "message": "Hello, BARD! How can you assist me?"
}
```

Response

Status Code: 200 OK




Example Response

```
{
  "response": "Hello! I'm BARD, your friendly chatbot. How can I assist you today?"
}

```

## Conclusion
You can use the /simple-communication endpoint to send messages to the BARD chatbot and retrieve responses. Feel free to integrate this API into your application to enable chatbot interactions.
