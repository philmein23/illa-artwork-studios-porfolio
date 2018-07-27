import React, { Component } from 'react';
import ImagesListing from './ImagesListing';

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
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
        }}
      >
        <ImagesListing />
      </div>
    );
  }
}

export default Home;
