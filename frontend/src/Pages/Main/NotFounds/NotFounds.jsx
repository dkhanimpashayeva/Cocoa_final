import React from 'react'
import ErrorIcon from "@material-ui/icons/Error";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import './NotFounds.scss'
const NotFounds = () => {
  return (
    <div className='notfound'>
      <div className="PageNotFound"     title="404">404</div>
      <br/>
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default NotFounds