import React, { useCallback, useEffect } from "react";
import Catagory from "../../../Companents/Main/Catagory/Catagory";
import "./NewCollection.scss";
import MetaData from "../../../Companents/MetaData";
import { getProduct } from "../../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../Companents/Loader/Loader";
import { useAlert } from "react-alert";
import { clearErrors } from "./../../../actions/productAction";
import ProductCard from "./../../../Companents/Product/ProductCard";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import ViewListIcon from "@mui/icons-material/ViewList";
import "../../../Companents/Main/TabMenu/NewCollectionTab.scss";
import ScrollToTop from "../../../Companents/ScrollToTop/ScrollToTop";
import PureChocalate from "../../../Companents/ServiceCompanents/PureChocalate/PureChocalate";




const NewCollection = () => {


  const alert = useAlert();
  const dispatch = useDispatch();
  const { products,
    loading,
    error,
  } = useSelector(
    (state) => state.products
  );





  useEffect(() => {

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct( ));
  }, [dispatch, error, alert]);

  return (
    <>
      <div className="container-newcollection">
        <div className="row ">
          <div className="col-lg-3 col-12">
<div className="row">
<div className="new-wrap-right">
<PureChocalate/>
<Catagory />



</div>

</div>
          </div>
          <div className="col-lg-9 col-12">

<Tabs >
<div className="new-tabs">
<TabList >
<div className="tabs-wrap">
<div className="tabs-product">
<div className="d-flex justify-content-between">
<Tab className="tab">
      <div className="coltab">
      <ViewCompactIcon />

      </div>
    </Tab>
    <Tab className="tab">
      <div className="coltab">
      <ViewListIcon  />

      </div>
    </Tab>
</div>

  </div>

</div>



   
  
  
  </TabList>
  
  <TabPanel>
    <div className="tab-panel-container">
    {loading ? (
          <Loader />
        ) : (
          <div id="products" className="row ">
            {products&&products.map((product) => (
                <div className=" item col-lg-4 col-6 col-md-6" key={product._id}>
                  <ProductCard product={product} />
                </div>
              ))}
          </div>
        )}
    </div>
  </TabPanel>

  <TabPanel>
    <div className="coltab-panel-container">
    {loading ? (
          <Loader />
        ) : (
          <div id="products" className="row ">
            {products &&
              products.map((product) => (
                <div className=" item col-lg-3 col-6 col-md-6">
                  <ProductCard product={product} />
                </div>
              ))}
          </div>
        )}
    </div>
  </TabPanel>
</div>
</Tabs>
</div>
        </div>
     
      </div>
      <ScrollToTop/>
    </>
  );
};

export default NewCollection;
