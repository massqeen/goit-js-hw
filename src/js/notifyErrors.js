import { error } from '@pnotify/core';
const searchError = () =>
  error({
    text: 'Too many matches found. Please enter more specific query.',
    delay: 3000,
    sticker: false
  });
const searchErrorNotFound = (err) =>
  error({
    text: `${err}`,
    delay: 3000,
    sticker: false
  });
export { searchError, searchErrorNotFound };
