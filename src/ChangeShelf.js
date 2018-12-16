import React, {Component} from 'react'

class ChangeShelf extends Component{
  translationStatuses =[{value:"Currently Reading",key:"currentlyReading"},
                                {value:"Want to Read", key:"wantToRead"},
                                {value:"Read", key:"read"},
                                {value:"None", key:"none"}];
  handleChange=event=>{
    event.preventDefault();    
    const value =this.translationStatuses.find(t=>t.key===event.target.value).value
    this.props.onChangeStatus(this.props.booktitle, value);
    
  };
  render(){
    
    return(
      <div className="book-shelf-changer">
        <select value={this.translationStatuses.find( translation=>translation.value===this.props.status).key} onChange={this.handleChange}>
          <option key="move" value="move" disabled>Move to...</option>
          {this.translationStatuses.map(translation=>
                                  {return <option key={translation.key} value={translation.key}>{translation.value}</option>}
                                  )}

        </select>
      </div>

                                       
      )
  }                                    
}
export default ChangeShelf;