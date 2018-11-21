import React, { Fragment } from 'react';
import { object } from 'prop-types';

const GridItem = ( { fellow } ) => (
  <div className="ytili-grid-item">
    <img
      className="ytili-grid-image"
      src={ `https://staticshare.america.gov/uploads/${fellow.image}` }
      alt={ `${fellow.firstname} ${fellow.lastname}` }
    />
    <br />
    <strong>
      { fellow.firstname }
      { ' ' }
      { fellow.lastname }
    </strong>
    <br />
    <div className="ytili-grid-meta">
      <strong>Country: </strong>
      { fellow.country }
      <br />
      { fellow.company ? (
        <Fragment>
          <strong>Company: </strong>
          { fellow.company }
        </Fragment>
      ) : ( ' ' ) }
    </div>
  </div>
);

GridItem.propTypes = {
  fellow: object
};

export default GridItem;
