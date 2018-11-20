import React, { Component } from 'react';

import FellowsContainer from '../containers/FellowsContainer';
import Button from './Button';

class AlumniPage extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      year: 2017
    };

    this.setYear = this.setYear.bind( this );
  }

  setYear( year ) {
    this.setState( {
      year
    } );
  }

  render() {
    const { year } = this.state;

    return (
      <section className="ytili-alumni-tab">
        <Button callback={ this.setYear } year={ 2018 } />
        <Button callback={ this.setYear } year={ 2017 } />
        <h1 className="ytili-tab-header">
          { 'Meet The ' }
          { year }
          { ' YTILI Fellows' }
        </h1>
        <FellowsContainer year={ year } />
      </section>
    );
  }
}

export default AlumniPage;
