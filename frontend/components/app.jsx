import React from "react";
import { Route } from 'react-router'
import { AuthRoute } from '../util/route_util';

import HomepageContainer from "./homepage/homepage_container";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

const App = () => (
  <div>
    <header>
      <Route path='/' component={HomepageContainer} />  
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;