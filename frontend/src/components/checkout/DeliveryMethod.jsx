import React, { useState } from 'react';

export default function DeliveryMethod({ onNext, onBack, initialData = 'standard' }) {
  const [selectedMethod, setSelectedMethod] = useState(initialData);

  const options = [
    {
      id: 'standard',
      title: 'Standard Shipping',
      time: '3-5 Business Days',
      price: '$5.00',
    },
    {
      id: 'express',
      title: 'Express Delivery',
      time: '1-2 Business Days',
      price: '$15.00',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ deliveryMethod: selectedMethod });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
      <h2 className="text-xl font-semibold mb-4">2. Select Delivery Option</h2>

      <div className="space-y-3">
        {options.map((option) => (
          <label
            key={option.id}
            className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition ${
              selectedMethod === option.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-3">
              <input
                type="radio"
                name="delivery"
                value={option.id}
                checked={selectedMethod === option.id}
                onChange={() => setSelectedMethod(option.id)}
                className="text-blue-600 focus:ring-blue-500"
              />
              <div>
                <div className="font-medium text-gray-900">{option.title}</div>
                <div className="text-sm text-gray-500">{option.time}</div>
              </div>
            </div>
            <span className="font-semibold text-gray-700">{option.price}</span>
          </label>
        ))}
      </div>

      <div className="pt-4 flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Continue to Payment
        </button>
      </div>
    </form>
  );
}