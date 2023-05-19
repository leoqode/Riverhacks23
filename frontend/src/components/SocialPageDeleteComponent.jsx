import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import SocialDeleteDropDown from "./SocialDeleteDropDown";

function SocialPageDeleteComponent() {
  const [showDeleteDropDown, setShowDeleteDropDown] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteDropDown(!showDeleteDropDown);
  };

  const handleDeleteNo = () => {
    setShowDeleteDropDown(false);
  };

  return (
    <div>
      <Button onClick={handleDeleteClick} variant="warning">
        Delete
      </Button>{" "}
      {showDeleteDropDown && (
        <SocialDeleteDropDown
          dropDown={showDeleteDropDown}
          setDropDown={setShowDeleteDropDown}
          handleDeleteNo={handleDeleteNo}
        />
      )}
    </div>
  );
}

export default SocialPageDeleteComponent;