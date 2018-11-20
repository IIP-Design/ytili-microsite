import React from 'react';
import ReactDOM from 'react-dom';

import AlumniPage from './containers/AlumniPage';

import './ytili-spa.css';

export const ytiliSPA = () => {
  ReactDOM.render(
    <AlumniPage />,
    document.getElementById( 'ytili-spa' )
  );
};

// module.hot.accept();
