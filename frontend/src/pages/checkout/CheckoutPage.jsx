import React, { useState } from 'react';
import CheckoutHeader from '../../components/layout/CheckoutHeader.jsx';
import CheckoutFooter from '../../components/layout/CheckoutFooter.jsx';
import DeliveryMethod from '../../components/checkout/DeliveryMethod.jsx';
import PaymentMethod from '../../components/checkout/PaymentMethod.jsx';
import OrderSummary from '../../components/checkout/OrderSummary.jsx';

const INITIAL_CART_ITEMS = [
  {
    id: 'item-1',
    title: 'Speckled Ceramic Mug',
    artisan: 'Earth & Fire Studios',
    price: 32.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZZBgb2KLgZzSHXSgPJs4EtIE6TtaayIHwYauz_Hu1bfmnTVnQfXF_10-BTZCXucE9JxfsVgZynbj-1USkD2GAJnyss0O0IxyuqlXxgtlXYCtm42j8WAqevSoa0-inSVNvozPY1T72MwY5t2gS99MxKUVhG9Bcc4NdRN_SJdEPbm0Cqw_CIMvwKCyGNHrlHtZ0Q9FnSSSPE5PcFf0_hxGE4DCyWoUg7-I6pXulEOsg4GZeCfETR6W5'
  },
  {
    id: 'item-2',
    title: 'Woven Wall Tapestry',
    artisan: 'Thread Collective',
    price: 85.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEekM-6lzw9E-3yVhImWiplX17YPlwgIsBhkbn_2C8cHDlyYnPV66zZ_RRnVc4wOUWkW9SrV8XmShW-xUBb-OSjN8dWSzGA9ko3Uh2xmeHyDp2nlYG9bcGkdCPVTxjjq-1hRq0UvJXxFjnAtEEIt_SEA4YT8Wm9Z5mLK0SdBBjIhZqXzBOSXom3rWoaYR2UCYD3UEGDDCay8eTqCB9XR-V2ZrGCTbJKZA_Z4RAWrN8mES6EYEbRvXr'
  }
];

const CheckoutPage = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('shipping');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: ''
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });

  const subtotal = INITIAL_CART_ITEMS.reduce((sum, item) => sum + item.price, 0);
  const taxes = 9.36;
  const deliveryFee = deliveryMethod === 'shipping' ? 5.00 : 0.00;
  const total = subtotal + taxes + deliveryFee;

  const handleDeliveryMethodChange = (method) => {
    setDeliveryMethod(method);
    if (method === 'shipping' && paymentMethod === 'cash') {
      setPaymentMethod('card');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentDetailsChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmOrder = () => {
    setIsSubmitting(true);
    const orderPayload = {
      items: INITIAL_CART_ITEMS,
      deliveryMethod,
      shippingAddress: deliveryMethod === 'shipping' ? formData : null,
      paymentMethod,
      totals: { subtotal, taxes, deliveryFee, total }
    };

    // API integration entrypoint (MERN ready)
    console.log('Submitting order payload:', orderPayload);

    setTimeout(() => {
      setIsSubmitting(false);
      alert('Order placed successfully!');
    }, 1000);
  };

  return (
    <div className="bg-background text-on-background antialiased min-h-screen flex flex-col pt-[72px]">
      <CheckoutHeader onClose={() => console.log('Close checkout')} />
      
      <main className="flex-grow w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-lg">
        <div className="mb-lg">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">
            Checkout
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Complete your order securely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter lg:gap-lg items-start">
          {/* Left Column */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-lg">
            <DeliveryMethod 
              deliveryMethod={deliveryMethod}
              onDeliveryMethodChange={handleDeliveryMethodChange}
              formData={formData}
              onInputChange={handleInputChange}
            />
            
            <PaymentMethod 
              paymentMethod={paymentMethod}
              onPaymentMethodChange={setPaymentMethod}
              deliveryMethod={deliveryMethod}
              paymentDetails={paymentDetails}
              onPaymentDetailsChange={handlePaymentDetailsChange}
            />
          </div>

          {/* Right Column */}
          <div className="md:col-span-5 lg:col-span-4 sticky top-[100px]">
            <OrderSummary 
              items={INITIAL_CART_ITEMS}
              subtotal={subtotal}
              taxes={taxes}
              deliveryFee={deliveryFee}
              total={total}
              onConfirmOrder={handleConfirmOrder}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </main>

      <CheckoutFooter />
    </div>
  );
};

export default CheckoutPage;