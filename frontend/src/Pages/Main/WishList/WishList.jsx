import React, { Fragment } from 'react'
import WishlistItemCart from './WishlistItemCart';
import { RemoveShoppingCartIcon } from '@material-ui/icons/RemoveShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { addItemsToWishlist, removeItemsFromWishlist } from '../../../actions/productAction';
import CartItemCard from '../../../Companents/Cart/CartItemCard';
import HeartBrokenOutlinedIcon from '@mui/icons-material/HeartBrokenOutlined';
import WishlistTitle from './WishlistTitle';
import './Wishlist.scss';
import ScrollToTop from '../../../Companents/ScrollToTop/ScrollToTop';
const WishList = () => {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
 
    dispatch(addItemsToWishlist(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToWishlist(id, newQty));
  };

  const wishlistCartItems = (id) => {
    dispatch(removeItemsFromWishlist(id));
  };
 
  return (
   <>
   <WishlistTitle/>
    <Fragment>


      
{wishlistItems.length === 0 ? (
  <div className="emptyWishlist">
    <HeartBrokenOutlinedIcon />

    <Typography><h2>No Product in Your Wishlist</h2></Typography>
    <Link to="/newcollection">Start Shopping</Link>
  </div>
) : (
  <Fragment>
  <>
   

    {wishlistItems &&
          wishlistItems.map((item) => (
            <div className="cartContainer" key={item.product}>
              <WishlistItemCart item={item} deleteWishlistItems={wishlistCartItems} />

         
            </div>
          ))}

   
  </>








</Fragment>
)}
</Fragment>
   <ScrollToTop/>
   </>


  )
}

export default WishList