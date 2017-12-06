class Book {
  constructor(book) {
    this.id = book.id
    this.title = book.attributes.title
    this.description = book.attributes.description
  }

  render() {
    return `
      <h3>${this.title}</h3>
      <p>${this.description}</p>
    `
  }
}
