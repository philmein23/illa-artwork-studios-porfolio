import React, { Component } from 'react';
import ImageListing from './ImageListing';
import Images from './Images';


import { createElement } from 'glamor/react';
import { css } from 'glamor';
/* @jsx createElement */

class Home extends Component {
  render() {
    return (
      <div
        css={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'        }}
      >
      <Images> 
        <ImageListing />
      </Images>
      </div>
    );
  }
}

export default Home;
