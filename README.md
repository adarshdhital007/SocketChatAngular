# Chat Application with Angular and Socket.IO

## Overview

This project is a real-time chat application built using Angular and Socket.IO. It allows users to set their usernames, send messages, and delete their own messages. The application is designed to demonstrate the integration of Angular for the front end and Socket.IO for real-time communication on the server side.

## Project Components

### `app.component.html`

- The main HTML template of the Angular component.
- Contains the chat interface and logic for displaying and sending messages.

### `app.component.ts`

- The TypeScript file for the Angular component.
- Manages user interaction, including setting usernames, sending messages, and deleting messages.
- Uses the `SocketService` to communicate with the server.

### `socket.service.ts`

- Angular service responsible for handling Socket.IO interactions.
- Establishes a WebSocket connection to the server.
- Sends and receives messages, sets usernames, and handles message deletion.

### `server.js`

- The server-side JavaScript file that runs the Socket.IO server.
- Manages WebSocket connections, user usernames, and real-time message handling.
- Users can set unique usernames, send messages, and delete their own messages.

## How to Run the Project

1. Ensure you have Node.js and Angular CLI installed on your system.
2. Run the Angular development server using `ng serve`.
3. Start the server by  going into the backend folder and then running `node server.js` in the directory.
4. Open a web browser and navigate to the application's URL (usually `http://localhost:4200`).

## Features

- Users can set their unique usernames.
- Real-time chat with other users.
- Users can send and receive messages.
- Users can delete their own messages.

## Dependencies

- Angular (Front-end)
- Socket.IO (Server-side WebSocket library)
- Express (Server framework)
- CORS (Cross-Origin Resource Sharing)

## Usage

1. Open the application in your web browser.
2. Enter a unique username.
3. Start chatting with other users.
