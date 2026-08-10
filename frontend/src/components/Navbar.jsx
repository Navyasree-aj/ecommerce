import React from 'react';

export const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant">
      <div className="flex justify-between items-center px-4 md:px-10 py-2 max-w-[1280px] mx-auto">
        <div className="flex items-center gap-1 text-primary transition-transform scale-95 active:opacity-80 cursor-pointer">
          <span 
            className="material-symbols-outlined font-bold text-2xl" 
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            location_on
          </span>
          <span className="font-headline font-bold text-3xl">CraftLocal</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a className="text-on-surface-variant font-semibold hover:text-primary-container transition-colors" href="#">Shop</a>
          <a className="text-primary font-bold hover:text-primary-container transition-colors" href="#">Explore</a>
          <a className="text-on-surface-variant font-semibold hover:text-primary-container transition-colors" href="#">Wishlist</a>
          <a className="text-on-surface-variant font-semibold hover:text-primary-container transition-colors" href="#">Cart</a>
        </nav>

        {/* Mobile Search Button */}
        <div className="md:hidden flex items-center gap-3">
          <button className="p-2 text-on-surface-variant hover:text-primary-container transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>
    </header>
  );
};