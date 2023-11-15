// StartPage.js
import React from 'react';
import './StartPage.css';
import ImageComponent from './Images'; // Import the new component

const StartPage = () => {
  const imagePath1 = require('../../assets/Mautamu 5.png');
  const imagePath2 = require('../../assets/food2.jpeg');
  const imagePath3 = require('../../assets/liquor3.jpeg');
  const imagePath4 = require('../../assets/grocery1.png');

  return (
    <div className="start-page-container">
      <img id="main" src={imagePath1} alt="Welcome Image" />
      <button className="get-started-btn">Get Started</button>

      <div className="images-row">
        <ImageComponent src={imagePath2} alt="Image 2" />
        <ImageComponent src={imagePath3} alt="Image 3" />
        <ImageComponent src={imagePath4} alt="Image 4" />
      </div>
    </div>
  );
};

export default StartPage;


