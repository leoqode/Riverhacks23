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

const stage1 = [sapling1, sapling2, sapling3];
const stage2 = [sapling4, sapling5];
const stage3 = [sapling6, sapling7];
const stage4 = [sapling8, sapling9];

// get user score here
// set timeout -  1 second
const userScore = connection.get("/users/score").then((res) => {console.log(res.data)});

let saplingImages = [];

const SaplingView = () => {
  useEffect(() => {
    const fetchUserScore = async () => {
      const response = await connection.get("/users/score");
      setUserScore(response.data);
    };

    const timeout = setTimeout(() => {
      fetchUserScore();
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (userScore === null) return;

    if (userScore < 4) {
      saplingImages = stage1;
    } else if (userScore > 3 && userScore < 7) {
      saplingImages = stage2;
    } else if (userScore > 6 && userScore < 10) {
      saplingImages = stage3;
    } else {
      saplingImages = stage4;
    }
  }, [userScore]);

  const getRandomSaplingImage = () => {
      const randomIndex = Math.floor(Math.random() * saplingImages.length);
      return saplingImages[randomIndex];
    };

  return (
    <div className="overlay-container">
        <img src={platform} alt="platform" className="platform"/>
        {saplingImages.map((sapling, index) => (
        <img key={index} src={getRandomSaplingImage()} alt={'sapling${index}'} className="sapling"/>))}
      </div>
    );
};

export default SaplingView;
