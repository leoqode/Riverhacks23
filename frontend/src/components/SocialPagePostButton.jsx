import SocialPagePostForm from "./SocialPagePostForm";
import React from "react";
import Button from "react-bootstrap/Button";
import image from "../assets/tree_image_banner_top_social_page.png";
import { useState } from "react";

const SocialPagePostButton = ({ onPostSubmit }) => {
  const handlePostSubmit = (newPost) => {
    onPostSubmit(newPost);
  };

  return (
    <div className="backTrees"
      style={{
        border:'1px solid black',
        backgroundImage: `url(${image})`,
        backgroundRepeat: "repeat-x",
        backgroundSize: "128px",
        backgroundPosition: "top",
        borderBottom:'100px',
        borderColor:'black',
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <SocialPagePostForm onPostSubmit={handlePostSubmit} />
      </div>
    </div>
  );
};

export default SocialPagePostButton;
