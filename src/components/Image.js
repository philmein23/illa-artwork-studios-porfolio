import React, { Component, Fragment } from 'react';
import { CLOUDINARY } from '../constants';

class Image extends Component {
  render() {
    const { cropType, width, publicId } = this.props;

    return (
      <div>
        <img
          style={{ width: '100%' }}
          src={CLOUDINARY({ cropType, width, publicId }).imageURL}
        />
      </div>
    );
  }
}

export default Image;
