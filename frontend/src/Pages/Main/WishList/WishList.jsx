import HeartBrokenOutlinedIcon from "@mui/icons-material/HeartBrokenOutlined";

import "./Wishlist.scss";
import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import WishlistTitle from "./WishlistTitle";
import { removeItemsFromWishlist } from "./../../../actions/productAction";
import WishlistItemCart from "./WishlistItemCart";
const WishList = () => {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromWishlist(id));
  };

  return (
    <Fragment>
      <WishlistTitle />
      {wishlistItems.length === 0 ? (
        <div className="emptyCart">
          <HeartBrokenOutlinedIcon />

          <Typography>
            <h2>No Product in Your Wishlist</h2>
          </Typography>
          <Link to="/newcollection">Start Shopping</Link>
        </div>
      ) : (
        <Fragment>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Price</p>
            </div>

            {wishlistItems &&
              wishlistItems.map((item) => (
                <div className="cartContainer" key={item.product}>
                  <WishlistItemCart
                    item={item}
                    deleteCartItems={deleteCartItems}
                  />

                  <p className="cartSubtotal">{`Rs.${item.price}`}</p>
                </div>
              ))}

            <div className="cartGrossProfit">
              <div></div>

              <div></div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default WishList;
