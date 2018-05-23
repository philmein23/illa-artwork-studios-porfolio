import React, { Component, Fragment } from 'react';

import { CLOUDINARY } from '../constants';

const ImagesContext = React.createContext({
  images: []
})

class Images extends Component {
  static Consumer = ImagesContext.Consumer;

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

    const resources = await fetch(
      CLOUDINARY({ tagName: 'chez' }).URL,
      options
    );

    const data = await resources.json();

    return data.resources.map(resource => resource.public_id);

  };

  render() {
    return(
      <ImagesContext.Provider value={this.state}>
        { this.props.children }
      </ImagesContext.Provider>
    )
  }
}

export default Images;