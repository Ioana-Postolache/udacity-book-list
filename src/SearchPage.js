import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component{
  state = {
    query: '',
    searchedBooks:[]
    
  }

 
 updateQuery = (query) =>{    
    this.setState(()=>({
      query: query
    }))    
  }

 updateSearchedBooks = async (query, maxResults)=>{
   this.updateQuery(query);
   query.length===0
   ?this.setState({searchedBooks: null})
   :BooksAPI.search(query, maxResults).then(
         searchedBooksResults=>{
           searchedBooksResults!==undefined && searchedBooksResults.error===undefined
           ?this.setState(()=>(
             {searchedBooks: searchedBooksResults.map(book=> (
               {...book, shelf: this.props.getShelf(book.id) })
                )})
             )
         : this.setState({searchedBooks: null})})          
   
}
                    
 changeStatus=  async (selectedBook, value)=>{
   await this.setState((prevState)=>({
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
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event)=>this.updateSearchedBooks(event.target.value, maxResults)}/>

                      </div>
                    </div>
                    {(searchedBooks!==null )&& (
                    <div className="search-books-results">
                      <ol className="books-grid">
                       {searchedBooks.map((book, index)=><li key={index}>
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