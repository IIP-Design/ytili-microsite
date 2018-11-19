import React, { Component, Fragment } from 'react';
import GridSection from './GridSection';
import { getFellows, getMentors } from '../util/getData';

class Fellows extends Component {
  constructor( props ) {
    super( props );
  }

  render() {
    const { cities } = this.props;
    const { data } = this.props;
    const cityList = cities ? cities : [];
    const cityData = data.city ? data.city : {};

    return (
      <Fragment>
        { cityList.map( city => (
          <GridSection city={ cityData[city].displayName } fellows={ getFellows( data, city ) } mentors={ getMentors( data, city ) } />
        ) ) }
      </Fragment>
    );
  }
}

export default Fellows;
