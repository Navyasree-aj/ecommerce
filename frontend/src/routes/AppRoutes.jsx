import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import CategoriesPage from '../pages/CategoriesPage';
import WishlistPage from '../pages/WishlistPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/checkout/CheckoutPage';
import ProductDetailPage from '../pages/ProductDetails/ProductDetailPage';
import Login from '../pages/auth/Login';
import { Signup } from '../pages/auth/Signup';
import { Profile } from '../pages/user/Profile';
import { OrderHistory } from '../pages/user/OrderHistory';
import { Addresses } from '../pages/user/Addresses';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/orders" element={<OrderHistory />} />
      <Route path="/addresses" element={<Addresses />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;