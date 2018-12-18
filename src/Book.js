import React from 'react'
import ChangeShelf from './ChangeShelf'

const Book =(props)=>{
    const {title, authors} = props.book;
    const backgroundImage= props.book.imageLinks===undefined?"":props.book.imageLinks.thumbnail;
    const {bookshelves, book}= props;
    
    return(
      <div className="book">
          <div className="book-top">
          <div className="book-cover" style={{width: 128, height: 192, backgroundImage: `url("${backgroundImage}")`  }}></div>
          <ChangeShelf 
            book={book} 
            bookshelves={bookshelves}
            onChangeStatus={props.changeStatus}
           />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>

      </div>                          
      )
  }



export default Book;