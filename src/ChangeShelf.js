import React from 'react'

const ChangeShelf = (props)=>{
  
   const handleChange=event=>{
    event.preventDefault();    
    props.onChangeStatus(props.book, event.target.value);
    
  };
  
    const {bookshelves}=props;
    const {shelf}=props.book;
    
    return(
      
      <div className="book-shelf-changer">
        <select value={shelf} onChange={handleChange}>
          <option key="move" value="move" disabled>Move to...</option>
          {bookshelves.map(bookshelf=>
                                  {return <option key={bookshelf.key} value={bookshelf.key}>{bookshelf.value}</option>}
                                  )}

        </select>
      </div>

                                       
      )
}                                    

export default ChangeShelf;