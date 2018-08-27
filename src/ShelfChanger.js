import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class ShelfChanger extends Component {

  updateShelf = (currBook, shelf) => {
    BooksAPI.update(currBook, shelf)
    this.setState(()=> ({
      shelf: shelf
    }))
    this.props.onChangeShelf(currBook, shelf)
  }

  render() {
    const currentBook = this.props.currentBook
    const markedBooks = this.props.markedBooks
    let shelfValue = ""

    if (markedBooks !== undefined) {
      for (let book in markedBooks) {
        if (markedBooks[book].title === currentBook.title) {
          shelfValue = markedBooks[book].shelf
        }
      }
    } else {
      shelfValue = currentBook.shelf
    }

    return (
      <select id="shelfoptions" value={ shelfValue !== "" ? shelfValue: "none" } onChange={(event) => this.updateShelf(currentBook, event.target.value)}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    )
  }
}

export default ShelfChanger;
