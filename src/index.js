import React from 'react';
import ReactDOM from 'react-dom';

import FellowsContainer from './containers/fellowsContainer';

import './ytili-spa.css';

ReactDOM.render(
  <FellowsContainer />,
  document.getElementById( 'ytili-spa' )
);

module.hot.accept();
