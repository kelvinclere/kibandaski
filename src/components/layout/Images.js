// ImageComponent.js
import React from 'react';
import './Images.css';

const Images = ({ src, alt }) => {
  return (
    <div className="image-container">
      <img src={src} alt={alt} />
    </div>
  );
};

export default Images;
