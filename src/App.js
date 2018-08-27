import React, { Component } from 'react'
import './App.css'
import { Route, Link } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

class BooksApp extends Component {

  render() {
    return (
      <div className="app">
        <Route path = "/search" component = {SearchBooks}/>
        <Route exact path = "/" render = {() => (
          <div>
            <ListBooks />
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
