import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartPage from '../cart/cart.page';
import HomePage from '../home/home.page';
import EditProfile from '../profile/EditProfile';
import ViewProfile from '../profile/ViewProfile';
import LogInPage from '../auth/logIn/logIn.page';
import SignUpPage from '../auth/signUp/signUp.page';
import NavBar from '../../components/navBar/navBar';
import ProtectedRoute from './protectedRoutes/protectedRoute';
import CheckoutPage from '../checkout/checkout.page';
import ProductsPage from '../products/products.page';
import ProductPage from '../product/product.page';
import SearchPage from '../search/search.page';

const Routes = () => (
  <Router>
    <NavBar />
    <div className='appContainer'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/sign-up' component={SignUpPage} />
        <Route exact path='/log-in' component={LogInPage} />
        <Route exact path='/single-products' component={ProductsPage} />
        <ProtectedRoute exact path='/profile' component={ViewProfile} />
        <ProtectedRoute exact path='/edit-profile' component={EditProfile} />
        <Route exact path='/cart' component={CartPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/product' component={ProductPage} />
        <Route exact path='/search' component={SearchPage} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
