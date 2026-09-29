import React from 'react';

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center bg-surface py-2 md:hidden border-t border-outline-variant shadow-sm z-50">
      <a href="#" className="flex flex-col items-center text-on-surface-variant hover:bg-secondary-container/20 p-2 rounded-lg">
        <span className="material-symbols-outlined text-xl">storefront</span>
        <span className="text-[11px] font-medium mt-1">Shop</span>
      </a>
      <a href="#" className="flex flex-col items-center text-primary font-bold hover:bg-secondary-container/20 p-2 rounded-lg">
        <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>explore</span>
        <span className="text-[11px] mt-1">Explore</span>
      </a>
      <a href="#" className="flex flex-col items-center text-on-surface-variant hover:bg-secondary-container/20 p-2 rounded-lg">
        <span className="material-symbols-outlined text-xl">favorite</span>
        <span className="text-[11px] font-medium mt-1">Wishlist</span>
      </a>
      <a href="#" className="flex flex-col items-center text-on-surface-variant hover:bg-secondary-container/20 p-2 rounded-lg">
        <span className="material-symbols-outlined text-xl">shopping_bag</span>
        <span className="text-[11px] font-medium mt-1">Cart</span>
      </a>
    </nav>
  );
};