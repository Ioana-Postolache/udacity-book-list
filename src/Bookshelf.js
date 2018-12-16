import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'

class Bookshelf extends Component{
 
    state={ books:
        [{
          width: 128, 
          height: 193, 
          backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
          booktitle: 'To Kill a Mockingbird',  
          bookauthors: 'Harper Lee',
          status:'Currently Reading'
         },
         {
          width: 128, 
          height: 188, 
          backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
          booktitle: "Ender's Game",
          bookauthors: 'Orson Scott Card',
          status:'Currently Reading'
         },
         {
          width: 128, 
          height: 193, 
          backgroundImage: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")',
          booktitle:'1776',
          bookauthors: 'David McCullough',
          status:'Want to Read'
         },
         {
          width: 128, 
          height: 192, 
          backgroundImage: 'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")',
          booktitle: "Harry Potter and the Sorcerer's Stone",
          bookauthors: 'J.K. Rowling',
          status:'Want to Read'
         },
         {
          width: 128, 
          height: 192, 
          backgroundImage: 'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")',
          booktitle: 'The Hobbit',
          bookauthors: 'J.R.R. Tolkien',
          status:'Read'
         },
         {
          width: 128, 
          height: 174, 
          backgroundImage: 'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6mzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")',
          booktitle: "Oh, the Places You'll Go!",
          bookauthors: 'Seuss',
          status:'Read'
         },
         {
          width: 128, 
          height: 192, 
          backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")',
          booktitle: 'The Adventures of Tom Sawyer',
          bookauthors: 'Mark Twain',
          status:'Read'
         }
        ]
       }

 changeStatus=(booktitle, value)=>{
    this.setState((prevState)=>({
      books: [...prevState.books.filter(book=>book.booktitle!==String(booktitle)),
              { ...prevState.books
               .find(book=>book.booktitle===String(booktitle)),
               status:value}] 
    }));
  }

  render(){
    const {books}=this.state;

    return(
     
           <div className="list-books">
       {console.log(books.length +JSON.stringify(books))}
                      <div className="list-books-title">
                        <h1>MyReads</h1>
                      </div>
                      <div className="list-books-content">
                        <div>
                         {this.props.bookshelves.map(bookshelf=>
                          <div className="bookshelf" key={bookshelf}>
                            <h2 className="bookshelf-title">{bookshelf}</h2>
                            <div className="bookshelf-books">
                              <ol className="books-grid">
                               {books.filter(book=>book.status===bookshelf).map((book, index)=><li key={index}>
                                  <Book 
                                    
                                     width={book.width}
                                     height={book.height}
                                     backgroundImage={book.backgroundImage}
                                     booktitle={book.booktitle}
                                     bookauthors={book.bookauthors}
                                     status={book.status}
                                     changeStatus={this.changeStatus}
                                   />
                                </li>)}
                               </ol>
                            </div>
                          </div>
                          )}
                        </div>
                      </div>

                     <Link
                        to="/search"
                        className="open-search"
                        >Add a book
                    </Link>
                    </div>
)}}

export default Bookshelf;