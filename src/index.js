import React from 'react';
import ReactDOM from 'react-dom';

import Fellows from './components/Fellows';

import './ytili-spa.css';

ReactDOM.render(
  <Fellows />,
  document.getElementById( 'ytili-spa' )
);

module.hot.accept();
