import React from "react";
import './LoginComponent.css'


const LoginComponent = ({id}) => {
  return (
    <div id={id} >
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
