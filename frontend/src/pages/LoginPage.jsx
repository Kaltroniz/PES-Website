import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import PageHeader from "../components/PageHeader";
import headerImg from '../assets/hero_image3.jpg';
import logoImg from '../assets/peslogo.png';
import "../styles/pagesStyles/AuthPage.css";

import { API_BASE } from "../../constants";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleForm(e) {
    e.preventDefault();
    if (!email.trim() || !password) {
      alert("Please fill all the required fields!");
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append("email", email.trim());
    formData.append("password", password);

    fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      body: formData,
    }).then(async (res) => {
      setLoading(false);
      if (res.status === 200) {
        const data = await res.json();
        alert("Login Successful!");
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else if (res.status === 404) {
        alert("No user found with the given email address.");
      } else if (res.status === 401) {
        alert("Incorrect password!");
      } else {
        alert("Something went wrong! Please try again later.");
      }
    }).catch(err => {
      console.error(err);
      setLoading(false);
      alert("Something went wrong! Please check your internet connection.");
    });
  }

  return (
    <div>
      <PageHeader
        title="Login to your account"
        image={headerImg}
      />
      <form id="login_form" onSubmit={handleForm}>
        <div className="form_container">
          <div className="image">
            <img src={logoImg} alt="Pehchaan Ek Safar" />
          </div>
          <div className="fields">
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="submit"
              value={loading ? "Loading..." : "Login"}
              disabled={loading}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;