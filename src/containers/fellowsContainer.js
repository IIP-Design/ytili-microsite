import React, { Component } from 'react';

import twentyEighteen from '../data/2018.json';
import GridSection from '../components/GridSection';

import {
  getData, getCities, getFellows, getMentors
} from '../utils/getData';


class FellowsContainer extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      data: {},
      cities: []
    };
  }

  componentDidMount() {
    const dataObj = getData( twentyEighteen );
    const cityArr = getCities( dataObj );

    this.setState( {
      data: JSON.parse( dataObj ),
      cities: cityArr
    } );
  }

  render() {
    const { cities, data } = this.state;
    const cityList = cities;
    const cityData = data.city ? data.city : {};

    return (
      <div className="ytili-fellows">
        { cityList.map( city => (
          <GridSection city={ cityData[city].displayName } fellows={ getFellows( data, city ) } mentors={ getMentors( data, city ) } />
        ) ) }
      </div>
    );
  }
}

export default FellowsContainer;
