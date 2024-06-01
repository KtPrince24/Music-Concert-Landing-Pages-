import React from 'react';
import './Lineup.css';

const Lineup = () => (
  <section className="lineup">
    <h2>Our Incredible Lineup</h2>
    <div className="artist-grid">
      <div className="artist">
        <img src="artist1.jpg" alt="Artist 1"/>
        <p>AR Rahuman</p>
      </div>
      <div className="artist">
        <img src="artist2.jpg" alt="Artist 2"/>
        <p>Anirudh Ravichand</p>
      </div>
    </div>
  </section>
);

export default Lineup;