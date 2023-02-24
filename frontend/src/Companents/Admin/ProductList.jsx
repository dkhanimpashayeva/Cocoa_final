
import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAdminProduct,
  deleteProduct,
} from "../../actions/productAction";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { DELETE_PRODUCT_RESET } from "../../constants/productConstants";
import MetaData from "../layout/Meta";
import './ProductList.scss'
import SideBarAdmin from "./SideBarAdmin";
import { useNavigate } from 'react-router';
const ProductList = () => {
  const dispatch = useDispatch();

  const alert = useAlert();
const navigate=useNavigate()
  const { error, products } = useSelector((state) => state.products);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.product
  );

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Product Deleted Successfully");
      navigate("/admin/dashboard");
      dispatch({ type: DELETE_PRODUCT_RESET });
    }

    dispatch(getAdminProduct());
  }, [dispatch, alert, error, deleteError, isDeleted]);

  const columns = [
    { field: "id", headerName: "Product ID", Width:"100%", flex: 0.12 },
    {
      field: "name",
      headerName: "Name",
      flex: 0.2,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      flex: 0.3,
    },

    {
      field: "price",
      headerName: "Price",
      type: "number",
      flex: 0.3,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
      <>
            <Link to={`/admin/product/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteProductHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
      </>
        );
      },
    },
  ];

  const rows = [];

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        stock: item.Stock,
        price: item.price,
        name: item.name,
      });
    });

  return (
    <>
      
      <MetaData title={`ALL PRODUCTS - Admin`} />

  

   

<div className="container">
<div className="row align-items-center ">
  <div className="col-lg-3 col-12 col-md-4">
    <SideBarAdmin/>
  </div>
 
  <div className="col-lg-9 col-12 col-md-8">
<div className="container">
<div className="productListContainer">
          <h1 id="productListHeading">ALL PRODUCTS</h1>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
  </div>
</div>
</div>
        </div>
</div>
     
    </>

  );
};

export default ProductList;