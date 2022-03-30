import React from "react";
import { Route, Switch, Redirect } from 'react-router'
// import { AuthRoute } from '../util/route_util';

import HomepageContainer from "./homepage/homepage_container";
// import SignupFormContainer from './session_form/signup_form_container';
// import LoginFormContainer from './session_form/login_form_container';
import Modal from './modal/modal';
import ProductsIndexContainer from "./product/product_index/product_index_container";
import ProductShowContainer from "./product/product_show/product_show_container"
import GreetingContainer from "./homepage/greeting/greeting_container";

const App = () => (
  <div>
    <Modal />
    <header>
      <Route path="/" component={HomepageContainer} />
    </header>
    <Switch>
      <Route exact path="/" component={GreetingContainer} />
      <Route exact path="/products/:id" component={ProductShowContainer} />
      <Route excat path="/products/" component={ProductsIndexContainer} />
      {/* <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} /> */}
      {/* <Redirect to='/' /> */}
    </Switch>
  </div>
);

export default App;