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
    <div  id={id} >
      <form style={{backgroundColor:'white', height:'100px',width:'100px'}} onSubmit={handleSubmit}>
        <label style={{fontFamily:'Jost'}}>ACC Email: </label>
        <input style={{fontFamily:'Jost'}} type='text' name="email" placeholder='g.austincc.edu' />
        <label style={{fontFamily:'Jost'}}>Password: </label>
        <input style={{fontFamily:'Jost'}} type='password' name="password" placeholder='password' />
        {/* Sign Up button */}
        <button style={{fontFamily:'Jost'}} onSubmit={handleSubmit} type='submit'>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
