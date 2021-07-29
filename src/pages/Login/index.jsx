import React, { useState } from "react";
import API from '../../helpers/api';
import './login.css';

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };
    API.post("/auth/login", data)
      .then((res) => {
        console.log("Login Response Data ====>", res)
        setSuccess(true);
        if (res.data.token) {
          localStorage.setItem("user", JSON.stringify(res.data));
        }
        setTimeout(() => {
          setSuccess(false);
        }, 3000)
      })
      .catch((err) => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000)
        console.log(err.message);
      });
  };

  // const logout = () => {
  //   localStorage.removeItem("user");
  // };

  // const getCurrentUser = () => {
  //   return JSON.parse(localStorage.getItem("user"));
  // };

  return (
    <>
      <div class="logo">
        <img
          src="images/logo.png"
          alt="CodeQueen logo"
          width="200px"
        />
      </div>
      {success && (
        <div class="alert alert-success" role="alert">
          Successfuly Logged on
        </div>
      )}
      {error && (
        <div class="alert alert-danger" role="alert">
          Login Failed
        </div>
      )}
      <div class="big-one">
        <h1 class="form-title">Login</h1>

        <div class="container">
          <form class="form" onSubmit={handleSubmit}>
            <div class="form-input-group">
              <input
                type="text"
                class="form-input"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-input-group">
              <input
                type="password"
                class="form-input"
                id="security"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="forgotpass">
              {" "}
              <a href="/forgotpassword" class="ml-auto mb-0 text-md">
                Forgot Password?
              </a>
            </div>
            <button type="submit" class="form-button">
              Submit
            </button>
            <p class="form-text">
              Don't have an account?{" "}
              <a id="form-link" href="/signup">
                Sign Up Here
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
