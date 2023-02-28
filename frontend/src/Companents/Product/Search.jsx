import React, { useState, Fragment } from "react";
import './Search.scss'
import MetaData from './../MetaData';
import { useNavigate } from 'react-router-dom';
const Search = () => {
    const [keyword, setKeyword] = useState("");
const navigate=useNavigate()
    const searchSubmitHandler = (e) => {
      e.preventDefault();
      if (keyword.trim()) {
      navigate(`/products/${keyword}`);
      } else {
        navigate("/products");
      }
    };
  return (
    <Fragment>
    <MetaData title="Search A Product -- Cocoa" />
    <form className="searchBox" onSubmit={searchSubmitHandler}>
      <input
        type="text"
        placeholder="Search a Product ..."
        onChange={(e) => setKeyword(e.target.value)}
      />
      <input type="submit" value="Search" />
    </form>
  </Fragment>
  )
}

export default Search