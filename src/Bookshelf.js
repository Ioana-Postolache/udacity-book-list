import React from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types'


const Bookshelf = (props)=>{
    const {bookshelves, books, changeStatus}=props;

    return(     
           <div className="list-books">       
                      <div className="list-books-title">
                        <h1>MyReads</h1>
                      </div>
                      <div className="list-books-content">
                        <div>
                         {bookshelves.filter(book=>book.key!=="none").map(bookshelf=>
                          <div className="bookshelf" key={bookshelf.key}>
                            <h2 className="bookshelf-title">{bookshelf.value}</h2>
                            <div className="bookshelf-books">
                              <ol className="books-grid">
                               {books.filter(book=>book.shelf===bookshelf.key).map(book=><li key={book.id}>
                                  <Book                                     
                                     book={book}
                                     bookshelves={bookshelves}
                                     changeStatus={changeStatus}
                                   />
                                </li>)}
                               </ol>
                            </div>
                          </div>
                          )}
                        </div>
                      </div>

                     <Link
                        to="/search"
                        className="open-search"
                        >Add a book
                    </Link>
                    </div>
)}
Bookshelf.propTypes = {
    bookshelves: PropTypes.array.isRequired,
    changeStatus: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }
export default Bookshelf;