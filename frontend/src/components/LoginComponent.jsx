import React from "react";
import './LoginComponent.css'
import connection from "../api/connection";


const LoginComponent = ({id, setUser}) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    connection.post("/auth/login", { email: event.target.email.value, password: event.target.password.value}).then((data) => {setUser(data.data.user)})

    console.log("Form submitted successfully");

  };

  return (
    <div id={id} >
      <form onSubmit={handleSubmit}>
        <label>ACC Email: </label>
        <input type='text' name="email" placeholder='g.austincc.edu' />
        <label>Password: </label>
        <input type='password' name="password" placeholder='password' />
        {/* Sign Up button */}
        <button onSubmit={handleSubmit} type='submit'>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
