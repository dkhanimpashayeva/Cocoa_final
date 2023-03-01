


import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

import "./WishlistCart.scss";

const WishlistItemCart = ({ item, deleteWishlistItems }) => {
  return (
    <>
   <div className="main-container">
   <div className="wishlist-wrapper">
     <div className="container">
      <table class="table">
          <thead>
            <tr>
              <th scope="col">IMAGE</th>
              <th scope="col">PRODUCT</th>
              <th scope="col">PRICE</th>
              <th scope="col">PURCHASE</th>
              <th scope="col">REMOVE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={item.image} alt="ssa" />
              </td>
              <td>
                <Link to={`/product/${item.product}`} className="item-name">{item.name}</Link>
              </td>
              <td>
                <span>{`Price: Rs.${item.price}`}</span>
              </td>
              <td>
                <Link to="/newcollection" className="item-select">Select Options</Link>
              </td>

              <td>
                <DeleteIcon onClick={() => deleteWishlistItems(item.product)} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
   </div>
    </>
  );
};

export default WishlistItemCart;

