

import React, { Fragment, useEffect, useState } from "react";
import "./Products.scss";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router";
import MetaData from "../MetaData";
import ProductCard from './ProductCard';
import Loader from "../Loader/Loader";
import VideoInfoBottom from "../Main/HomeCompanents/VideoInfo/VideoInfoBottom";

const categories = [
  
  "Best Sellers",
  "Dark Chocolates",
  "Elite Chocolates",
  "Divine Chocolates",
  "Nutty Chocolates",
];

const Products = () => {
  const dispatch = useDispatch();
const { keyword } = useParams();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");

  const [ratings, setRatings] = useState(0);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);


  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />

      <div className="products-wrapper">
      <h2 className="productsHeading">Products</h2>

      <div className="row">
      <div className="col-lg-3 col-12 col-md-12 ">
      <div className="row">
        <div className="col-lg-12 col-md-4 col-12">
        <div className="filterBox">
            <Typography className="products-titles">Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={600}
              className="slider-products"
            />


            <Typography className="products-titles">Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li 
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>

              ))}
            </ul>

            <fieldset>
              <Typography component="legend" className="products-titles">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
                className="slider-products"

              />
            </fieldset>
          </div>
        </div>
   
<div className="col-12 col-md-8 col-lg-12">
<VideoInfoBottom/>

  </div>     
   </div>
       </div>
     <div className="col-lg-9 col-12 col-md-12">
     <div className="products">
       <div className="row">
       {products &&
              products.map((product) => (
                <div className="col-lg-4 col-6 col-6" key={product._id}>
                                  <ProductCard key={product._id} product={product} />

                </div>
              ))}
       </div>
          </div>
     </div>

   
        </div>
      </div>




          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;



