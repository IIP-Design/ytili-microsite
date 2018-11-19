export const getData = ( input ) => {
  const data = JSON.stringify( input );

  return data;
};

export const getCities = ( input ) => {
  const cities = Object.keys( JSON.parse( input ).city );

  return cities;
};

export const getFellows = ( input, city ) => {
  const cities = input.city;
  const { fellows } = cities[city];

  return fellows;
};

export const getMentors = ( input, city ) => {
  const cities = input.city;
  const mentorsObj = cities[city].mentors;
  const mentorsArr = [];

  mentorsObj.forEach( ( mentor ) => {
    mentorsArr.push( `${mentor.firstname} ${mentor.lastname}` );
  } );

  const mentors = mentorsArr.join( ', ' );

  return mentors;
};
