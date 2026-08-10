import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <AppRoutes />
      </main>

      <Footer />
    </BrowserRouter>
  );
}