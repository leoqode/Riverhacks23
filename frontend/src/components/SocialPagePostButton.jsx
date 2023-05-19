import SocialPagePostForm from "./SocialPagePostForm";
import React from "react";
import Button from "react-bootstrap/Button";
import image from "../assets/tree_image_banner_top_social_page.jpeg";
import { useState } from "react";

const SocialPagePostButton = () => {
  const bodyPrompt = "What are you feeling good about today?";
  const [postClicked, setPostClicked] = useState(false);

  const handlePostButton = () => {
    setPostClicked(!postClicked);
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
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          onClick={handlePostButton}
          variant="success"
          className="bg-success"
        >
          Post!
        </Button>{" "}
        {postClicked && (
          <>
            <div className="dim-background"></div>
            <SocialPagePostForm
              username="john apple"
              mood="happy"
              bodyPrompt={bodyPrompt}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SocialPagePostButton;
