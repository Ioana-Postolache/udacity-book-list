import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {DebounceInput} from 'react-debounce-input';
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types'

class SearchPage extends Component{
  
  static propTypes = {
    bookshelves: PropTypes.array.isRequired,
    changeStatus: PropTypes.func.isRequired,
    getShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    searchedBooks:[]
    
  }
 
 updateQuery = (query, maxResults) =>{    
    this.setState(()=>({
      query: query
    }))  
   this.updateSearchedBooks(query, maxResults);
  }

 updateSearchedBooks = (query, maxResults)=>{
   
   query.length===0 
   ? this.setState({searchedBooks: null})
   : BooksAPI.search(query, maxResults).then(
         searchedBooksResults=>{
           searchedBooksResults!==undefined && searchedBooksResults.error===undefined
           ?this.setState(()=>(
             {searchedBooks: searchedBooksResults.map(book=> (
               {...book, shelf: this.props.getShelf(book.id) })
                )})
             )
         : this.setState({searchedBooks: null})}) 
            
   
}
                    
 changeStatus=  (selectedBook, value)=>{
    this.setState((prevState)=>({
      searchedBooks: [...prevState.searchedBooks.filter(book=>book.id!==selectedBook.id),
              {...prevState.searchedBooks
               .filter(book=>book.id===selectedBook.id).length===1
              ?{ ...prevState.searchedBooks
               .find(book=>book.id===selectedBook.id),
               shelf:value}
             :{...selectedBook, shelf:value}}] 
    }));
   this.props.changeStatus(selectedBook, value);
 }
  
  render(){
    const {query, searchedBooks} = this.state;
    const {bookshelves} = this.props;
    const maxResults = 10;
    

    return(
            <div className="search-books">
               <div className="search-books-bar">
                      <Link
                        className='close-search'
                        to='/'>
                        Close
                      </Link>
                      <div className="search-books-input-wrapper">
                        {/*
                          NOTES: The search from BooksAPI is limited to a particular set of search terms.
                          You can find these search terms here:
                          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                          you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <DebounceInput
                            minLength={2}
                            debounceTimeout={300} 
                            type="text" 
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event)=>this.updateQuery(event.target.value, maxResults)}/>

                      </div>
                    </div>
                    {(searchedBooks!==null )&& (
                    <div className="search-books-results">
                      <ol className="books-grid">
                       {searchedBooks.map(book=><li key={book.id}>
                                  <Book                                     
                                     book={book}
                                     bookshelves={bookshelves}
                                     changeStatus={this.changeStatus}
                                   />
                                </li>)}
                      </ol>
                    </div>
                    )}
                  </div>
     )
  }
}

export default SearchPage;