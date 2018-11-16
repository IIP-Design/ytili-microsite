import React, { Component } from 'react';

import twentyEighteen from '../data/2018.json';
import { getData, getCities } from '../util/getData';
import Fellows from '../components/Fellows';

class FellowContainer extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      // data: '',
      cities: ''
    };
  }

  componentDidMount() {
    const dataObj = getData( twentyEighteen );
    const cityObjs = getCities( dataObj );

    console.log( cityObjs );

    this.setState( {
      // data: dataObj,
      cities: cityObjs
    } );
  }

  render() {
    const { cities } = this.state;

    return (
      <div className="ytili-fellows">
        <Fellows city={ cities } />
      </div>
    );
  }
}

export default FellowContainer;
