import React from "react";
import Reactstars from "react-rating-stars-component";
import { Link, useParams } from "react-router-dom";
import "./ProductCard.scss";
import { SlBasket } from "react-icons/sl";
import { BsHeart } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToWishlist } from "../../actions/productAction";
const ProductCard = ({product}) => {
  const dispatch=useDispatch()
  // const { loading, error, product,id } = useSelector(
  //   (state) => state.productDetails
  // );
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "#1A1A1A",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
  };
const {id} =useParams()


  const addToWishlistHandler = () => {
    dispatch(addItemsToWishlist(id));
    alert.success("Item Added To Wishlist");
  };
  return (
    <div>
      <Link className="productCard" to={`/product/${product._id}`}>
    <div className="product-container">
                <div className="product-image">
                      <img src={product.images[0].url} alt={product.name} />

                </div>
                <div className="product-overlay-image">                    
                <img src={product.imagesOver} alt={product.name} className="overlay-image"/>

              
                  <div className="product-btns">
                    <span>
                      <SlBasket  />
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
