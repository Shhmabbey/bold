import React from "react";
import { Route, Switch, Redirect } from 'react-router'

import HomepageContainer from "./homepage/homepage_container";
import Modal from './modal/modal';
import ProductsIndexContainer from "./product/product_index/product_index_container";
import ProductShowContainer from "./product/product_show/product_show_container"
import GreetingContainer from "./homepage/greeting/greeting_container";
import uhOh from "./homepage/under_development";

const App = () => (
  <div>
    <Modal />
    <header>
      <Route path="/" component={HomepageContainer} />
    </header>
    <Switch>
      <Route exact path="/" component={GreetingContainer} />
      <Route exact path="/products/:id" component={ProductShowContainer} />
      <Route exact path="/categories/:id" component={ProductsIndexContainer} />
      <Route exact path="/development/" component={uhOh} />
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;