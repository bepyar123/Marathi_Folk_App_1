import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate("/communityform");
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#fff8f3]">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center text-[#e36414] mb-4">
          Login
        </h2>
        {message && <p className="text-red-500 text-center mb-3">{message}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border w-full p-2 mb-3 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border w-full p-2 mb-3 rounded"
          required
        />
        <button
          type="submit"
          className="bg-[#e36414] text-white w-full py-2 rounded hover:bg-[#d35400]"
        >
          Login
        </button>
        <p className="text-center text-sm mt-3">
          Don’t have an account?{" "}
          <Link to="/register" className="text-[#e36414] hover:underline">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
