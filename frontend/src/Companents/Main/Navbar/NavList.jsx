import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { productsReducer } from './../../../reducers/productReducer';

const NavList = () => {
    // const { loading, error, product } = useSelector((state) => state.productsReducer );
    const { loading, error, product } = useSelector(
        (state) => state.productDetails
      );
  return (
    <Link  to={`/product/${product._id}`}>
        <p> {product.name}</p>
      </Link>
      
  )
}

export default NavList