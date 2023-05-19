// SocialPagePostCard.js
import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import SocialPageDeleteComponent from "./SocialPageDeleteComponent";

function SocialPagePostCard({ subject, cardTitle, postText }) {
  return (
    <>
      {["info"].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === "dark"}
          style={{ width: "100%" }}
          className='mb-2'
        >
          <Card.Header>{subject}</Card.Header>
          <Card.Body className="d-flex align-items-start justify-content-between">
            <div>
              <Card.Title>{cardTitle}</Card.Title>
              <Card.Text>{postText}</Card.Text>
            </div>
            <div>
              <SocialPageDeleteComponent />
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default SocialPagePostCard;
