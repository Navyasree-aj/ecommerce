import React from 'react';

const CheckoutHeader = ({ onClose }) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface dark:bg-surface-container border-b border-outline-variant dark:border-outline">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-base max-w-max-width mx-auto h-[72px]">
        <div className="flex items-center gap-2">
          <span 
            className="material-symbols-outlined text-primary dark:text-primary-fixed-dim" 
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            location_on
          </span>
          <span className="font-display-lg text-display-lg text-primary dark:text-primary-fixed-dim tracking-tight text-[28px] md:text-[32px] leading-tight font-extrabold">
            CraftLocal
          </span>
        </div>
        <button 
          onClick={onClose}
          type="button"
          aria-label="Close checkout"
          className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center p-2 rounded-full hover:bg-surface-variant/50"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
    </header>
  );
};

export default CheckoutHeader;