import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect, NavLink} from "react-router-dom";
import AllProducts from "./Routes/AllProducts";
import Checkout from "./Routes/Checkout";
import Cart from "./Routes/Cart";
import Home from "./Routes/Home";
import EditProfile from "./Routes/protectedRoutes/EditProfile";
import ViewProfile from "./Routes/protectedRoutes/ViewProfile";
import LogIn from "./Routes/LogIn";
import SingleProducts from "./Routes/SingleProducts";
import SignUp from "./Routes/SignUp";

class Routes extends Component {
  render() {
    return (
      <Router>
        <NavLink to={'/'}>Home</NavLink>

        <Switch>
          {/*<Route path="*" component={() => "404 NOT FOUND"} />*/}
          <Route exact path='/' component={Home} />
          <Route exact path='/Home' component={Home} />
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