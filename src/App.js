import React, { Component } from 'react'
import './App.css'
import { Route, Link, Switch } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import ErrorPage from './ErrorPage'

class BooksApp extends Component {

  render() {
    return (
      <div className="app">
        <Switch>
        <Route exact path = "/" render = {() => (
            <div>
              <ListBooks />
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}/>
        <Route path = "/search" component = {SearchBooks}/>
        <Route component={ErrorPage}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
