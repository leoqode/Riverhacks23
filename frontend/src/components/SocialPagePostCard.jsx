import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SocialPagePostCard.css";

function SocialPagePostCard({ cards, onDeleteCard }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);

  const handleDeleteClick = (card) => {
    setCardToDelete(card);
    setShowConfirmation(true);
  };

  const handleConfirmDelete = () => {
    if (cardToDelete) {
      const index = cards.findIndex((card) => card === cardToDelete);
      if (index !== -1) {
        onDeleteCard(index);
      }
      setCardToDelete(null);
      setShowConfirmation(false);
    }
  };

  const handleCancelDelete = () => {
    setCardToDelete(null);
    setShowConfirmation(false);
  };

  return (
    <>
      {cards.map((card, index) => (
        <Card
          bg="success"
          key={index}
          text={false}
          style={{
            width: "100%",
            display: "flex",
            borderRadius: "2px",
            flexDirection: "column",
          }}
          className="mb-2"
        >
          <div className="social-delete-button">
            <Button

              variant="primary"
              onClick={() => handleDeleteClick(card)}
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                margin: "0px",
                backgroundColor: 'red',
                borderColor: 'red',
              }}
            >
              Delete
            </Button>
          </div>
          <Card.Header className="text-start">
            <strong className="text-uppercase">{card.subject}</strong>
          </Card.Header>
          <Card.Body className="d-flex flex-inline align-items-center justify-content-center">
            <Card.Title>{card.cardTitle}</Card.Title>
            <div className="card-text-class">{card.postText}</div>
          </Card.Body>
        </Card>
      ))}

      <Modal show={showConfirmation} onHide={handleCancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this card?</Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor:'green', color:'white'}} variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>

          <Button style={{backgroundColor:'red', color:'white'}} variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SocialPagePostCard;
