import React, { useEffect, useState } from 'react';
import connection from "../api/connection.js";
import 'bootstrap/dist/css/bootstrap.min.css';

const user_name = connection.get("/users/name").then((res) => {console.log(res.data)});
const user_score = connection.get("/users/score").then((res) => {console.log(res.data)});


const UserInfo = () => {
  return (
    <div className='flex'>
      <h2>User Profile</h2>
      {/* <p>Username: {user_name}</p>
      <p>Score: {user_score}</p> */}
    </div>
  );
};

export default UserInfo;
