# MERN Task Manager with JWT Authentication  

A Task Manager application built using the MERN (MongoDB, Express, React, Node.js) stack. This app includes authentication using JWT with access and refresh tokens, and tasks are managed with full CRUD functionality.

---

## Live Application  

- **Link 🔗**: [Task Manager](https://task-manager-mern-bice.vercel.app/)  

---

## Features  

- **User Authentication**: Secure login and registration using JWT (Access & Refresh Tokens)  
- **Task Management**: Create, read, update, and delete tasks  
- **Persistent Login**: Tokens ensure user remains logged in across page refreshes  
- **Secure Backend**: Follows MVC architecture with proper route protection  
- **Responsive Frontend**: Built with React for a seamless user experience  

---

## Project Structure  

### Backend  

- **/models**: MongoDB schemas for `User` and `Task`  
- **/controllers**: Handles business logic for `auth` and `task` operations  
- **/routes**: REST API endpoints  
- **/middlewares**: Authentication (`authMiddleware.js`) and error handling  

### Frontend  

- **/src/pages**: Components for `Login`, `Register`, and `Tasks`  
- **/src/context**: `AuthContext` to manage global user authentication state  
- **/src/api**: Axios configuration and API functions for HTTP requests  

---

## Code Structure
### Backend

backend/ ├── models/ # User & Task schemas ├── controllers/ # Auth & Task logic ├── routes/ # API endpoints ├── middlewares/ # Authentication middleware ├── app.js # Main app setup

### Frontend

frontend/ ├── src/ │ ├── api/ # API functions for auth & tasks │ ├── components/ # Reusable UI components │ ├── context/ # Global state (AuthContext) │ ├── pages/ # Login, Register, Tasks │ ├── App.js # Main app component │ ├── main.jsx # Entry point

---

## Prerequisites  

Ensure the following are installed on your system:  

- [Node.js](https://nodejs.org/) (v16 or higher)  
- [MongoDB](https://www.mongodb.com/) (local or MongoDB Atlas)  
- [Git](https://git-scm.com/)  

---

## Setup  

### 1. Clone the Repository  

```bash  
git clone https://github.com/yourusername/mern-task-manager.git  
cd mern-task-manager

```

### 2. Backend Setup

```bash
cd backend
npm install
```
### 2.1. Backend .env file setup

```bash
PORT_URI=5000
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret  
JWT_REFRESH_SECRET=your_refresh_jwt_secret  

```
### 2.2. Start Backend

```bash
npm start  

```

### 3. Frontend Setup

```bash
cd ../frontend  
npm install  

```

### 3.1. Change API_URL in api.js file

```bash
http://localhost:5000/api

```

### 3.2. Start Frontend

```bash
npm run dev  

