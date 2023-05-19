// SocialPagePostForm.js

import React from "react";
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

const SocialPagePostForm = ({ isOpen, onRequestClose, username, bodyPrompt, mood }) => {
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
        <form>
          <label>{bodyPrompt}</label>
          <input type='text' placeholder='...' />
        </form>
      </div>
      <button onClick={onRequestClose}>close</button>
    </Modal>
  );
};

export default SocialPagePostForm;
