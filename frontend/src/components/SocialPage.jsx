import { useEffect, useState } from "react";
import SocialPagePostCard from "./SocialPagePostCard";
import SocialPagePostButton from "./SocialPagePostButton";
import Loader from "./Loader";
import connection from "../api/connection";
import InfiniteScroll from "react-infinite-scroll-component";

const SocialPage = () => {
  const [cards, setCards] = useState([]);

  const handlePostSubmit = (newPost) => {
    const newCard = {
      title: newPost.subjectText,
      body: newPost.postText,
      mood: newPost.mood,
    };
    setCards([...cards, newCard]);
    connection.post("/posts/create", newCard).then((res) => {console.log(res.data)})
  };

  useEffect(() => {
    fetchMoreCards();
  }, [])

  const handleDeleteCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  
  const fetchMoreCards = () => {
    connection.get("/posts/posts", {params: { offset: cards.length, limit: 10 }}).then(newCards => {
      console.log(newCards.data.posts)
      setCards(cards.concat(newCards.data.posts))
    })
  }
  

  
  return (
    
    <div>
      <SocialPagePostButton onPostSubmit={handlePostSubmit} />
      <div className='parent-container'>
        <InfiniteScroll
        dataLength={cards.length}
        inverse={true}
        next={fetchMoreCards}
        scrollThreshold={0.8}
        hasMore={true}
        loader={<div className="h-16 my-8"><Loader></Loader></div>}
        scrollableTarget={`Cards--scroller`}
        style={{ display: 'flex', flexDirection: 'column' }}
        className="pb-2"
        >
      <div style={{ justifyContent: "center" }}>
        <SocialPagePostCard cards={cards} onDeleteCard={handleDeleteCard} />
      </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default SocialPage;
