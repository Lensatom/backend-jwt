# backend-jwt

A simple and secure backend API using Node.js, Express, and JWT (JSON Web Tokens) for user authentication and authorization.

# Features

User registration and login with hashed passwords (bcrypt)

JWT-based authentication for protected routes

Token expiration and refresh logic (optional)

Secure middleware to validate tokens

Clear and modular project structure


# Tech Stack

Node.js

Express

MongoDB / Mongoose (or your preferred database)

jsonwebtoken

bcryptjs


# Getting Started

Prerequisites

Node.js and npm installed

MongoDB (local or cloud like MongoDB Atlas)

.env file configured with the necessary variables


# Installation

git clone https://github.com/yourusername/backend-jwt.git
cd backend-jwt
npm install

# Environment Variables

Create a .env file in the root and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

# Running the Server

npm run dev

Server runs on http://localhost:5000

# API Endpoints

Auth Routes

> Use the token in the Authorization header as Bearer <token> for protected routes.



# Folder Structure

backend-jwt/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── config/
├── .env
├── server.js
└── package.json

# License

This project is licensed under the MIT License.
