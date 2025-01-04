import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Intercept requests to add token
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("accessToken");
  if (token) req.headers.authorization = token;
  return req;
});

// Authentication Endpoints
export const registerUser = (formData) => API.post("/auth/register", formData);
export const loginUser = (formData) => API.post("/auth/login", formData);
export const refreshAccessToken = (token) => API.post("/auth/token", { token });

// Task Endpoints
export const getTasks = () => API.get("/tasks");
export const createTask = (task) => API.post("/tasks", task);
export const updateTask = (id, updatedTask) =>
  API.put(`/tasks/${id}`, updatedTask);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
