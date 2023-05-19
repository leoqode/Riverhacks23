import SocialPagePostForm from "./SocialPagePostForm";
import React from "react";
import Button from "react-bootstrap/Button";
import image from "../assets/tree_image_banner_top_social_page.jpeg";
import { useState } from "react";

const SocialPagePostButton = ({ onPostSubmit }) => {
  const handlePostSubmit = (newPost) => {
    onPostSubmit(newPost);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto",
        backgroundPosition: "center",
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
