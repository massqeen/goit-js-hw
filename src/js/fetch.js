const fetchCountry = (countryName) => {
  return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Could not find such country');
      }
      return res.json();
    })
    .then((data) => data);
};
export default fetchCountry;
