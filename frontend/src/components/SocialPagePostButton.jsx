import React from "react";
import Button from "react-bootstrap/Button";
import image from '../assets/tree_image_banner_top_social_page.jpeg'

const SocialPagePostButton = () => {
  return (
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'repeat-x', // Image will repeat horizontally
          backgroundSize: 'auto',  // Image will keep its original dimensions
          backgroundPosition: 'center',
        }}
      >
      <div
        style={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Button variant='success' className='bg-success'>
          Post!
        </Button>{" "}
      </div>
    </div>
  );
};

export default SocialPagePostButton;
