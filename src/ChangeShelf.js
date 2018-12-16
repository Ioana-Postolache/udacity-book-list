import React, {Component} from 'react'

class ChangeShelf extends Component{
  render(){
    const translationStatuses =[{value:"Currently Reading",key:"currentlyReading"},
                                {value:"Want to Read", key:"wantToRead"},
                                {value:"Read", key:"read"},
                                {value:"None", key:"none"}];
    return(
      <div className="book-shelf-changer">
        <select value={translationStatuses.find( translation=>translation.value===this.props.status).key}>
          <option key="move" value="move" disabled>Move to...</option>
          {translationStatuses.map(translation=>
                                  {return <option key={translation.key} value={translation.key}>{translation.value}</option>}
                                  )}

        </select>
      </div>

                                       
      )
  }                                    
}
export default ChangeShelf;