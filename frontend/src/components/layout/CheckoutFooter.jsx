import React from 'react';

const CheckoutFooter = () => {
  return (
    <footer className="w-full bg-surface-container-low dark:bg-surface-container-lowest border-t border-outline-variant mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-lg max-w-max-width mx-auto">
        <span className="font-headline-md text-headline-md text-primary mb-4 md:mb-0">
          CraftLocal
        </span>
        <div className="flex gap-4 items-center">
          <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all text-sm">
            Support
          </a>
          <span className="text-outline-variant">•</span>
          <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all text-sm">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default CheckoutFooter;