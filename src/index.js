import React from 'react';
import ReactDOM from 'react-dom';

import AlumniPage from './containers/AlumniPage';

import './ytili-spa.css';

ReactDOM.render(
  <AlumniPage />,
  document.getElementById( 'ytili-spa' )
);

module.hot.accept();
