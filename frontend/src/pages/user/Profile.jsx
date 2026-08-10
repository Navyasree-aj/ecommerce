import React from "react";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-5xl">

        {/* Page Header */}
        <div className="mb-10">
          <h1 className="font-headline text-4xl font-bold text-on-surface">
            My Profile
          </h1>

          <p className="mt-2 text-on-surface-variant">
            Manage your account information and preferences.
          </p>
        </div>

        {/* Profile + Account Information */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* Profile Summary */}
          <div className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary-container text-3xl font-bold text-on-primary">
              U
            </div>

            <div className="mt-5 text-center">
              <h2 className="font-headline text-xl font-bold text-on-surface">
                User Name
              </h2>

              <p className="mt-1 text-sm text-on-surface-variant">
                user@example.com
              </p>
            </div>
          </div>

          {/* Account Information */}
          <div className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 md:col-span-2">
            <h2 className="font-headline text-2xl font-bold text-on-surface">
              Account Information
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              {/* Full Name */}
              <div>
                <label className="mb-2 block font-medium text-on-surface">
                  Full Name
                </label>

                <input
                  type="text"
                  value="User Name"
                  readOnly
                  className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block font-medium text-on-surface">
                  Email Address
                </label>

                <input
                  type="email"
                  value="user@example.com"
                  readOnly
                  className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block font-medium text-on-surface">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface outline-none"
                />
              </div>

              {/* Location */}
              <div>
                <label className="mb-2 block font-medium text-on-surface">
                  Location
                </label>

                <input
                  type="text"
                  placeholder="Enter your location"
                  className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface outline-none"
                />
              </div>

            </div>

            {/* Save Changes */}
            <button
              type="button"
              className="mt-7 rounded-xl bg-primary px-6 py-3 font-semibold text-on-primary transition hover:opacity-90"
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* Account Links */}
        <div className="mt-8 rounded-2xl border border-outline-variant bg-surface-container-lowest p-6">

          <h2 className="font-headline text-2xl font-bold text-on-surface">
            Account
          </h2>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">

            {/* Order History */}
            <button
              type="button"
              onClick={() => navigate("/orders")}
              className="rounded-xl border border-outline-variant px-5 py-3 text-left font-medium text-on-surface hover:bg-surface-container"
            >
              Order History
            </button>

            {/* Saved Addresses */}
            <button
              type="button"
              onClick={() => navigate("/addresses")}
              className="rounded-xl border border-outline-variant px-5 py-3 text-left font-medium text-on-surface hover:bg-surface-container"
            >
              Saved Addresses
            </button>

            {/* Wishlist */}
            <button
              type="button"
              className="rounded-xl border border-outline-variant px-5 py-3 text-left font-medium text-on-surface hover:bg-surface-container"
            >
              Wishlist
            </button>

            {/* Logout */}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="rounded-xl border border-outline-variant px-5 py-3 text-left font-medium text-on-surface hover:bg-surface-container"
            >
              Logout
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};