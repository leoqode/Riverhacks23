import React from "react";
import SocialPagePostCard from "./SocialPagePostCard";
import SocialPagePostButton from "./SocialPagePostButton";


const SocialPage = () => {
  return (
    <div>
      <SocialPagePostButton />
      <SocialPagePostCard/>
      <div>Progress</div>
    </div>
  );
};

export default SocialPage;
