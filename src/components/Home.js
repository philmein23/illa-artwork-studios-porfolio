import React, { Component } from 'react';
import ImagesListing from './ImagesListing';

class Home extends Component {
  render() {
    return (
      <div className="ui-app">
        <ImagesListing />
      </div>
    );
  }
}

export default Home;
