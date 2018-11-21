import React, { Component } from 'react';
import { number } from 'prop-types';

import GridSection from '../components/GridSection/GridSection';

import twentyEighteen from '../data/2018.json';
import twentySeventeen from '../data/2017.json';
import twentySixteen from '../data/2016.json';

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
    const { year } = this.props;
    this.showAlumni( year );
  }

  componentDidUpdate( prevProps ) {
    const { year } = this.props;
    if ( prevProps.year !== year ) {
      this.showAlumni( year );
    }
  }

  showAlumni( year ) {
    let dataSet;
    if ( year === 2016 ) {
      dataSet = twentySixteen;
    } else if ( year === 2017 ) {
      dataSet = twentySeventeen;
    } else {
      dataSet = twentyEighteen;
    }

    const dataObj = getData( dataSet );
    const cityArr = getCities( dataObj );

    this.setState( {
      data: JSON.parse( dataObj ),
      cities: cityArr
    } );
  }

  render() {
    const { cities, data } = this.state;
    const cityData = data.city ? data.city : {};

    return (
      <div className="ytili-fellows">
        { cities.map( ( city, index ) => (
          <GridSection
            city={ cityData[city].displayName }
            fellows={ getFellows( data, city ) }
            key={ Object.values( cities )[index] }
            mentors={ getMentors( data, city ) }
          />
        ) ) }
      </div>
    );
  }
}

FellowsContainer.propTypes = {
  year: number
};

export default FellowsContainer;
