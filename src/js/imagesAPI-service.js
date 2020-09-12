import searchErrorNotFound from './components/notifyErrors';

const imagesService = {
  searchQuery: '',
  apiKey: '18257903-4453e2975e3dd917fd04b41f9',
  baseUrl: 'https://pixabay.com/api/',
  perPage: 10,
  page: 1,
  editorsChoice: true,

  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
  set editors(value) {
    this.editorsChoice = value;
  },
  set imagesPerPage(value) {
    this.perPage = value;
  },

  resetPage() {
    this.page = 1;
  },

  incrementPage() {
    this.page += 1;
  },

  fetchImages() {
    return fetch(
      `${this.baseUrl}?key=${this.apiKey}&q=${this.query}&per_page=${this.perPage}&page=${this.page}
      &editors_choice=${this.editorsChoice}`
    )
      .then((res) => res.json())
      .then(({ hits: images }) => {
        if (!images.length) {
          throw new Error('Unfortunately, your request not found.');
        }
        this.incrementPage();
        console.log(images);
        return images;
      })
      .catch((err) => {
        searchErrorNotFound(err);
      });
  }
};

export default imagesService;
