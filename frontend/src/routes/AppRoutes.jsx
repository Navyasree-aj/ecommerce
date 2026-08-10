import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import CheckoutPage from '../pages/checkout/CheckoutPage';
import Login from '../pages/auth/Login';
import { Signup } from '../pages/auth/Signup';
import { Profile } from '../pages/user/Profile';
import { OrderHistory } from '../pages/user/OrderHistory';
import { Addresses } from '../pages/user/Addresses';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/orders" element={<OrderHistory />} />
      <Route path="/addresses" element={<Addresses />} />
    </Routes>
  );
};

export default AppRoutes;