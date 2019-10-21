import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartPage from '../../pages/cart/cart.page';
import HomePage from '../../pages/home/home.page';
import EditProfile from '../../pages/profile/EditProfile';
import ViewProfile from '../../pages/profile/ViewProfile';
import LogInPage from '../../pages/auth/logIn/logIn.page';
import SignUpPage from '../../pages/auth/signUp/signUp.page';
import NavBar from '../navBar/navBar';
import ProtectedRoute from './protectedRoutes/protectedRoute';
import CheckoutPage from '../../pages/checkout/checkout.page';
import ProductsPage from '../../pages/products/products.page';
import ProductPage from '../../pages/product/product.page';
import SearchPage from '../../pages/search/search.page';
import CreateProduct from '../../pages/myProduct/myProduct';


const Routes = () => (
  <Router>
    <NavBar />
    <div className='appContainer'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/sign-up' component={SignUpPage} />
        <Route exact path='/log-in' component={LogInPage} />
        <Route exact path='/product' component={ProductPage} />
        <ProtectedRoute exact path='/profile' component={ViewProfile} />
        <ProtectedRoute exact path='/edit-profile' component={EditProfile} />
        <Route exact path='/cart' component={CartPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/products' component={ProductsPage} />
        <ProtectedRoute exact path='/new-product' component={CreateProduct} />
        <Route exact path='/search' component={SearchPage} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
