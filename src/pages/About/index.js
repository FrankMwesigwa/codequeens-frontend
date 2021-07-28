/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./styles.css";

const AboutUS = () => {
  const [result, setResult] = useState(20);

  const addition = () => {
    setResult(result + 10)
  }

  const subtract = () => {
    setResult(result - 10)
  }

  return (
    <div>
      <div className="container">
        <div class="card">
          <img class="card-img-top" src="..." alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">About Us Page !!!</h5>
            <p class="card-text">
              We are here rocking with react navigation cool...
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="p-4">
          <h3>This is the result of our calcuation {result}</h3>
          <button class="btn btn-primary mr-3" onClick={addition}>
            Addition
          </button>
          <button class="btn btn-secondary" onClick={subtract}>
            Subtract
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
