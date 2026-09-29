import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/auth/Login';
import { Signup } from '../pages/auth/Signup';
import { Profile } from '../pages/user/Profile';
import { OrderHistory } from '../pages/user/OrderHistory';
import { Addresses } from '../pages/user/Addresses';
import CheckoutPage from '../pages/checkout/CheckoutPage';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* User Account */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/orders" element={<OrderHistory />} />
      <Route path="/addresses" element={<Addresses />} />

      {/* Checkout */}
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
};

export default AppRoutes;