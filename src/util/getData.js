export const getData = ( input ) => {
  const data = JSON.stringify( input );

  return data;
};

export const getCities = ( input ) => {
  const cities = Object.values( JSON.parse( input ) )[0];

  return cities;
};
