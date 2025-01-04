# Task-Manager-MERN
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
