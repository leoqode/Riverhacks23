import React, { useState } from "react";
import connection from "../api/connection";

import "./SignupComponent.css";

const SignupComponent = ({ id, setUser }) => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);

    // Regex pattern to match the domain ending with '.edu'
    const domainPattern = /\@g.austincc.edu$/i;

    // Check if the last characters of the domain match the pattern
    const isDomainValid = domainPattern.test(enteredEmail);

    setIsValidEmail(isDomainValid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isValidEmail) {
      connection
        .post("/auth/signup", {
          email: event.target.email.value,
          password: event.target.password.value,
        })
        .then((data) => {
          setUser(data.data.user);
        });
      // Perform form submission or other actions
      console.log("Form submitted successfully");
    } else {
      // Invalid email, clear the email input
      setEmail("");
    }
  };

  return (
    <div className="border">
      <div id={id} className="signup-component-container">
        <form style={{display:'flex', flexDirection:'column'}} onSubmit={handleSubmit}>
          {/* First Name input */}
          <label style={{ fontFamily: "Jost" }}>First Name: </label>
          <input style={{ fontFamily: "Jost" }} type="text" placeholder="Johnny" />

          {/* Last Name input */}
          <label style={{ fontFamily: "Jost" }}>Last Name: </label>
          <input style={{ fontFamily: "Jost" }} type="text" placeholder="Appleseed" />

          {/* ACC Email input */}
          <label style={{ fontFamily: "Jost" }}>ACC Email: </label>
          <input
            style={{ fontFamily: "Jost" }}
            id="acc_email_signup"
            type="text"
            name="email"
            placeholder="@g.austincc.edu"
            value={email}
            onChange={handleEmailChange}
            className={!isValidEmail ? "invalid-email" : ""}
          />
          {/* Display error message if email is invalid */}
          {!isValidEmail && (
            <p style={{ fontFamily: "Jost" }} className="error-message">
              Invalid email domain. Please enter a valid ACC email.
            </p>
          )}

          {/* Set Password input */}
          <label style={{ fontFamily: "Jost" }}>Set Password</label>
          <input type="password" name="password" />

          {/* Sign Up button */}
          <button style={{ fontFamily: "Jost" }} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupComponent;
