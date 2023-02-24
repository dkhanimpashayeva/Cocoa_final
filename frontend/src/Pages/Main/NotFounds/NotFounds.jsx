import React from 'react'
import { Link } from "react-router-dom";
import './NotFounds.scss'
const NotFounds = () => {
  return (
    <div className='notfound'>
            <div className="PageNotFound"     title="404"> 404  </div>

            <div className="PageNotFound" >   <Link to="/">Go Back</Link>  </div>
    
    
    </div>
  )
}

export default NotFounds