import React from "react";
import { Route, Switch, Redirect } from 'react-router'
import { AuthRoute } from '../util/route_util';

import HomepageContainer from "./homepage/homepage_container";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import ProductsIndexContainer from "./product/product_index/product_index_container";
import ProductsContainer from "./product/product_show/product_show_container"

const App = () => (
  <div>
    <header>
      <Route path="/" component={HomepageContainer} />
    </header>
    <Switch>
      <Route path="/products/:id" component={ProductsContainer} />
      <Route excat path="/products/" component={ProductsIndexContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;