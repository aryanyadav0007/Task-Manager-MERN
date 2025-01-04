// import { createContext, useState, useEffect } from "react";
// import { refreshAccessToken } from "../api/api";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const refreshToken = async () => {
//     const refreshToken = localStorage.getItem("refreshToken");
//     if (refreshToken) {
//       try {
//         const { data } = await refreshAccessToken(refreshToken);
//         localStorage.setItem("accessToken", data.accessToken);
//       } catch (error) {
//         console.error("Token refresh failed");
//         logout();
//       }
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.clear();
//   };

//   useEffect(() => {
//     refreshToken();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import { createContext, useState, useEffect } from "react";
import { refreshAccessToken } from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Load user from localStorage (if exists)
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      try {
        const { data } = await refreshAccessToken(refreshToken);
        localStorage.setItem("accessToken", data.accessToken);
      } catch (error) {
        console.error("Token refresh failed");
        logout();
      }
    }
  };

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Save user to localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  useEffect(() => {
    refreshToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
