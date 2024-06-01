import React from 'react';
import './Gallery.css';

const Gallery = () => (
  <section className="gallery">
    <h2>Relive the Moments</h2>
    <div className="gallery-grid">
      <img src="gallery1.jpg" alt="Gallery 1"/>
      <img src="gallery2.jpg" alt="Gallery 2"/>
    </div>
  </section>
);

export default Gallery