import React, { useState, useCallback } from "react";
import SocialPagePostCard from "./SocialPagePostCard";
import SocialPagePostButton from "./SocialPagePostButton";
import { useInView } from "react-intersection-observer";
import Loader from "./Loader";
import { useEffect } from "react";
import axios from "axios";

const SocialPage = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handlePostSubmit = (newPost) => {
    const newCard = {
      subject: newPost.subjectText,
      postText: newPost.postText,
      mood: newPost.mood,
    };
    setCards([...cards, newCard]);
  };

  const handleDeleteCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const loadMorePosts = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setIsLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  React.useEffect(() => {
    if (inView) {
      loadMorePosts();
    }
  }, [inView, loadMorePosts]);
  useEffect(() => {
    setTimeout(async () => {
        const response = await axios.get(
            ""
        )
        setIsLoading(false);
    }, 1500);
}, [cards]);
  return (
    
    <div>
      <SocialPagePostButton onPostSubmit={handlePostSubmit} />
      <div style={{ justifyContent: "center" }}>
        <SocialPagePostCard cards={cards} onDeleteCard={handleDeleteCard} />
      </div>
      <div className='parent-container' ref={ref}>
        {isLoading && <Loader />}
      </div>
    </div>
  );
};

export default SocialPage;
