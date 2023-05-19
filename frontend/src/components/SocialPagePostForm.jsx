import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

const SocialPagePostForm = ({ onPostSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [postText, setPostText] = useState("");
  const [subjectText, setSubjectText] = useState("");
  const [selectedMood, setSelectedMood] = useState("");

  const handleInputChangeBody = (event) => {
    setPostText(event.target.value);
    
  };
  const handleInputChangeSubject = (event) => {
    setSubjectText(event.target.value);
  }

  const handleMoodSelect = (eventKey) => {
    setSelectedMood(eventKey);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (postText.trim() !== "" && selectedMood !== "") {
      const newPost = {
        subjectText,
        postText,
        mood: selectedMood,
      };
      onPostSubmit(newPost);
      setSubjectText("");
      setPostText("");
      setSelectedMood("");
      setIsOpen(false);
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={openModal} variant="success" className="bg-success">
        Create Post
      </Button>

      <Modal show={isOpen} onHide={closeModal} size="lg" centered>
        <Modal.Header closeButton>
        <Form.Group controlId="input-social-form-subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter your subject text..."
                value={subjectText}
                onChange={handleInputChangeSubject}
              />
            </Form.Group>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="input-social-form-body">
              <Form.Label>Post Text</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your post text..."
                value={postText}
                onChange={handleInputChangeBody}
              />
            </Form.Group>

            <Form.Group controlId="input-social-form-mood">
              <Form.Label>Mood</Form.Label>
              <Dropdown onSelect={handleMoodSelect}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {selectedMood ? (
                    <>
                      You are feeling <strong>{selectedMood}</strong>
                    </>
                  ) : (
                    "Select Mood"
                  )}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="happy">Happy</Dropdown.Item>
                  <Dropdown.Item eventKey="accomplished">Accomplished</Dropdown.Item>
                  <Dropdown.Item eventKey="excited">Excited</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SocialPagePostForm;
