import React, { Component, Fragment } from 'react';

import { createElement } from 'glamor/react';
import { css } from 'glamor';
/* @jsx createElement */

import { CLOUDINARY } from '../constants';

const galleryMachine = {
  start: {
    SEARCH: 'loading'
  },
  loading: {
    SEARCH_SUCCESS: 'images',
    SEARCH_FAIL: 'error'
  },
  images: {
    SELECT_IMAGE: 'image'
  },
  image: {
    EXIT_IMAGE: 'images'
  }
};

class Images extends Component {
  state = {
    galleryState: 'start',
    image_ids: null,
    image_id: null
  };

  transition = action => {
    const currentGalleryState = this.state.galleryState;
    const nextGalleryState = galleryMachine[currentGalleryState][action.type];

    if (nextGalleryState) {
      const nextState = this.command(nextGalleryState, action);
      this.setState({
        galleryState: nextGalleryState,
        ...nextState
      });
    }
  };

  command = (nextState, action) => {
    switch (nextState) {
      case 'loading':
        this.getImageIds();
        break;
      case 'images':
        if (action.image_ids) {
          return { image_ids: action.image_ids };
        }
      case 'image':
        if (action.image_id) {
          return { image_id: action.image_id };
        }
      default:
        break;
    }
  };

  componentDidMount() {
    this.transition({ type: 'SEARCH' });
  }

  getImageIds = async () => {
    const options = {
      method: 'GET',
      mode: 'cors'
    };

    const resources = await fetch(CLOUDINARY({ tagName: 'chez' }).URL, options);
    const data = await resources.json();
    const image_ids = data.resources.map(resource => resource.public_id);

    this.transition({ type: 'SEARCH_SUCCESS', image_ids });
  };

  renderGallery = state => {
    return (
      <div
        className="ui-items"
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gridGap: '0.25rem'
        }}
      >
        {state === 'images' &&
          this.state.image_ids.map((imageId, i) => {
            return (
              <div>
                <img
                  className="ui-item"
                  key={imageId}
                  style={{ maxWidth: '100%', '--i': i }}
                  src={CLOUDINARY({ publicId: imageId, width: 700 }).imageURL}
                />
              </div>
            );
          })}
      </div>
    );
  };

  renderPhoto = state => {};

  render() {
    const { galleryState } = this.state;
    return <Fragment>{this.renderGallery(galleryState)}</Fragment>;
  }
}

export default Images;
