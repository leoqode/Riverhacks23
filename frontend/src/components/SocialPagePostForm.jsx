// SocialPagePostForm.js
import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const SocialPagePostForm = ({ isOpen, onRequestClose, onPostSubmit, username, bodyPrompt, mood }) => {
  const [postText, setPostText] = useState("");

  const handleInputChange = (event) => {
    setPostText(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log('Form Submited')
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div id={`social-post-form-header`}>
        <h1>Create post</h1>
      </div>
      <div>
        <h3>{username} is feeling {mood}</h3>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>{bodyPrompt}</label>
          <input type='text' placeholder='...' value={postText} onChange={handleInputChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <button onClick={onRequestClose}>close</button>
    </Modal>
  );
};

export default SocialPagePostForm;
