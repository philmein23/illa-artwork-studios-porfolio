import React, { Component, Fragment } from 'react';
import { createElement } from 'glamor/react';
/* @jsx createElement */

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div
          css={{
            fontFamily: 'cortado',
            fontWeight: '500',
            fontSize: '3em'
          }}
        >
          <Header />
        </div>
      </Router>
    );
  }
}

export default App;
