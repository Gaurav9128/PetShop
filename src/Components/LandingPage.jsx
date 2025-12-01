import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import logo from "../assets/images/logo1.png";
 // Ensure you have a logo image in the specified path

const LandingPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };

  return (
    <div className="landing-container">
      <img src={logo} alt="Logo" className="landing-logo" />

      <h1 className="landing-title">Coming Soon</h1>

      <button className="landing-btn" onClick={goToHome}>
        Go to Home
      </button>
    </div>
  );
};

export default LandingPage;
