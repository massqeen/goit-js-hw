const fetchCountry = (countryName) => {
  return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
};
export default fetchCountry;
