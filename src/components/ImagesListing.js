import React, { Component, Fragment } from 'react';
import Image from './Image';

import { CLOUDINARY } from '../constants';

class Images extends Component {
  state = {
    publicIds: null,
    id: null
  };

  async componentDidMount() {
    const publicIds = await this.getImageIds();

    this.setState(() => ({ publicIds }));
  }

  getImageIds = async () => {
    const options = {
      method: 'GET',
      mode: 'cors'
    };

    const resources = await fetch(CLOUDINARY({ tagName: 'chez' }).URL, options);

    const data = await resources.json();

    return data.resources.map(resource => resource.public_id);
  };

  render() {
    const { publicIds } = this.state;

    return (
      <Fragment>
        {publicIds && publicIds.map(publicId => <Image publicId={publicId} />)}
      </Fragment>
    );
  }
}

export default Images;
