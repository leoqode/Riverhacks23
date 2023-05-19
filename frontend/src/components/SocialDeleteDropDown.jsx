import React from "react";
import Button from "react-bootstrap/Button";

const SocialDeleteDropDown = ({ id, handleDeleteNo }) => {
  return (
    <div style={{justify: 'end'}} id={`social-delete-dropdown ${id ? id.toString() : ""}`}>
      Are you sure you want to delete this post?
      <Button onClick={handleDeleteNo} variant="light">
        No
      </Button>{" "}
      <Button variant="dark">Yes</Button>{" "}
    </div>
  );
};

export default SocialDeleteDropDown;