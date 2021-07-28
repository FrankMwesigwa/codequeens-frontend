import React, { useState, useEffect } from "react";
import axios from "axios";
import "./signup.css";

const Signup = () => {
  const [firstname, setFirstName] = useState("Frank Mwesigwa");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstname,
      lastname,
      email,
      password,
    };
    axios
      .post("/localhost:5000/api/post", data)
      .then((res) => {
        setSuccess(true);
        console.log(res);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("Users ====>", res)
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getUsers();

  useEffect(() =>{
    
  })

  return (
    <>
      <div class="logo">
        <img src="images/logo.png" alt="CodeQueen logo" width="200px" />
      </div>
      {success && (
        <div class="alert alert-success" role="alert">
          User successfully created
        </div>
      )}
      {error && (
        <div class="alert alert-danger" role="alert">
          Error Encountered while registering user
        </div>
      )}
      <div class="form-space">
        <h2 class="title">Sign up</h2>
        <form class="form" onSubmit={handleSubmit}>
          <div class="form-area">
            <div class="form-group">
              <input
                type="text"
                class="form-control item"
                name="firstname"
                placeholder="Firstname"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control item"
                name="lastname"
                placeholder="Lastname"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control item"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control item"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control item"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div class="form-group">
              <button
                type="submit"
                class="btn btn-block create-account"
                id="register-btn"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
