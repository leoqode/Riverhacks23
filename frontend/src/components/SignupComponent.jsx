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
      connection.post("/auth/signup", { email: event.target.email.value, password: event.target.password.value}).then((data) => {setUser(data.data.user)})
      // Perform form submission or other actions
      console.log("Form submitted successfully");
    } else {
      // Invalid email, clear the email input
      setEmail("");
    }
  };
  return (
    <div id={id}>
      <form onSubmit={handleSubmit}>
        {/* First Name input */}
        <label>First Name: </label>
        <input type='text' placeholder='Johnny' />

        {/* Last Name input */}
        <label>Last Name: </label>
        <input type='text' placeholder='Appleseed' />

        {/* ACC Email input */}
        <label>ACC Email: </label>
        <input
          id='acc_email_signup'
          type='text'
          name="email"
          placeholder='@g.austincc.edu'
          value={email}
          onChange={handleEmailChange}
          className={!isValidEmail ? "invalid-email" : ""}
        />
        {/* Display error message if email is invalid */}
        {!isValidEmail && (
          <p className='error-message'>
            Invalid email domain. Please enter a valid ACC email.
          </p>
        )}

        {/* Set Password input */}
        <label>Set Password</label>
        <input type='password' name="password" />

        {/* Sign Up button */}
        <button onSubmit={handleSubmit} type='submit'>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupComponent;
