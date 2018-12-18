import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch =()=>{
  return(
    <div className='page-not-found'>
         <p className='error'> 404 - Page Not Found</p>
         <p> The page you requested was not found.</p>
         <Link className='go-to-mainpage'
                        to='/'>
                        Go to home page.
                      </Link>
         
    
    </div>
    )
}

export default NoMatch;