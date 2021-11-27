import React from 'react'
import { Link } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Components/Shelf'

import {getAll} from './BooksAPI'


class BooksApp extends React.Component {
  state = {

    books: []

  }

  componentDidMount() {
    this.updateShelfs();
  }
  

  updateShelfs() { 
    getAll()
      .then(books => this.setState(() => ({books: books})))
  }

  render() {
    return (
      // heading
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
{/* body */}
            <div className="list-books-content">
              
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
{/* search button */}
            <div className="open-search">
              <Link to="/Search">
                <button>Add a book</button>
              </Link>
            </div>

          </div>
    )
  }
}

export default BooksApp
