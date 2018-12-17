import React, {Component} from 'react'

class ChangeShelf extends Component{
  
  handleChange=event=>{
    event.preventDefault();    
    this.props.onChangeStatus(this.props.book, event.target.value);
    
  };
  render(){
    const {bookshelves}=this.props;
    const {shelf}=this.props.book;
    
    return(
      
      <div className="book-shelf-changer">
        <select value={shelf} onChange={this.handleChange}>
          <option key="move" value="move" disabled>Move to...</option>
          {bookshelves.map(bookshelf=>
                                  {return <option key={bookshelf.key} value={bookshelf.key}>{bookshelf.value}</option>}
                                  )}

        </select>
      </div>

                                       
      )
  }                                    
}
export default ChangeShelf;