import React, { useState } from 'react';

export const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6 sticky top-[100px] h-fit">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-xs font-semibold rounded-full">
            Local
          </span>
          <span className="px-2 py-1 bg-surface-container text-on-surface-variant text-xs font-semibold rounded-full flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">location_on</span>
            {product.distance} away
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold font-headline text-on-surface mb-1">
          {product.title}
        </h1>
        <p className="text-2xl font-semibold text-primary">${product.price.toFixed(2)}</p>
      </div>

      {/* Artisan Badge */}
      <a href="#" className="flex items-center justify-between p-3 border border-outline-variant rounded-lg hover:bg-surface-container-lowest hover:shadow-sm transition-all group">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full bg-surface-container overflow-hidden">
            <img src={product.artisan.avatar} alt="Artisan Profile" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-surface flex items-center justify-center">
              <span className="material-symbols-outlined text-[8px] text-white font-bold">check</span>
            </div>
          </div>
          <div>
            <p className="font-semibold text-sm text-on-surface group-hover:text-primary transition-colors">
              By {product.artisan.name}
            </p>
            <p className="text-xs text-on-surface-variant">Verified Artisan</p>
          </div>
        </div>
        <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">chat</span>
      </a>

      {/* Stock & Fulfillment */}
      <div className="flex flex-col gap-1 p-3 bg-surface-container-low rounded-lg">
        <div className="flex items-center gap-2 text-secondary font-semibold text-sm">
          <span className="material-symbols-outlined text-lg">check_circle</span>
          <span>In Stock</span>
        </div>
        <div className="flex items-center gap-2 text-on-surface-variant text-sm">
          <span className="material-symbols-outlined text-lg">storefront</span>
          <span>Ready for Pickup in 2 hours</span>
        </div>
      </div>

      <div className="border-t border-outline-variant pt-4 flex flex-col gap-3">
        {/* Quantity Controls */}
        <div className="flex items-center gap-3">
          <span className="font-semibold text-sm text-on-surface">Quantity</span>
          <div className="flex items-center border border-outline-variant rounded-lg bg-surface-container-lowest">
            <button onClick={decrement} className="p-2 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-base">remove</span>
            </button>
            <span className="w-8 text-center text-sm font-medium">{quantity}</span>
            <button onClick={increment} className="p-2 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-base">add</span>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 mt-2">
          <button className="w-full py-3 bg-primary text-on-primary font-semibold text-sm rounded-lg hover:bg-surface-tint transition-colors flex justify-center items-center gap-2">
            <span className="material-symbols-outlined text-lg">shopping_cart</span>
            Add to Cart
          </button>
          <button className="w-full py-3 border border-secondary text-secondary font-semibold text-sm rounded-lg hover:bg-secondary-container/20 transition-colors">
            Buy Now
          </button>
        </div>
      </div>

      {/* Save & Share */}
      <div className="flex justify-center gap-6 border-t border-outline-variant pt-3">
        <button className="flex items-center gap-1 text-on-surface-variant hover:text-primary text-xs font-semibold transition-colors">
          <span className="material-symbols-outlined text-[18px]">favorite_border</span> Save
        </button>
        <button className="flex items-center gap-1 text-on-surface-variant hover:text-primary text-xs font-semibold transition-colors">
          <span className="material-symbols-outlined text-[18px]">share</span> Share
        </button>
      </div>
    </div>
  );
};