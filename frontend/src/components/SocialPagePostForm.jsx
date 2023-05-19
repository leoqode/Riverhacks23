import React from "react";
import './SocialPagePostForm.css'

const SocialPagePostForm = ({ username, bodyPrompt, mood }) => {
  return (
    <div className="overlay">
      <div className="post-form">
        <div id="social-post-form-header">
          <h1>Create post</h1>
        </div>
        <div>
          <h3>
            {username} is feeling {mood}
          </h3>
        </div>
        <div>
          <form>
            <label>{bodyPrompt}</label>
            <input type="text" placeholder="..." />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SocialPagePostForm;
