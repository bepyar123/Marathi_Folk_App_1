import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const register = (username, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.username === username)) {
      return false;
    }
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  };

  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userFound = users.find(
      (u) => u.username === username && u.password === password
    );
    if (userFound) {
      setUser({ username });
      localStorage.setItem("user", JSON.stringify({ username }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
