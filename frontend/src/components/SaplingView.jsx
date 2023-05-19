import React from 'react';
import './SaplingView.css';

// import staticImage from '../assets/static-image.png';
// import animatedImage from '../assets/animated-image.gif';

import sapling1 from '../assets/sapling1.png';
import platform from '../assets/platform.png';

const SaplingView = () => {
  return (
    <div className="overlay-container">
      <img src={platform} alt="platform" className="platform"/>
      <img src={sapling1} alt="sapling1" className="sapling1"/>
    </div>
  );
};

export default SaplingView;
