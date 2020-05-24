export const formatData = (data) =>
  [...data.hits].map(({ id, webformatURL, largeImageURL }) => ({
    id,
    webformatURL,
    largeImageURL,
  }));
