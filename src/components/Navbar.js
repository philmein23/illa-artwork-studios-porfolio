import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { createElement } from 'glamor/react';
import { css } from 'glamor';
/* @jsx createElement */

const link = css({
  '> a': {
    color: 'black',
    textDecoration: 'none',
    fontSize: '2em',
    color: 'rgb(112,112,112, 100%);'
  }
});

const grid = css({
  display: 'grid',
  gridAutoFlow: 'column',
  gridGap: '10px',
  alignItems: 'center'
});

export default function Navbar() {
  return (
    <Fragment>
      <nav css={[{ ...link }, { ...grid }]}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
      </nav>
    </Fragment>
  );
}
