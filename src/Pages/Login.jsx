import React from "react";
import "../Style/Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-signup-container">
        <div className="left-section">
          <div className="welcome-message">
            <h2>Welcome</h2>
            <p>We are glad to see you :</p>
          </div>
        </div>
        <div className="right-section">
          <h2>Hello!</h2>
          <p>We are glad to see you :</p>
          <button className="social-login google">Sign up with Google</button>
          <div className="social-icons">
            <button className="social-icon facebook">F</button>
            <button className="social-icon twitter">T</button>
          </div>
          <p>Or</p>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="form-row">
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Repeat Password" />
            </div>
            <div className="terms">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I agree to the <a href="#terms">Terms of Service</a> and{" "}
                <a href="#privacy">Privacy Policy</a>
              </label>
            </div>
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
