import React from 'react'
import Book from './Book'

const Shelf = ({title, books, updateShelfs}) => {
    console.log(books)
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(o => (
                        <li key={o.id}>
                            <Book 
                                book={o}
                                updateShelfs={updateShelfs}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Shelf;
