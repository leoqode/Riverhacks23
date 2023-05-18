import React from "react";
import './LoginComponent.css'


const LoginComponent = () => {
  return (
    <div id="login-component-container">
      <form>
        <label>ACC Email: </label>
        <input type='text' placeholder='g.austincc.edu' />
        <label>Password: </label>
        <input type='password' placeholder='password' />
      </form>
    </div>
  );
};

export default LoginComponent;
