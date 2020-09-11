const fetchImages = (
  query = '',
  { apiKey, baseUrl, perPage = 20, editorsChoice = false }
) => {
  return fetch(
    `${baseUrl}?key=${apiKey}&q=${query}&per_page=${perPage}&editors_choice=${editorsChoice}`
  )
    .then((res) => res.json())
    .then(({ hits: images }) => images)
    .catch((err) => {
      console.log(err);
    });
};
export default fetchImages;
