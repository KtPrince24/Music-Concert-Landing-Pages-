import React from 'react';
import './Tickets.css';

const Tickets = () => (
  <section className="tickets">
    <h2>Get Your Tickets Now!</h2>
    <div className="ticket-options">
      <div className="ticket">
        <h3>General Admission</h3>
        <p>Rs1000</p>
      </div>
      <div className="ticket">
        <h3>VIP</h3>
        <p>Rs1500</p>
      </div>
    </div>
    <button className="cta-button">Buy Tickets</button>
  </section>
);

export default Tickets;