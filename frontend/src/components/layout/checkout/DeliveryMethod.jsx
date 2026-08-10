import React from 'react';

const DeliveryMethod = ({ deliveryMethod, onDeliveryMethodChange, formData, onInputChange }) => {
  return (
    <section className="brand-card">
      <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Delivery Method</h2>
      
      {/* Tab Switcher */}
      <div className="flex p-1 bg-surface-variant rounded-lg mb-md" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={deliveryMethod === 'shipping'}
          onClick={() => onDeliveryMethodChange('shipping')}
          className={`flex-1 py-2 px-4 rounded-md font-label-md text-label-md text-center transition-all ${
            deliveryMethod === 'shipping'
              ? 'bg-surface-container-lowest shadow-[0_1px_3px_rgba(0,0,0,0.1)] text-on-surface font-semibold'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          Shipping
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={deliveryMethod === 'pickup'}
          onClick={() => onDeliveryMethodChange('pickup')}
          className={`flex-1 py-2 px-4 rounded-md font-label-md text-label-md text-center transition-all ${
            deliveryMethod === 'pickup'
              ? 'bg-surface-container-lowest shadow-[0_1px_3px_rgba(0,0,0,0.1)] text-on-surface font-semibold'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          Local Pickup
        </button>
      </div>

      {/* Shipping Form */}
      {deliveryMethod === 'shipping' && (
        <div className="space-y-md animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
            <div>
              <label className="brand-label" htmlFor="firstName">First Name</label>
              <input
                className="brand-input"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={onInputChange}
                placeholder="Jane"
                type="text"
              />
            </div>
            <div>
              <label className="brand-label" htmlFor="lastName">Last Name</label>
              <input
                className="brand-input"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={onInputChange}
                placeholder="Doe"
                type="text"
              />
            </div>
          </div>
          <div>
            <label className="brand-label" htmlFor="address">Street Address</label>
            <input
              className="brand-input"
              id="address"
              name="address"
              value={formData.address}
              onChange={onInputChange}
              placeholder="123 Artisan Lane"
              type="text"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-md">
            <div className="col-span-2 sm:col-span-2">
              <label className="brand-label" htmlFor="city">City</label>
              <input
                className="brand-input"
                id="city"
                name="city"
                value={formData.city}
                onChange={onInputChange}
                placeholder="Portland"
                type="text"
              />
            </div>
            <div className="col-span-1">
              <label className="brand-label" htmlFor="state">State</label>
              <input
                className="brand-input"
                id="state"
                name="state"
                value={formData.state}
                onChange={onInputChange}
                placeholder="OR"
                type="text"
              />
            </div>
            <div className="col-span-1">
              <label className="brand-label" htmlFor="zip">ZIP</label>
              <input
                className="brand-input"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={onInputChange}
                placeholder="97204"
                type="text"
              />
            </div>
          </div>
          <div>
            <label className="brand-label" htmlFor="phone">Phone Number</label>
            <input
              className="brand-input"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={onInputChange}
              placeholder="(555) 123-4567"
              type="tel"
            />
          </div>
        </div>
      )}

      {/* Local Pickup Preview */}
      {deliveryMethod === 'pickup' && (
        <div className="space-y-md">
          <div className="bg-surface-container-low p-md rounded-lg border border-outline-variant flex gap-md items-start">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-secondary-container">store</span>
            </div>
            <div>
              <h3 className="font-label-md text-label-md text-on-surface mb-1">CraftLocal Community Hub</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-2">456 Maker's District, Portland OR 97209</p>
              <p className="font-body-md text-body-md text-secondary">Ready in 2 hours</p>
            </div>
          </div>
          
          <div className="w-full h-48 rounded-lg overflow-hidden border border-outline-variant bg-surface-variant relative group cursor-pointer">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              alt="Artisan district map" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHjFpfm6k-GK6EGt61kSiy2wVGGI37_Uu570lCJ0ozp9R8ftF9-W2g3XTixJKueBJW2tKL7iD_-YbwyIcTrOGrff-zg_j-mWPFjEuM1RRKf7toHCHqeWEumANK4VW8jU4Vl7bO0bIGLbyB8HKcfR0ZF4AJrZrB1iCzQpouj4sSsGs-XC89xHSBvRCd8ng_f1b8uE7LJzGY-TrZbJjbcYiDsrEPnRmhmDLPsCIKZafYu7uyQlY8050X"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
            <div className="absolute bottom-4 right-4 bg-surface-container-lowest px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1 border border-outline-variant">
              <span className="material-symbols-outlined text-primary text-[18px]">directions</span>
              <span className="font-label-sm text-label-sm text-on-surface">Get Directions</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DeliveryMethod;