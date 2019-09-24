import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AllProducts from "../Products/AllProducts";
import Checkout from "../Cart/Checkout";
import Cart from "../Cart/Cart";
import Home from "../Home/Home";
import EditProfile from "./protectedRoutes/Profile/EditProfile";
import ViewProfile from "./protectedRoutes/Profile/ViewProfile";
import LogIn from "../Auth/LogIn";
import SingleProducts from "../Products/SingleProducts";
import SignUp from "../Auth/SignUp";
import NavBar from "../NavBar/NavBar";

class Routes extends Component {
  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/SignUp' component={SignUp} />
          <Route exact path='/LogIn' component={LogIn} />
          <Route exact path='/ViewProfile' component={ViewProfile} />
          <Route exact path='/SingleProducts' component={SingleProducts} />
          <Route exact path='/EditProfile' component={EditProfile} />
          <Route exact path='/Cart' component={Cart} />
          <Route exact path='/Checkout' component={Checkout} />
          <Route exact path='/AllProducts' component={AllProducts} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;