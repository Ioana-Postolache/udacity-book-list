import React, {Component} from 'react'
import ChangeShelf from './ChangeShelf'

class Book extends Component{
  onChangeStatus=(ISBN,value)=>{
    this.props.changeStatus(ISBN,value);
  }
  render(){
    const {title, backgroundImage, authors, shelf, ISBN, bookshelves} = this.props;

    return(
      <div className="book">
          <div className="book-top">
          <div className="book-cover" style={{width: 128, height: 192, backgroundImage: `url("${backgroundImage}")`  }}></div>
          <ChangeShelf 
            shelf={shelf} 
            ISBN={ISBN} 
            bookshelves={bookshelves}
            onChangeStatus={this.onChangeStatus}
           />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>                          
      )
  }

}

export default Book;