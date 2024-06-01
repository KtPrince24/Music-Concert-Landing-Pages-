import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Lineup from './components/Lineup';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Tickets from './components/Tickets';
import Venue from './components/Venue';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Lineup />
      <Features />
      <Gallery />
      <Tickets />
      <Venue />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;