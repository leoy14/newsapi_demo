# News API Project

## Overview

This project is a full-stack web application that allows users to search for and display news articles using a public news API (such as the GNews API). It consists of a backend service built with Node.js and Express, and a frontend client built with React.js. The backend service fetches news articles from the API and provides endpoints for various search functionalities, while the frontend offers an intuitive user interface for interacting with these endpoints.

## Features

- **Fetch Top News Articles**: Retrieve a specified number of top news articles.
- **Search by Title or Author**: Find news articles by a specific title or author.
- **Search by Keywords**: Search for news articles that match specific keywords.
- **Caching**: Implemented on the backend to minimize API requests and enhance performance.
- **Retry Mechanism**: Automatically retries failed requests to handle network issues.
- **User-Friendly Interface**: Simple and clean React frontend for easy interaction with the API.

## Technologies Used

- **Backend**: Node.js, Express, Axios, Node-Cache
- **Frontend**: React.js
- **API**: GNews API (or any similar news API)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js**: v16.x or later (Preferably v16.x to avoid OpenSSL compatibility issues)
- **npm**: v6.x or later
- **GNews API Key**: Sign up at [GNews API](https://gnews.io/) to obtain your API key.

## Project Structure

The project is divided into two main directories:

- **`news-api`**: Contains the backend Node.js application.
- **`news-app`**: Contains the frontend React application.

## Project Run

Run Server

```node server.js```

Run frontend

```npm start```