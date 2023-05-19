import React from "react";
import './LoginComponent.css'


const LoginComponent = ({id, setUser}) => {
  const handleSubmit = (event) => {
    event.preventDefault();


    console.log("Form submitted successfully");

  };

  return (
    <div id={id} >
      <form>
        <label>ACC Email: </label>
        <input type='text' placeholder='g.austincc.edu' />
        <label>Password: </label>
        <input type='password' placeholder='password' />
        {/* Sign Up button */}
        <button onSubmit={handleSubmit} type='submit'>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
