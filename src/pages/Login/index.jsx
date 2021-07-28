import React from "react";
import './login.css';

const Login = () => {
  return (
    <>
      <div class="logo">
        <img
          src="images/logo.png"
          alt="CodeQueen logo"
          width="200px"
        />
      </div>
      <div class="big-one">
        <h1 class="form-title">Login</h1>

        <div class="container">
          <form action="/login" class="form" id="loginform" method="POST">
            <div class="form-input-group">
              <input
                type="text"
                class="form-input"
                id="loginUsername"
                name="username"
                autofocus
                placeholder="Username"
                required
              />
            </div>
            <div class="form-input-group">
              <input
                type="password"
                class="form-input"
                id="security"
                name="password"
                autofocus
                placeholder="Password"
                required
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
