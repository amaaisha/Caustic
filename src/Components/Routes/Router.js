import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AllProducts from "../Products/AllProducts";
import Checkout from "../Cart/Checkout";
import Cart from "../Cart/Cart";
import Home from "../Home/Home";
import EditProfile from "../Profile/EditProfile";
import ViewProfile from "../Profile/ViewProfile";
import LogIn from "../Auth/LogIn";
import SingleProducts from "../Products/SingleProducts";
import SignUp from "../Auth/SignUp";
import NavBar from "../NavBar/NavBar";
import {ProtectedRoute} from "./protectedRoutes/protectedRoute";

class Routes extends Component {
  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/logIn' component={LogIn} />
          <ProtectedRoute exact path='/view-profile' component={ViewProfile} />
          <Route exact path='/single-products' component={SingleProducts} />
          <ProtectedRoute exact path='/edit-profile' component={EditProfile} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/all-products' component={AllProducts} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;