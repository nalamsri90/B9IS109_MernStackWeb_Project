import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Login - Ecommerce App">
  <div className="form-container p-5 rounded bg-light">
    <form onSubmit={handleSubmit} className="needs-validation">
      <h1 className="text-center mb-4">Login</h1>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Your Email</label>
        <input
          type="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control rounded-pill"
          id="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Your Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control rounded-pill"
          id="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="mb-3 text-center">
        <button
          type="button"
          className="btn forgot-btn"
          onClick={() => {
            navigate("/forgot-password");
          }}
        >
          Forgot Password
        </button>
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary rounded-pill">Login</button>
      </div>
    </form>
  </div>
</Layout>

  
  
  );
};

export default Login;
