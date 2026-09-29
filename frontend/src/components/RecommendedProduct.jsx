import React from 'react';

export const RecommendedProducts = ({ products }) => {
  return (
    <div className="lg:col-span-8">
      <div className="flex justify-between items-end mb-4">
        <h2 className="font-headline font-bold text-xl text-on-surface">More from Nearby Artisans</h2>
        <div className="flex gap-2">
          <button className="p-1 border border-outline-variant rounded-full text-on-surface-variant hover:text-primary hover:border-primary transition-colors">
            <span className="material-symbols-outlined text-base">chevron_left</span>
          </button>
          <button className="p-1 border border-outline-variant rounded-full text-on-surface-variant hover:text-primary hover:border-primary transition-colors">
            <span className="material-symbols-outlined text-base">chevron_right</span>
          </button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {products.map((item) => (
          <div key={item.id} className="min-w-[200px] md:min-w-[240px] flex-shrink-0 group cursor-pointer">
            <div className="aspect-square bg-surface-container-lowest border border-outline-variant rounded-lg mb-2 overflow-hidden relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <button className="absolute top-2 right-2 p-1 bg-surface-container-lowest/80 backdrop-blur rounded-full text-on-surface-variant hover:text-primary">
                <span className="material-symbols-outlined text-[18px]">favorite_border</span>
              </button>
            </div>
            <p className="font-semibold text-sm text-on-surface truncate group-hover:text-primary transition-colors">
              {item.title}
            </p>
            <p className="text-xs text-on-surface-variant truncate mb-1">{item.seller}</p>
            <p className="font-semibold text-sm text-primary">${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};