import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import Bookshelf from './Bookshelf'
import SearchPage from './SearchPage'


class BooksApp extends React.Component {
  
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
   bookshelves=[{value:"Currently Reading",key:"currentlyReading"},
                                {value:"Want to Read", key:"wantToRead"},
                                {value:"Read", key:"read"},
                                {value:"None", key:"none"}];
 

  render() {
    return (
    
      <Router>
        <div className="app">
            <Route path='/search' render={()=><SearchPage/>}/>
            <Route exact path='/' render={()=><Bookshelf bookshelves={this.bookshelves}/>}/>
        </div>
     </Router>
    )
  }
}

export default BooksApp
