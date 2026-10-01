import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import BottomNav from "./layouts/BottomNav";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <BottomNav />
      <Footer />
    </BrowserRouter>
  );
}