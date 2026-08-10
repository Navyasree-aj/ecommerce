import React, { useState } from "react";

export const Addresses = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "User Name",
      phone: "+91 98765 43210",
      address: "123 Main Street",
      city: "Kollam",
      state: "Kerala",
      pincode: "691001",
      isDefault: true,
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAddress = {
      id: Date.now(),
      ...formData,
      isDefault: addresses.length === 0,
    };

    setAddresses([...addresses, newAddress]);

    setFormData({
      name: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
    });

    setShowForm(false);
  };

  const handleDelete = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-headline text-4xl font-bold text-on-surface">
              Saved Addresses
            </h1>

            <p className="mt-2 text-on-surface-variant">
              Manage your saved delivery addresses.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowForm(!showForm)}
            className="rounded-xl bg-primary px-6 py-3 font-semibold text-on-primary transition hover:bg-primary-container"
          >
            {showForm ? "Cancel" : "+ Add Address"}
          </button>
        </div>

        {/* Add Address Form */}
        {showForm && (
          <div className="mb-8 rounded-2xl border border-outline-variant bg-surface-container-lowest p-6">
            <h2 className="font-headline text-2xl font-bold text-on-surface">
              Add New Address
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-6 grid gap-5 md:grid-cols-2"
            >
              <div>
                <label className="mb-2 block font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block font-medium">
                  Address
                </label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  State
                </label>

                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  PIN Code
                </label>

                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary px-6 py-3 font-semibold text-on-primary transition hover:bg-primary-container"
                >
                  Save Address
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Saved Addresses */}
        <div className="space-y-5">
          {addresses.map((address) => (
            <div
              key={address.id}
              className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-headline text-xl font-bold text-on-surface">
                      {address.name}
                    </h2>

                    {address.isDefault && (
                      <span className="rounded-full bg-secondary-container px-3 py-1 text-xs font-semibold text-secondary">
                        Default
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-on-surface-variant">
                    {address.phone}
                  </p>

                  <p className="mt-4 text-on-surface">
                    {address.address}
                  </p>

                  <p className="mt-1 text-on-surface">
                    {address.city}, {address.state} - {address.pincode}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleDelete(address.id)}
                  className="text-left font-semibold text-primary hover:text-primary-container sm:text-right"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}
        </div>

        {addresses.length === 0 && (
          <div className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-10 text-center">
            <h2 className="font-headline text-xl font-bold">
              No saved addresses
            </h2>

            <p className="mt-2 text-on-surface-variant">
              Add an address to make checkout faster.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};