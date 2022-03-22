import React from "react";
import { Route } from 'react-router'
import { AuthRoute } from '../util/route_util';

import HomepageContainer from "./homepage/homepage_container";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

const App = () => (
  <div>
    <header>
      <h1>Bold</h1>
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route path='/' component={HomepageContainer} />  
  </div>
);

export default App;