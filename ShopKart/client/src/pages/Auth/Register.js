import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
<Layout title="Register - Ecommerce App">
  <div className="form-container p-5 rounded bg-light">
    <form onSubmit={handleSubmit} className="needs-validation">
      <h1 className="text-center mb-4 ">Create your account</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control rounded-pill"
          id="name"
          placeholder="Enter your full name"
          required
          autoFocus
        />
        <div className="invalid-feedback">Please provide your name.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control rounded-pill"
          id="email"
          placeholder="Enter your email"
          required
        />
        <div className="invalid-feedback">Please provide a valid email address.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control rounded-pill"
          id="password"
          placeholder="Create a password"
          required
        />
        <div className="invalid-feedback">Please choose a secure password.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone Number</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="form-control rounded-pill"
          id="phone"
          placeholder="Enter your phone number"
          required
        />
        <div className="invalid-feedback">Please provide your phone number.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="form-control rounded-pill"
          id="address"
          placeholder="Enter your address"
          required
        />
        <div className="invalid-feedback">Please provide your address.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="answer" className="form-label">Favorite Sports</label>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="form-control rounded-pill"
          id="answer"
          placeholder="What is your favorite sport?"
          required
        />
        <div className="invalid-feedback">Please answer this question.</div>
      </div>
      <button type="submit" className="btn btn-primary rounded-pill w-100">Sign Up</button>
    </form>
  </div>
</Layout>


  );
};

export default Register;
