import React from "react";
import logo from "../assets/mindfulU_logo.png";
import "./LandingPage.css";
import SignupComponent from "./SignupComponent";
import LoginComponent from "./LoginComponent";
import { useState } from "react";

const LandingPage = () => {
  const [landingPageLoginButtonExtended, setLandingPageLoginButtonExtended] =
    useState(false);
  const [landingPageSignupButtonExtended, setLandingPageSignupButtonExtended] =
    useState(false);

  const handleLoginSignupButtonClick = () => {
    if (landingPageLoginButtonExtended) {
      setLandingPageLoginButtonExtended(false);
    } else {
      setLandingPageLoginButtonExtended(true);
      setLandingPageSignupButtonExtended(false);
    }
  };
  const handleSignupButtonClick = () => {
    if (landingPageSignupButtonExtended) {
      setLandingPageSignupButtonExtended(false);
    } else {
      setLandingPageSignupButtonExtended(true);
      setLandingPageLoginButtonExtended(false);
    }
  };

  return (
    <div>
      <header>
        <title>Your Page Title</title>

        <img
          src={logo}
          alt='a gorgeous logo'
          style={{ width: "200px", height: "auto" }}
        />
      </header>
      <body>
        <div>Welcome! Ready to feel good?</div>
        <button
          onClick={handleLoginSignupButtonClick}
          className='landingPageButton'
        >
          Login
        </button>
        <button onClick={handleSignupButtonClick} className='landingPageButton'>
          Sign Up
        </button>
        {landingPageLoginButtonExtended && (
          <LoginComponent id='login-component-extended' />
        )}

        {landingPageSignupButtonExtended && (
          <SignupComponent id='signup-component-extended' />
        )}
      </body>

      <footer>
        <div> Contact us!</div>
      </footer>
    </div>
  );
};

export default LandingPage;
