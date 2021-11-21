import React from 'react'
import { Link } from "react-router-dom";
import Shelf from './Shelf';
import { search } from '../BooksAPI';
import { useState } from 'react'
 

const Search = () => {
    const [searchedBooks,setSearchedBooks]= useState([]);
    const doSearch = (q) => {
        if (q) {
            search(q)
            .then(books => setSearchedBooks(books.error ? [] : books))
        }
        setSearchedBooks([]);
    }
    return (
        <div className="search-books">
            
            <div className="search-books-bar">
                <Link to="/">
                    <button className="close-search">Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input 
                    type="text" 
                    onChange={(event) => doSearch(event.target.value)} 
                    placeholder="Search by title or author"
                    />
                </div>
            </div>
            <Shelf
                title="Search"
                books={searchedBooks}
            />
        </div>
            
    )
}

export default Search;
