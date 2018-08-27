import React, { Component, Fragment } from 'react'
import * as BooksAPI from './BooksAPI'

class ShelfChanger extends Component {

state = {
  shelf: ''
}

  updateShelf = (currBook, shelf) => {
    BooksAPI.update(currBook, shelf)
    this.setState(()=> ({
      shelf: shelf
    }))
    this.props.onChangeShelf(currBook, shelf)
  }

  componentDidMount() {
    this.setState(() => (
      {
        shelf: this.props.currentBook.shelf
      }
    ))
  }

  render() {
    const { title, currentBook, onChangeShelf, markedBooks } = this.props
    let shelfValue = ""

    for (let book in markedBooks) {
        if (markedBooks[book].title == currentBook.title) {
          shelfValue = markedBooks[book].shelf
        }
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
