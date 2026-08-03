# 🚀 RizzChat Backend

The backend service for **RizzChat**, a real-time group chat application built with **Node.js**, **Express.js**, **Socket.io**, and **MongoDB**. It handles user authentication, real-time messaging, media storage, and persistent chat history.

---

## 🔗 Frontend Repository

https://github.com/shivanimourya2/RizzChat

## 🌐 Live Demo

https://rizz-chatt.web.app/

---

## ✨ Features

### 💬 Real-Time Messaging

* Real-time communication using **Socket.io**
* Supports multiple users chatting simultaneously
* Instant message broadcasting without page refresh

### 🗃️ Persistent Chat Storage

* Messages are securely stored in **MongoDB**
* Previous conversations are available after reconnecting

### 📸 Image Sharing

* Upload and store images using **Cloudinary**
* Media URLs are saved in the database
* Shared images are accessible to all users

### 🔐 Authentication Support

* Verifies authenticated users from the frontend
* Protects chat-related API endpoints

### ⚡ REST APIs

* APIs for message management
* Media upload handling
* User-related operations

---

## 🛠️ Tech Stack

| Category                | Technology |
| ----------------------- | ---------- |
| Runtime                 | Node.js    |
| Framework               | Express.js |
| Database                | MongoDB    |
| Real-Time Communication | Socket.io  |
| Image Storage           | Cloudinary |
| Environment Variables   | dotenv     |
| File Upload             | Multer     |

---

## 📂 Project Structure

```text
backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── socket/
├── config/
├── utils/
├── uploads/
├── server.js
└── package.json
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/shivanimourya2/RizzChat-BE.git
cd RizzChat-BE
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Start the server

```bash
npm start
```

or (development)

```bash
npm run dev
```

The backend runs on:

```text
http://localhost:5000
```

---

## 🔄 How It Works

1. The frontend authenticates users using **Firebase Authentication**.
2. The backend establishes **Socket.io** connections for all connected users.
3. Messages are instantly broadcast to every participant.
4. Chat messages are stored in **MongoDB** for future retrieval.
5. Images uploaded by users are stored in **Cloudinary**, while their URLs are saved in the database.
6. Previous messages are fetched whenever a user reconnects.

---

## 📌 API Overview

| Method | Endpoint  | Description            |
| ------ | --------- | ---------------------- |
| GET    | /messages | Fetch chat history     |
| POST   | /messages | Send a new message     |
| POST   | /upload   | Upload an image        |
| GET    | /media    | Retrieve shared images |

> Additional Socket.io events are used for real-time communication.

---

## 👩‍💻 Author

**Shivani Mourya**
