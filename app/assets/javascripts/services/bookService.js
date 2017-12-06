const bookService = {
  getBooks() {
    return fetch('/books')
      .then(function(res) {
        return res.json()
      })
      .then(function(books) {
        return books.data
      })
  }
}
