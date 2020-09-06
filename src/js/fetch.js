fetch('https://restcountries.eu/rest/v2/name/mexico')
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
