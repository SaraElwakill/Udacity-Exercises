import React from 'react'
import { update } from '../BooksAPI'
import { get } from '../BooksAPI'
import { useState } from 'react'


const Book = ({book, updateShelfs=null}) => {
    const moveTo = (book, shelf) => {
        update(book, shelf)
            .then(() => {if (updateShelfs) updateShelfs()})
    };
    const [shelf, setShelf] = useState(book.shelf);
    if (!shelf)
        get(book.id)
            .then(book => setShelf(book.shelf));
    return (
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : ''})` }}></div>
            <div className="book-shelf-changer">
                <select value={shelf ||'none'} onChange={(event) => moveTo(book, event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors ? 
                    book.authors.map(a=>(<div className="book-authors" key={a} >{a}</div>)) : ''}
            </div>
        </div>
    )
}

export default Book;
