class Book  {
  constructor(title, description) {
    this.title = title
    this.description = description
  }

  render() {
    return `<h1>${this.title}</h1>`
  }
}
