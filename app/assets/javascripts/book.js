const store = {
  state: {
    books: []
  }

  getState: function() {
      return this.state
    }

  updateState: function(action) {
    switch (action.type) {

      case 'LOAD_BOOKS':
    
      break;

      case 'LOAD_BOOK':

      break;

      case 'CREATE_BOOK':
        this.state = Object.assign({}, this.state, {
          books: this.state.books.concat(action.book)
        })
      break;

      case 'EDIT_BOOK':

      break;

      case 'DELETE_BOOK':

      break;
    }
  }
}
