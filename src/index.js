import React from 'react';
import ReactDOM from 'react-dom';

import FellowContainer from './containers/fellows';

import './ytili-spa.css';

ReactDOM.render(
  <FellowContainer />,
  document.getElementById( 'ytili-spa' )
);

module.hot.accept();
