import React from 'react';
import { CLOUDINARY } from '../constants';

function Image({ publicId }) {
  return (
    <div>
      <img
        key={publicId}
        style={{ maxWidth: '100%' }}
        src={CLOUDINARY({ publicId, width: 200 }).imageURL}
      />
    </div>
  );
}

export default Image;
