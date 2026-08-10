import React from 'react';

const OrderSummary = ({ items, subtotal, taxes, deliveryFee, total, onConfirmOrder, isSubmitting }) => {
  return (
    <div className="brand-card shadow-[0_4px_20px_rgba(34,34,34,0.05)]">
      <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Order Summary</h2>
      
      {/* Items List */}
      <div className="space-y-md mb-lg border-b border-outline-variant pb-md">
        {items.map((item) => (
          <div key={item.id} className="flex gap-sm items-center">
            <div className="w-16 h-16 rounded bg-surface-variant border border-outline-variant overflow-hidden shrink-0">
              <img className="w-full h-full object-cover" src={item.image} alt={item.title} />
            </div>
            <div className="flex-grow">
              <h4 className="font-label-md text-label-md text-on-surface line-clamp-1">{item.title}</h4>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">By {item.artisan}</p>
            </div>
            <div className="text-right shrink-0">
              <span className="font-label-md text-label-md text-on-surface">${item.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="space-y-sm mb-lg">
        <div className="flex justify-between items-center text-on-surface-variant font-body-md text-body-md">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-on-surface-variant font-body-md text-body-md">
          <span>Taxes</span>
          <span>${taxes.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-on-surface-variant font-body-md text-body-md">
          <span>Local Delivery Fee</span>
          {deliveryFee > 0 ? (
            <span>${deliveryFee.toFixed(2)}</span>
          ) : (
            <span className="text-secondary font-medium">Free</span>
          )}
        </div>
      </div>

      <div className="flex justify-between items-end border-t border-outline-variant pt-md mb-lg">
        <span className="font-headline-md text-headline-md text-on-surface">Total</span>
        <span className="font-display-lg text-display-lg text-primary text-[32px] font-bold">
          ${total.toFixed(2)}
        </span>
      </div>

      {/* Primary CTA */}
      <button 
        type="button"
        onClick={onConfirmOrder}
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-surface-tint text-on-primary font-label-md text-label-md py-4 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 cursor-pointer"
      >
        <span className="material-symbols-outlined text-[20px]">lock</span>
        {isSubmitting ? 'Processing...' : 'Confirm & Pay'}
      </button>
      
      <p className="text-center font-body-md text-body-md text-on-surface-variant text-xs mt-3 flex items-center justify-center gap-1">
        Transactions are encrypted and secure.
      </p>
    </div>
  );
};

export default OrderSummary;