import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import DisplayBooks from './DisplayBooks'

class SearchBooks extends Component {
  state = {
    query: '',
    books:[],
    markedBooks:[]
  }

  searchBooks = (query) => {
    this.setState(() => ({
      query: query
    }))
    if (query !== ''){ BooksAPI.search(query)
    .then(books => {
      this.setState(() => ({
        books: books
      }))
    })}
    console.log("books search", this.state.books)
  }

updateBooks = () => {

}

componentDidMount() {
  BooksAPI.getAll()
  .then((books) => {
    this.setState(() => ({
      markedBooks: books
    })
  )})
}

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.searchBooks(event.target.value)}/>
          </div>
        </div>
        {this.state.books.length !== undefined && this.state.books.length !== 0 && (
        <DisplayBooks
          shelfTitle="Results"
          shelfBooks={this.state.books}
          onChangeShelf={this.updateBooks.bind(this)}
          markedBooks={this.state.markedBooks}/>
        )}
      </div>
    )
  }
}

export default SearchBooks;
