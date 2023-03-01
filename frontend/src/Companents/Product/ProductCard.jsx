import React, { useState } from "react";
import Reactstars from "react-rating-stars-component";
import { Link, useParams } from "react-router-dom";
import "./ProductCard.scss";
import { SlBasket } from "react-icons/sl";
import { BsHeart } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { useDispatch} from "react-redux";
import { addItemsToWishlist } from "../../actions/productAction";
import { useAlert } from 'react-alert';
import { addItemsToCart } from "../../actions/cartAction";
const ProductCard = ({product}) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch=useDispatch()
  const alert = useAlert();
  const { id } = useParams();
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "#1A1A1A",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    alert.success("Item Added To Cart");
  };
  const addToWishlistHandler = () => {
    dispatch(addItemsToWishlist(id,quantity));
    alert.success("Item Added To Wishlist");
  };
  return (
    <div>
      <Link className="productCard" to={`/product/${product._id}`}>
    <div className="product-container">
                <div className="product-image">
                      {/* <img src={product.images} alt={product.name} /> */}
                      {product.images &&
                          product.images.map((image) => (
                            <div key={image.public_id}>
                           
                                <img
                                  className="d-block w-100"
                                  src={image.url}
                                  alt={product.title}
                                />
                            </div>
                          ))}

                </div>
                <div className="product-overlay-image">                    
                <img src={product.imagesOver} alt={product.name} className="overlay-image"/>

              
                  <div className="product-btns">
                    <span>
                      <SlBasket  onClick={addToCartHandler}/>
                    </span>
                    <span>
                      <BsHeart onClick={addToWishlistHandler}/>
                    </span>
                    <span>
                  <Link to='/search'>    <BiSearch /></Link>
                    </span>
                    <span>
                      <HiOutlineSquare2Stack />
                    </span>
                  </div>
                </div>
                <div className="product-rating">
                <Reactstars {...options} />
          {/* <span>{`${product.numOfReviews}Review`}</span> */}
                </div>
                <div className="product-name">
                  <h4>{product.name}</h4>
                </div>
                <div className="product-price">
                  <span>{`Rs.${product.price}`}</span>
                </div>
              </div>
 
      </Link>
      
    
    </div>
  );
};

export default ProductCard;
