import React from 'react';

const PaymentMethod = ({ paymentMethod, onPaymentMethodChange, deliveryMethod, paymentDetails, onPaymentDetailsChange }) => {
  return (
    <section className="brand-card">
      <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Payment</h2>
      <div className="space-y-sm">
        
        {/* Card Option */}
        <label 
          className={`flex items-start gap-md p-md rounded border-2 transition-all cursor-pointer ${
            paymentMethod === 'card' 
              ? 'border-primary bg-surface' 
              : 'border-outline-variant bg-surface-container-lowest hover:border-outline hover:bg-surface-container-low opacity-70'
          }`}
        >
          <input 
            type="radio" 
            name="payment_method" 
            value="card" 
            checked={paymentMethod === 'card'}
            onChange={() => onPaymentMethodChange('card')}
            className="mt-1 text-primary focus:ring-primary border-outline-variant"
          />
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-1">
              <span className="font-label-md text-label-md text-on-surface">Credit / Debit Card</span>
              <div className="flex gap-1">
                <span className="material-symbols-outlined text-on-surface-variant">credit_card</span>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Secure encrypted transaction.</p>
          </div>
        </label>

        {/* Credit Card Input Form */}
        {paymentMethod === 'card' && (
          <div className="pl-10 pr-4 pb-4 space-y-md">
            <div>
              <input 
                type="text" 
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={onPaymentDetailsChange}
                placeholder="Card Number" 
                className="brand-input" 
              />
            </div>
            <div className="grid grid-cols-2 gap-md">
              <input 
                type="text" 
                name="cardExpiry"
                value={paymentDetails.cardExpiry}
                onChange={onPaymentDetailsChange}
                placeholder="MM / YY" 
                className="brand-input" 
              />
              <input 
                type="text" 
                name="cardCvc"
                value={paymentDetails.cardCvc}
                onChange={onPaymentDetailsChange}
                placeholder="CVC" 
                className="brand-input" 
              />
            </div>
          </div>
        )}

        {/* UPI Option */}
        <label 
          className={`flex items-start gap-md p-md rounded border transition-all cursor-pointer ${
            paymentMethod === 'upi' 
              ? 'border-primary bg-surface opacity-100 border-2' 
              : 'border-outline-variant bg-surface-container-lowest hover:border-outline hover:bg-surface-container-low opacity-70'
          }`}
        >
          <input 
            type="radio" 
            name="payment_method" 
            value="upi" 
            checked={paymentMethod === 'upi'}
            onChange={() => onPaymentMethodChange('upi')}
            className="mt-1 text-primary focus:ring-primary border-outline-variant"
          />
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-1">
              <span className="font-label-md text-label-md text-on-surface">UPI / Mobile Wallet</span>
              <span className="material-symbols-outlined text-on-surface-variant">account_balance_wallet</span>
            </div>
          </div>
        </label>

        {/* Cash on Pickup Option (Shown only for Pickup) */}
        {deliveryMethod === 'pickup' && (
          <label 
            className={`flex items-start gap-md p-md rounded border transition-all cursor-pointer ${
              paymentMethod === 'cash' 
                ? 'border-primary bg-surface opacity-100 border-2' 
                : 'border-outline-variant bg-surface-container-lowest hover:border-outline hover:bg-surface-container-low opacity-70'
            }`}
          >
            <input 
              type="radio" 
              name="payment_method" 
              value="cash" 
              checked={paymentMethod === 'cash'}
              onChange={() => onPaymentMethodChange('cash')}
              className="mt-1 text-primary focus:ring-primary border-outline-variant"
            />
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-1">
                <span className="font-label-md text-label-md text-on-surface">Pay on Pickup</span>
                <span className="material-symbols-outlined text-on-surface-variant">payments</span>
              </div>
            </div>
          </label>
        )}

      </div>
    </section>
  );
};

export default PaymentMethod;