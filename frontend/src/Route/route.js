import ContactUs from "../Pages/Main/ContactUs/ContactUs";
import FAQ from "../Pages/Main/FAQ/FAQ";
import News from "../Pages/Main/News/News";
import MainRoot from "../Pages/Main/MainRoot";
import NewCollection from "../Pages/Main/NewCollection/NewCollection";
import Home from "./../Pages/Main/Home/Home";
import WishList from "./../Pages/Main/WishList/WishList";
import AdminRoot from "./../Pages/Admin/AdminRoot";
import PagesFiles from "./../Pages/Main/PagesFiles/PagesFiles";
import AboutUs from "./../Pages/Main/AboutUs/AboutUs";
import Services from "./../Pages/Main/Services/Services";
import ProductDetails from "../Companents/Product/ProductDetails";
import Products from "./../Companents/Product/Products";
import Search from "./../Companents/Product/Search";
import LoginSignUp from "./../Companents/User/LoginSignUp";
import Profile from "../Companents/User/Profile";
import UpdateProfile from "./../Companents/User/UpdateProfile";
import Cart from "../Companents/Cart/Cart";
import Shipping from "./../Companents/Cart/Shipping";
import Dashboard from "../../src/Companents/Admin/Dashboard";
import ProductList from "./../Companents/Admin/ProductList";

import NotFounds from "../Pages/Main/NotFounds/NotFounds";
import NewProduct from "./../Companents/Admin/NewProduct";
import OrderSuccess from "./../Companents/Cart/OrderSuccess";
import ConfirmOrder from "./../Companents/Cart/ConfirmOrder";
// import OrderDetails from "../Companents/Cart/OrderDetails";
import UpdateProduct from "./../Companents/Admin/UpdateProduct";
import UsersList from "./../Companents/Admin/UserList";
import ForgotPassword from "../Companents/User/ForgotPassword";
import MyOrders from "../Companents/Order/MyOrders";
import Stripe from "../Pages/Main/Stripe/Stripe.jsx";
import OrderDetails from "../Companents/Order/OrderDetails";

export const ROUTES = [
  {
    path: "*",
    element: <NotFounds />,
  },
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "pages",
        element: <PagesFiles />,
      },
      {
        path: "pages/aboutus",
        element: <AboutUs />,
      },

      {
        path: "pages/services",
        element: <Services />,
      },
      {
        path: "pages/faq",
        element: <FAQ />,
      },

      {
        path: "pages/news",
        element: <News />,
      },
      {
        path: "pages/contactus",
        element: <ContactUs />,
      },
      {
        path: "*",
        element: <NotFounds />,
      },

      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "newcollection",
        element: <NewCollection />,
      },
      {
        path: "login",
        element: <LoginSignUp />,
      },

      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "product/:category",
        element: <Products />,
      },
      {
        path: "products/:keyword",
        element: <Products />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "account",
        element: <Profile />,
      },

      {
        path: "login",
        element: <LoginSignUp />,
      },
      {
        path: "shipping",
        element: <Shipping />,
      },
      {
        path: "cart",
        element: <Cart />,
      },

      { path: "me/update", element: <UpdateProfile /> },
      ,
      {
        path: "success",
        element: <OrderSuccess />,
      },
      {
        path: "order/confirm",
        element: <ConfirmOrder />,
      },
      {
        path: "orders",
        element: <MyOrders />,
      },
      {
        path: "/order/:id",
        element: <OrderDetails />,
      },
      { path: "order/:id", element: <OrderDetails/> },

      {
        path: "password/forgot",
        element: <ForgotPassword />,
      },
{
  path:"process/payment",
  element:<Stripe/>
}
    ],
  },

  {
    path: "/admin",
    element: <AdminRoot />,
    isAdmin: true,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "users",
        component: <UsersList />,
      },
      {
        path: "products",
        isAdmin: "true",

        element: <ProductList />,
      },
      {
        path: "product",
        isAdmin: "true",
        element: <NewProduct />,
      },
      {
        path: "product/:id",
        isAdmin: "true",
        element: <UpdateProduct />,
      },
    ],
  },
];
