import React, { useEffect, useState } from 'react';
import connection from "../api/connection.js";

const UserInfo = () => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Username:</p>
      <p>Score:</p>
    </div>
  );
};

export default UserInfo;
