import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h1>Task Manager</h1>
      <div>
        {user ? (
          <>
            <button
              onClick={handleLogout}
              style={{
                padding: "10px",
                backgroundColor: "#fcba03",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button
                style={{
                  padding: "10px",
                  backgroundColor: "#fcba03",
                  borderRadius: "5px",
                  color: "black",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
            </Link>
            <Link to="/register">
              <button
                style={{
                  padding: "10px",
                  backgroundColor: "#fcba03",
                  borderRadius: "5px",
                  color: "black",
                  cursor: "pointer",
                }}
              >
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
