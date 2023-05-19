import React from 'react';
import './SaplingView.css';

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


const saplingImages = [sapling1, sapling2, sapling3, sapling4, sapling5, sapling6, sapling7, sapling8, sapling9]

const SaplingView = () => {

    const getRandomSaplingImage = () => {
        const randomIndex = Math.floor(Math.random() * saplingImages.length);
        return saplingImages[randomIndex];
      };

    return (
        <div className="overlay-container">
        <img src={platform} alt="platform" className="platform"/>
        {/* <img src={sapling1} alt="sapling1" className="sapling1"/> */}
        {saplingImages.map((sapling, index) => (
        <img key={index} src={getRandomSaplingImage()} alt={'sapling${index}'} className="sapling"/>
      ))}
        </div>
    );
};

export default SaplingView;
