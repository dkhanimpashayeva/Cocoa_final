import React, { Fragment, useEffect, useState } from "react";
import "./ProductDetails.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductDetails,
  clearErrors,
  addItemsToWishlist,
  newReview,
} from "../../actions/productAction";
import { useAlert } from "react-alert";
import Loader from "./../Loader/Loader";
import { useParams } from "react-router-dom";
import MetaData from "./../MetaData";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard";
import { addItemsToCart } from "./../../actions/cartAction";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../Main/TabMenu/TabMenu.scss";
import Catagory from "../Main/Catagory/Catagory";
import WishList from "./../../Pages/Main/WishList/WishList";
import BestSellers from "../Main/HomeCompanents/BestSellers/BestSellers";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import ProductTile from "./ProductTile";
const ProductDetails = () => {

  const dispatch = useDispatch();
  const alert = useAlert();
  const { id } = useParams();
// const {productId}=useParams()
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");

  const handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    this.setState({ backgroundPosition: `${x}% ${y}%` })

  }

 

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );
  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );
  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  
  const increaseQuantity = () => {
    // if (product.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };
  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    alert.success("Item Added To Cart");
  };
  // addToWishlistHandler

  const addToWishlistHandler = () => {
    dispatch(addItemsToWishlist(id, quantity));
    alert.success("Item Added To Wishlist");
  };
//review
const reviewSubmitHandler = () => {
  const myForm = new FormData();

  myForm.set("rating", rating);
  myForm.set("comment", comment);
  myForm.set("productId", id);

  dispatch(newReview(myForm));

  setOpen(false);
};

const submitReviewToggle = () => {
  open ? setOpen(false) : setOpen(true);
};







  useEffect(() => {
    dispatch(getProductDetails(id));
     
    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
      
    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }
 
    }
  }, [dispatch, alert, error, id]);


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Fragment>

            <MetaData title={product.name} />
            <ProductTile/>
            <div className="container">
              <div className="row ">
                <div className="col-lg-3 col-12 col-md-12">
                  <Catagory />
                </div>
                <div className="col-lg-9 col-12">
                  <div className="product-details">
                    <div className="row justify-content-between">
                      <div className="col-lg-6 col-md-6 col-12">
                        {product.images &&
                          product.images.map((image) => (
                            <div key={image.public_id}>
                              <figure
                                onMouseMove={handleMouseMove}
                                style={{"backgroundImage": `url(${image.url})`,}}
                              >
                                <img
                                  className="d-block w-100"
                                  src={image.url}
                                  alt={product.title}
                                />
                              </figure>
                            </div>
                          ))}
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="product-detail-name">
                          <h2>{product.name}</h2>
                        </div>

                        <div className="details-block-1">
                          <p>Product#{product._id}</p>
                        </div>
                        <ul className="details-block-2 d-flex align-items-center justify-content-between list-unstyled">
                          <li>Reviews:</li>
                          <li>
                            {" "}
                            <ReactStars {...options} />
                            <span>({product.numOfReviews}Reviews)</span>
                          </li>
                        </ul>

                        <div className="details-block-3 ">
                          <ul className="d-flex align-items-center justify-content-between list-unstyled">
                            <li>Price:</li>
                            <li>
                              <h3>{`Rs.${product.price}`}</h3>
                            </li>
                          </ul>
                          <ul className="d-flex align-items-center justify-content-between list-unstyled">
                            <li> Status :</li>
                            <li>
                              {" "}
                              <b
                                className={
                                  product.Stock < 1 ? "redColor" : "greenColor"
                                }
                              >
                                {product.Stock < 1 ? "OutOfStock" : "InStock"}
                              </b>
                            </li>
                          </ul>
                          <ul className="d-flex align-items-center justify-content-between list-unstyled">
                            <li>Quantity:</li>
                            <li className="details-block-3-1-1">
                              <button onClick={decreaseQuantity}>-</button>
                              <input readOnly type="number" value={quantity} />
                              <button onClick={increaseQuantity}>+</button>
                            </li>
                          </ul>
                     
                        <ul  className="d-flex align-items-center justify-content-between list-unstyled" >
                        <button
                              onClick={addToCartHandler}
                              className="detail-button"
                            >
                              Add to Card
                            </button>
                            <button
                              onClick={addToWishlistHandler}
                              className="detail-button"
                            >
                              Add to WishList
                            </button>
                        </ul>
                         

                          <button className="submit-review detail-button" onClick={submitReviewToggle}>
                            Submit Review
                          </button>


                          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <Tabs className="Tabs">
                    <TabList>
                      <Tab>Product Description</Tab>
                      <Tab>Additional Information</Tab>
                      <Tab>Reviews</Tab>
                    </TabList>
                    <TabPanel>
                      <div className="tab-panel-container">
                        <p>{product.description}</p>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="tab-panel-container">
                        <h4>Returns Policy</h4>
                        <p>
                          You may return most new, unopened items within 30 days
                          of delivery for a full refund. We'll also pay the
                          return shipping costs if the return is a result of our
                          error (you received an incorrect or defective item,
                          etc.).
                        </p>
                        <p>
                          You should expect to receive your refund within four
                          weeks of giving your package to the return shipper,
                          however, in many cases you will receive a refund more
                          quickly. This time period includes the transit time
                          for us to receive your return from the shipper (5 to
                          10 business days), the time it takes us to process
                          your return once we receive it (3 to 5 business days),
                          and the time it takes your bank to process our refund
                          request (5 to 10 business days).
                          <h4>Shipping</h4>
                          <p>
                            We can ship to virtually any address in the world.
                            Note that there are restrictions on some products,
                            and some products cannot be shipped to international
                            destinations.
                          </p>
                          <p>
                            When you place an order, we will estimate shipping
                            and delivery dates for you based on the availability
                            of your items and the shipping options you choose.
                            Depending on the shipping provider you choose,
                            shipping date estimates may appear on the shipping
                            quotes page.
                          </p>
                          <p>
                            Please also note that the shipping rates for many
                            items we sell are weight-based. The weight of any
                            such item can be found on its detail page. To
                            reflect the policies of the shipping companies we
                            use, all weights will be rounded up to the next full
                            pound.
                          </p>
                        </p>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="tab-panel-container">



                        {product.reviews && product.reviews[0] ? (
                          <div className="reviews">
                            {product.reviews &&
                              product.reviews.map((review) => (
                                <ReviewCard review={review} />
                              ))}
                          </div>
                        ) : (
                          <p className="noReviews">No Reviews Yet </p>
                        )}



                      </div>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
          </Fragment>

          <BestSellers />
        </>
      )}
    </>
  );
};

export default ProductDetails;
