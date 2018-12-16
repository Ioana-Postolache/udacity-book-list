import React, {Component} from 'react'
import ChangeShelf from './ChangeShelf'

class Book extends Component{
  
  render(){
    const {title, backgroundImage, authors, shelf, id, bookshelves} = this.props;

    return(
      <div className="book">
          <div className="book-top">
          <div className="book-cover" style={{width: 128, height: 192, backgroundImage: `url("${backgroundImage}")`  }}></div>
          <ChangeShelf 
            shelf={shelf} 
            id={id} 
            bookshelves={bookshelves}
            onChangeStatus={this.props.changeStatus}
           />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>                          
      )
  }

}

export default Book;