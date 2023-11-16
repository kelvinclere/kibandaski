// StartPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './StartPage.css';
import ImageComponent from './Images';

const StartPage = () => {
  const imagePath1 = require('../../assets/Mautamu 5.png');
  const imagePath2 = require('../../assets/food5a.png');
  const imagePath3 = require('../../assets/liquor3a.png');
  const imagePath4 = require('../../assets/grocery1.png');
  const imagePath5 = require('../../assets/google.jpeg');
  const imagePath6 = require('../../assets/download-app-logo.webp');

  return (
    <div className="start-page-container">
      <img id="main" src={imagePath1} alt="Welcome Image" />
      <Link to="/meals"> {/* Use Link to navigate to the Meals page */}
        <button className="get-started-btn">Get Started</button>
      </Link>

      <div className="images-row">
        <div>
          <ImageComponent src={imagePath2} alt="Image 2" />
          <p>Your favourite foods</p>
        </div>
        <div>
          <ImageComponent src={imagePath3} alt="Image 3" />
          <p>Your Trusty Liquor Stash</p>
        </div>
        <div>
          <ImageComponent src={imagePath4} alt="Image 4" />
          <p>Hand selected Groceries</p>
        </div>
      </div>
      <img id="download-app" src={imagePath6} alt="download-app logo" />
      <h1 id='downtext'>Download the app</h1>
      <p id='down'>Order anything and track it in real-time with the Mautamu app.</p>
      <img id="playstore" src={imagePath5} alt="play store image" />
    </div>
  );
};

export default StartPage;



