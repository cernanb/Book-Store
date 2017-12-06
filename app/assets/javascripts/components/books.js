class Books {
  constructor() {
    this.books = []

    getBooks().then(() => {
      this.initBindings()
      this.loadBooks()
    })
  }

  initBindings() {
    this.booksDiv = document.getElementById('books')
  }

  loadBooks() {
    store.getState().books.forEach(book => this.books.push(new Book(book)))
    this.render()
  }

  bookHtml() {
    return this.books.map(book => book.render()).join('')
  }

  render() {
    this.booksDiv.innerHTML = this.bookHtml()
  }
}
