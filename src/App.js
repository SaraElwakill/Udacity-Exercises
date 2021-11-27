import React from 'react'
import { Link } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Components/Shelf'

import {getAll} from './BooksAPI'

async function updateBooks(app){
  const allBooks = await getAll()
  app.setState((state)=>({books: allBooks}))
}
class BooksApp extends React.Component {
  state = {

    books: []

  }

  componentDidMount() {
    updateBooks(this)
    // this.updateShelfs();
  }
  
  
  // updateShelfs() { 
  //   getAll()
  //     .then(books => this.setState(() => ({books: books})))
  // }

  render() {
    console.log(this.state.books)
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
                  updateShelfs={(book, shelf) => updateBooks()}
                  
                />
                <Shelf
                  title="Want to Read"
                  books={this.state.books.filter(o => o.shelf === "wantToRead")}
                  updateShelfs={(book, shelf) => updateBooks()}
                />
                <Shelf
                  title="Read"
                  books={this.state.books.filter(o => o.shelf === "read")}
                  updateShelfs={(book, shelf) => updateBooks()}
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
