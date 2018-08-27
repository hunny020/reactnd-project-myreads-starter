import React, { Component } from 'react'
import DisplayBooks from './DisplayBooks'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      })
    )})
  }

  updateBooks = (currentBook, shelf) => {
    const latestBooks = this.state.books.map((book) => (
      book.title === currentBook.title ? {...book, shelf}: book ))
      this.setState(() => ({
        books: latestBooks
      })
    )}

render() {
  const books = this.state.books
  const currentBooks = books.filter((b) => b.shelf === "currentlyReading")
  const toReadBooks = books.filter((b) => b.shelf === "wantToRead")
  const readBooks = books.filter((b) => b.shelf === "read")
  const bgImageUrl = require("./icons/books-bg3.jpg")

  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content" style={{ backgroundImage: `url(${bgImageUrl})`, backgroundSize: '100% 100%'}}>
        <div>
          <DisplayBooks
            shelfTitle="Currently Reading"
            shelfBooks={currentBooks}
            onChangeShelf={this.updateBooks.bind(this)}/>
          <DisplayBooks
            shelfTitle="Want to Read"
            shelfBooks={toReadBooks}
            onChangeShelf={this.updateBooks.bind(this)}/>
          <DisplayBooks
            shelfTitle="Read"
            shelfBooks={readBooks}
            onChangeShelf={this.updateBooks.bind(this)}/>
        </div>
      </div>
    </div>
  )}}

export default ListBooks;
