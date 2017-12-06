const getBooks = () => {
  return bookService.getBooks().then(data => {
    store.updateState({
      type: 'LOAD_BOOKS',
      payload: data
    })
  })
}
