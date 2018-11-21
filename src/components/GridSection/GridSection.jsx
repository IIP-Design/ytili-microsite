import React, { Fragment } from 'react';
import { arrayOf, string, object } from 'prop-types';

import GridItem from '../GridItem/GridItem';

const GridSection = ( { city, fellows, mentors } ) => (
  <section className="ytili-section-fellows-city">
    <h2 className="ytili-section-header">{ city }</h2>
    <section className="ytili-grid-section">
      { fellows.map( fellow => (
        <GridItem fellow={ fellow } key={ fellow.lastname } />
      ) ) }
    </section>
    { mentors ? (
      <Fragment>
        <h3 className="ytili-section-header">Mentors</h3>
        <p className="ytili-mentors-list">
          { mentors }
        </p>
      </Fragment>
    ) : ( ' ' ) }
  </section>
);

GridSection.propTypes = {
  city: string,
  fellows: arrayOf( object ),
  mentors: string
};

export default GridSection;
