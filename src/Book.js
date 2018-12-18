import React from 'react'
import ChangeShelf from './ChangeShelf'

const Book =(props)=>{
    const {title, authors} = props.book;
    const backgroundImage= props.book.imageLinks===undefined?"https://dummyimage.com/128x193/2e7c31/fff.png&text=Cover+Missing":props.book.imageLinks.thumbnail;
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
        {authors!==undefined&&(<div className="book-authors">{authors.map(author=> 
                                       <div key={author}>{author}</div>)}
                             </div>)}

      </div> 
      
      )
  }



export default Book;