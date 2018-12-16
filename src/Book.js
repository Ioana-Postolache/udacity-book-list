import React, {Component} from 'react'
import ChangeShelf from './ChangeShelf'

class Book extends Component{
  onChangeStatus=(booktitle,value)=>{
    this.props.changeStatus(booktitle,value);
  }
  render(){
    const {width, height, booktitle, backgroundImage, bookauthors, status} = this.props;

    return(
      <div className="book">
          <div className="book-top">
          <div className="book-cover" style={{width: width, height: height, backgroundImage: backgroundImage  }}></div>
          <ChangeShelf status={status} booktitle={booktitle} onChangeStatus={this.onChangeStatus}/>
        </div>
        <div className="book-title">{booktitle}</div>
        <div className="book-authors">{bookauthors}</div>
      </div>                          
      )
  }

}

export default Book;