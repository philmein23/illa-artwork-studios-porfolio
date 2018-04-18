import React, { Component, Fragment } from 'react';
import { createElement } from 'glamor/react';
/* @jsx createElement */

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Work from './Work';

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
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/work" exact component={Work} />
        </div>
      </Router>
    );
  }
}

export default App;
