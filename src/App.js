import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import SearchPage from './SearchPage'
import NoMatch from './NoMatch'



class BooksApp extends React.Component {
  
    
   bookshelves=[{value:"Currently Reading",key:"currentlyReading"},
                                {value:"Want to Read", key:"wantToRead"},
                                {value:"Read", key:"read"},
                                {value:"None", key:"none"}];
 
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
 changeStatus=async (selectedBook, value)=>{

    await this.setState((prevState)=>({
      books: [...prevState.books.filter(book=>book.id!==selectedBook.id),
              {...prevState.books
               .filter(book=>book.id===selectedBook.id).length===1
              ?{ ...prevState.books
               .find(book=>book.id===selectedBook.id),
               shelf:value}
             :{...selectedBook, shelf:value}}] 
    }));
   BooksAPI.update(this.state.books
               .find(book=>book.id===selectedBook.id), value)
  }
   getShelf=(bookId)=>{
          return this.state.books.find(book=>book.id===bookId)===undefined
                  ?"none"
                  :this.state.books.find(book=>book.id===bookId).shelf;
   }

  render() {
    return (
    
    
    <Router>
         <Switch>      
            <Route path='/search' render={()=>
             <SearchPage
               bookshelves={this.bookshelves} 
               changeStatus={this.changeStatus}
               getShelf={this.getShelf}
              />}
            />
            <Route exact path='/' render={()=>
              <Bookshelf 
                 bookshelves={this.bookshelves}
                 changeStatus={this.changeStatus}
                 books={this.state.books}
             />}
            />
            <Route component={NoMatch}/>
       </Switch>
    </Router>
    )
  }
}

export default BooksApp
