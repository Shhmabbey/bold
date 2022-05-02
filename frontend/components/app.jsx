import React from "react";
import { Route, Switch, Redirect } from 'react-router'
import { ProtectedRoute } from '../util/route_util';

import HomepageContainer from "./homepage/homepage_container";
import {Cart} from "./cart/cart";
import Modal from './modal/modal';
import ProductsIndexContainer from "./product/product_index/product_index_container";
import ProductShowContainer from "./product/product_show/product_show_container"
import GreetingContainer from "./homepage/greeting/greeting_container";
import UhOh from "./homepage/under_development";
import SearchResults from "./search/search_results";

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
      <ProtectedRoute exact path="/cart/" component={Cart} />
      <Route exact path="/search/:id" component={SearchResults} />
      <Route exact path="/development/" component={UhOh} />
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;