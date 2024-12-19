# Arnifi Blog

Arnifi Blog is a multi-user blogging platform built with a Node.js backend and a Vite-powered React frontend. This project enables users to create, read, update, and delete blog posts with secure authentication and a user-friendly interface.

## Repository

GitHub: [Arnifi Blog](https://github.com/rakibultron/arnifi-blog.git)

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or higher recommended)
- **pnpm** (preferred package manager)
- **MongoDB Atlas** or a local MongoDB instance

---

## Project Structure

The project consists of two main parts:

1. **Client**: The frontend application built with React and Vite.
2. **Server**: The backend application built with Node.js, Express.js, and MongoDB.

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/rakibultron/arnifi-blog.git
cd arnifi-blog
```

### 2. Configure the Server

Navigate to the server directory:

```bash
cd server
```

#### Install dependencies:

```bash
pnpm install
```

#### Set up environment variables:

Create a `.env.dev` file in the `server` directory with the following content:

```env
# App port
PORT=5001

# Database
DB_NAME="example-db"
DB_USER_NAME="example-user"
DB_PASSWORD="example-pass"
UNIQUE_DB_UUID="my-cluster.example.mongodb.net"

# JWT Secret
JWT_SECRET=secrate
```

#### Start the server in development mode:

```bash
pnpm run start:dev
```

The server will run on `http://localhost:5001` by default.

---

### 3. Configure the Client

Navigate to the client directory:

```bash
cd ../client
```

#### Install dependencies:

```bash
pnpm install
```

#### Set up environment variables:

Create a `.env` file in the `client` directory with the following content:

```env
VITE_APP_BACKEND_API_BASE=http://localhost:5001/api/v1
```

#### Start the client in development mode:

```bash
pnpm run dev
```

The client will run on `http://localhost:5173` by default.

---

## Build Instructions

### Server

To run the server in production mode:

```bash
pnpm run start
```

### Client

To build the client for production:

```bash
pnpm run build
```

Preview the production build:

```bash
pnpm run preview
```

---

## Directory Structure

```plaintext
arnifi-blog/
├── client/      # Frontend application
└── server/      # Backend application
```

## Issues

If you encounter any bugs or issues, please report them [here](https://github.com/rakibultron/arnifi-blog/issues).

## Author

Rakibul Islam
GitHub: [rakibultron](https://github.com/rakibultron)
