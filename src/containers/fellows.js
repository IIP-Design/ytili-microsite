import React, { Component } from 'react';

import twentyEighteen from '../data/2018.json';
import { getData, getCities } from '../util/getData';
import Fellows from '../components/Fellows';

class FellowContainer extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      data: '',
      cities: ''
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

    return (
      <div className="ytili-fellows">
        <Fellows cities={ cities } data={ data } />
      </div>
    );
  }
}

export default FellowContainer;
