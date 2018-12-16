import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
class Bookshelf extends Component{
 
    state={ 
      books: []
       }
 componentDidMount(){
    BooksAPI.getAll()
      .then((books=>{
        this.setState(()=>({
          books
        }))
      }))
  }
 changeStatus=(ISBN, value)=>{
    this.setState((prevState)=>({
      books: [...prevState.books.filter(book=>book.industryIdentifiers[0].identifier!==String(ISBN)),
              { ...prevState.books
               .find(book=>book.industryIdentifiers[0].identifier===String(ISBN)),
               shelf:value}] 
    }));
  }

  render(){
    const {books}=this.state;

    return(
     
           <div className="list-books">
       {console.log(books.length +JSON.stringify(books))}
                      <div className="list-books-title">
                        <h1>MyReads</h1>
                      </div>
                      <div className="list-books-content">
                        <div>
                         {this.props.bookshelves.filter(book=>book.key!=="none").map(bookshelf=>
                          <div className="bookshelf" key={bookshelf.key}>
                            <h2 className="bookshelf-title">{bookshelf.value}</h2>
                            <div className="bookshelf-books">
                              <ol className="books-grid">
                               {books.filter(book=>book.shelf===bookshelf.key).map((book, index)=><li key={index}>
                                  <Book                                     
                                     backgroundImage={book.imageLinks.thumbnail}
                                     title={book.title}
                                     authors={book.authors}
                                     shelf={book.shelf}
                                     ISBN={book.industryIdentifiers[0].identifier}
                                     bookshelves={this.props.bookshelves}
                                     changeStatus={this.changeStatus}
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
)}}

export default Bookshelf;