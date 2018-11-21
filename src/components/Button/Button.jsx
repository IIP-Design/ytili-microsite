import React from 'react';
import { func, number } from 'prop-types';

const Button = ( { callback, year } ) => (
  <button
    className="ytili-button"
    onClick={ () => callback( year ) }
    type="button"
  >
    { year }
  </button>
);

Button.propTypes = {
  callback: func,
  year: number
};

export default Button;
