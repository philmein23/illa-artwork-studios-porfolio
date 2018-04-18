import React from 'react';
import Navbar from './Navbar';

import { createElement } from 'glamor/react';
import { css } from 'glamor';
/* @jsx createElement */

export default function Header() {
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.5em',
        textAlign: 'center'
      }}
    >
      <h1>Illa Art Workz Studio</h1>
      <Navbar />
    </div>
  );
}
