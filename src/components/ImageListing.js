import React, { Component, Fragment } from 'react';
import { CLOUDINARY } from '../constants';

import Images from './Images';


class ImageListing extends Component {

  componentDidUpdate(prevProps, prevState) {
    console.log('update', prevProps, prevState);
  }

  render() {

    return (
      <Images.Consumer>
        {
          ({ publicIds})  => (
            publicIds && publicIds.map(publicId => 
              <img
              key={publicId}
              style={{ width: '100%' }}
              src={CLOUDINARY({ publicId, width: 200 }).imageURL}
            />
            )
          )
        }
      </Images.Consumer>

    );
  }
}

export default ImageListing;
