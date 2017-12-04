class BooksController < ApplicationController
  before_action :set_book, only: [:show, :create, :update]

  def index
    books = Book.all
    render json: books
  end

  def show
    render json: @book
  end

  def create
    book = Book.create(book_params)
    render json: book, status: 201
  end

  def update
    @book.update(book_params)
    render json: @book
  end

  private

  def book_params
    params.require(:book).permit(:title, :description, state: [])
  end

  def set_book
    @book = Book.find(params[:id])
  end

end
