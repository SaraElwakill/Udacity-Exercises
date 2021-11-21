import React from 'react'
import { Link } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Components/Shelf'

import {getAll} from './BooksAPI'
import Search from './Components/Search';

import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    searchedBooks: [],
  }

  componentDidMount() {
    this.updateShelfs();
  }
  toHome(){
    this.setState({ showSearchPage: false })
  }

  moveTo(book, shelf) {

  }

  updateShelfs() { 
    getAll()
      .then(books => this.setState(() => ({books: books})))
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? 
        
        (
          <div className="search-books">
            <Search showSearchPage={this.showSearchPage} doSearch={this.doSearch} toHome={this.toHome}/>
            <Shelf
                    title="Search"
                    books={this.state.searchedBooks}
                    moveTo={(book, shelf) => this.moveTo(book, shelf)}
                  />
          </div>

        ) 
        : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf
                  title="Currently Reading"
                  books={this.state.books.filter(o => o.shelf === "currentlyReading")}
                  updateShelfs={(book, shelf) => this.updateShelfs()}
                />
                <Shelf
                  title="Want to Read"
                  books={this.state.books.filter(o => o.shelf === "wantToRead")}
                  updateShelfs={(book, shelf) => this.updateShelfs()}
                />
                <Shelf
                  title="Read"
                  books={this.state.books.filter(o => o.shelf === "read")}
                  updateShelfs={(book, shelf) => this.updateShelfs()}
                />
              </div>
            </div>
            <div className="open-search">
            
            
              <Link to="/Search">
                <button>Add a book</button>
              </Link>
              
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
