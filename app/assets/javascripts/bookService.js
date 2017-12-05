const bookService = {
  getBooks() {
    fetch('/books')
      .then(function(res){
        return res.json()
      })
      .then(function(books){
        //debugger
        store.updateState({
          type: 'LOAD_BOOKS',
          payload: books.data
        })
      })
  }
}
