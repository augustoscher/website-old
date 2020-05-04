import React from 'react'
import { Switch, Route, Redirect } from 'react-router';

import Home from '../template/Home/home'
import About from '../template/About/about'
import Contact from '../template/Contact/contact'
import Analytics from '../template/Analytics/analytics'

export default props => (
  <Switch>
    <Route path='/home' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/analytics' component={Analytics}/>
    <Redirect from='*' to='/home'/>
  </Switch>
);
