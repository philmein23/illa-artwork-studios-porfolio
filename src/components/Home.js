import React, { Component } from 'react';
import { CLOUDINARY } from '../constants';

import Image from './Image';

import { createElement } from 'glamor/react';
import { css } from 'glamor';
/* @jsx createElement */

class Home extends Component {
  state = {
    publicIds: null
  };

  async componentDidMount() {
    const options = {
      method: 'GET',
      mode: 'cors'
    };

    const resources = await fetch(
      CLOUDINARY({ tagName: 'chez' }).URL,
      options
    );
    const data = await resources.json();

    let publicIds = data.resources.map(
      resource => resource.public_id
    );

    this.setState(() => ({ publicIds }));
  }

  render() {
    return (
      <div
        css={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gridGap: '5px'
        }}
      >
        {this.state.publicIds &&
          this.state.publicIds.map(id => (
            <Image publicId={id} width={200} />
          ))}
      </div>
    );
  }
}

export default Home;
