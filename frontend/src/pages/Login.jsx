import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/api";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  //   const [formData, setFormData] = useState({ username: "", password: "" });
  //   const { setUser } = useContext(AuthContext);
  //   const navigate = useNavigate();

  //   const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const { data } = await loginUser(formData);
  //       localStorage.setItem("accessToken", data.accessToken);
  //       localStorage.setItem("refreshToken", data.refreshToken);
  //       setUser(formData.username);
  //       navigate("/tasks");
  //     } catch (error) {
  //       alert("Invalid credentials");
  //       console.error("Login failed");
  //     }
  //   };
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser(formData);
      localStorage.setItem("accessToken", data.accessToken); // Store token in localStorage
      localStorage.setItem("refreshToken", data.refreshToken);
      login({ username: formData.username }); // Set user context
      navigate("/tasks");
    } catch (error) {
      console.error("Login failed", error.message);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: "150px",
          padding: "25px",
          height: "300px",
          width: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "1px 1px 25px rgb(0,0,0,0.3)",
          borderRadius: "20px",
        }}
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "5px",
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "1rem",
            marginTop: "10px",
            borderRadius: "5px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#fcba03",
            marginTop: "15px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
