import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.scss";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./Route/route";
import store from "./store";
import { loadUser } from "./actions/userActions";
import { useSelector } from "react-redux";
import UserOptions from "./Companents/Main/Navbar/UserOptions";
import { useEffect } from "react";
import ProtectedRoute from "./Route/ProtectedRoute";

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  const router = createBrowserRouter(ROUTES);

  return (
    <>
      <div className="App">
        <RouterProvider router={router}>
          {isAuthenticated && <UserOptions user={user} />}
          <ProtectedRoute />
        </RouterProvider>
      </div>
    </>
  );
};

export default App;
