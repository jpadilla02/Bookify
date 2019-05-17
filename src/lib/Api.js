export function findBooks(title, startIndex) {
  const books = fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=40&startIndex=${startIndex}`
  ).then(results => results.json());
  return books;
}

export function findBook(id) {
  const book = fetch(`https://www.googleapis.com/books/v1/volumes/${id}`).then(
    results => results.json()
  );
  return book;
}
