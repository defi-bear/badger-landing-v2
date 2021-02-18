import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import Home from '../screens/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={'/'} component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}