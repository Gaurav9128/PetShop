import React from "react";
import "./Login.css";
import { FaWhatsapp } from "react-icons/fa";


const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">Login with OTP</h2>
      <p className="login-subtitle">Enter your log in details</p>

      <div className="login-box">
        <div className="phone-input-wrapper">
          <div className="flag-box">
            {/* <img src="/flag.png" alt="flag" /> */}
            +91
          </div>
          <input
            type="text"
            placeholder="Phone number"
            className="phone-input"
          />
        </div>

        <button className="request-btn">
          Request OTP →
        </button>

        <p className="or-text">Or Login Using</p>

        <button className="whatsapp-btn">
           <FaWhatsapp size={24} style={{ marginRight: "8px" }} />
             WhatsApp
           </button>

      </div>

      <p className="terms-text">
        I accept that I have read & understood Privacy Policy and T&Cs.
      </p>
    </div>
  );
};

export default Login;
