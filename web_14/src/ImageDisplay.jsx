
// ImageDisplay.js
import React from 'react';
import srcImage from './Images/profile.jpg'; // Image inside src/Images

function ImageDisplay() {
  return (
    <div>
      <h2>Image from public folder:</h2>
      <img src={`/Images/publicImage.jpg`} alt="Public" width="200" />

      <h2>Image from src folder:</h2>
      <img src={srcImage} alt="Src" width="200" />
    </div>
  );
}

export default ImageDisplay;
