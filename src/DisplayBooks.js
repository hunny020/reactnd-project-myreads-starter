import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class DisplayBooks extends Component {
  onChangeShelf (a,b) {
    this.props.onChangeShelf(a,b);
  }

  render() {
    const title = this.props.shelfTitle
    const books = this.props.shelfBooks
    const markedBooks = this.props.markedBooks
    const imageUrl = require("./icons/not_available.jpg");

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.industryIdentifiers ? book.industryIdentifiers[0].identifier: Math.random()}>
                <div className="book">
                  <div className="book-top">
                    {book.imageLinks && book.imageLinks.thumbnail ?
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ book.imageLinks.thumbnail })` }}></div>
                    : <div className="book-cover" style={{ width: 128, height: 193 ,backgroundImage: `url(${imageUrl})`, backgroundSize: '100% 100%'}}></div>}
                    <div className="book-shelf-changer">
                      <ShelfChanger
                        title={title}
                        currentBook={book}
                        onChangeShelf={this.onChangeShelf.bind(this)}
                        markedBooks={markedBooks}
                      />
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{"authors" in book ? book.authors[0]: "Unknown"}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default DisplayBooks;
