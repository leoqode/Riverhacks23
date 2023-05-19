import React, { useState, useEffect } from 'react';
import './SaplingView.css';

import connection from "../api/connection.js";

// import staticImage from '../assets/static-image.png';
// import animatedImage from '../assets/animated-image.gif';

import sapling1 from '../assets/sapling1.png';
import sapling2 from '../assets/sapling2.png';
import sapling3 from '../assets/sapling3.png';
import sapling4 from '../assets/sapling4.png';
import sapling5 from '../assets/sapling5.png';
import sapling6 from '../assets/sapling6.png';
import sapling7 from '../assets/sapling7.png';
import sapling8 from '../assets/sapling8.png';
import sapling9 from '../assets/sapling9.png';
import platform from '../assets/platform.png';

const stage1 = [sapling1, sapling2];
const stage2 = [sapling4, sapling5];
const stage3 = [sapling6, sapling7];
const stage4 = [sapling8, sapling9];

// get user score here
// set timeout -  1 second

const SaplingView = () => {
  const [userScore, setUserScore] = useState(0);
  const [saplingImage, setSaplingImage] = useState(stage1[0])
  const [animation, setAnimation] = useState(0)
  useEffect(() => {
    const fetchUserScore = async () => {
      const response = await connection.get("/users/score");
      setUserScore(response.data.score);
    };

    setInterval(() => {
      fetchUserScore();
      console.log("check")
    }, 1000);

    setInterval(() => {
      if(animation === 0) {
        setAnimation(1);
      } else {
        setAnimation(0);
      }
    }, 500);

    // return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (userScore === null) return;

    if (userScore < 4) {
      setSaplingImage(stage1);
    } else if (userScore > 3 && userScore < 7) {
      setSaplingImage(stage2);
    } else if (userScore > 6 && userScore < 10) {
      setSaplingImage(stage3);
    } else {
      setSaplingImage(stage4);
    }
  }, [userScore]);

  return (
    <div className="overlay-container">
        <img src={platform} alt="platform" className="platform"/>
        <img src={saplingImage[animation]} alt={'sapling'} className="sapling"/>
        
      </div>
    );
};

export default SaplingView;
