import React, { Component } from 'react';
import './resources/styles.css'

import Header from './components/header_footer/Header';
import Featured from './components/featured/index';
import VenueInfo from './components/venueInfo/index';
import Highlights from './components/highlights/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Featured/>
        <VenueInfo/>
        <Highlights/>
      </div>
    );
  }
}

export default App;
