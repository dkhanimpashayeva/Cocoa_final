import React from 'react'
import { getAdminProduct } from '../../actions/productAction';
import { getAllUsers } from '../../actions/userActions';
import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MetaData from '../MetaData';
import { useEffect } from 'react';
import './Dashboard.scss'
import SideBarAdmin from './SideBarAdmin';
const Dashboard = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.allUsers);
  let outOfStock = 0;

  useEffect(() => {
    dispatch(getAdminProduct());
    // dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
   orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  return (
    <div className='body-dashboard'>
      <MetaData title="Dashboard - Admin Panel" />
<div className="container">
<div className="row">
  <div className="col-lg-3">
  <SideBarAdmin/>

  </div>
    <div className="col-lg-8">
    <div className="dashboardContainer">
        <h1>Dashboard</h1>

        {/* <div className="dashboardSummary">
       
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>{orders && orders.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>{users && users.length}</p>
            </Link>
          </div>
        </div> */}

   
      </div>
    </div>
</div>
</div>
    </div>
  )
}

export default Dashboard