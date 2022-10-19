import { Route, Routes as Switch } from 'react-router-dom';
import React from 'react';

import Home from '../pages/Home';
import Product from '../pages/Product';
import ScrollToTop from '../utils/ScrollToTop';
import Baskets from '../pages/Baskets';

function Routes() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/baskets" element={<Baskets />} />
      </Switch>
    </>
  );
}

export default Routes;
