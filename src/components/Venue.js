import React from 'react';
import './Venue.css';

const Venue = () => (
  <section className="venue">
    <h2>Venue & Accommodation</h2>
    <div className="venue-map">
      <iframe src="https://www.google.com/maps/embed?..."></iframe>
    </div>
    <div className="accommodation">
      <p>Nearby Hotels and Camping Options:</p>
    </div>
  </section>
);

export default Venue;