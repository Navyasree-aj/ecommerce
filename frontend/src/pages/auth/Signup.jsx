import React, { useState } from 'react';

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background text-on-surface">

      {/* Signup Section */}
      <main className="flex flex-col items-center px-6 py-12">

        {/* Icon */}
        <span
          className="material-symbols-outlined text-primary text-6xl mb-4"
          style={{ fontVariationSettings: "'FILL' 0" }}
        >
          location_on
        </span>

        {/* Heading */}
        <h1 className="font-headline text-4xl font-bold mb-2">
          Create Your Account
        </h1>

        <p className="text-on-surface-variant text-lg mb-8">
          Join CraftLocal and shop from local artisans.
        </p>

        {/* Form Card */}
        <div className="w-full max-w-xl bg-surface-container-lowest border border-outline-variant rounded-2xl p-8">

          <form className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="block font-semibold mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-5 py-4 rounded-xl border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-4 rounded-xl border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block font-semibold mb-2">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  className="w-full px-5 py-4 pr-14 rounded-xl border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant"
                >
                  <span className="material-symbols-outlined">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block font-semibold mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full px-5 py-4 rounded-xl border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 w-5 h-5 accent-primary"
              />

              <p className="text-sm text-on-surface-variant">
                I agree to the Terms of Service and Privacy Policy.
              </p>
            </div>

            {/* Create Account */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-primary text-on-primary font-bold text-lg hover:bg-primary-container transition-colors"
            >
              Create Account
            </button>

          </form>

          {/* Login Link */}
          <div className="text-center mt-6">
            <span className="text-on-surface-variant">
              Already have an account?{' '}
            </span>

            <a
              href="/login"
              className="text-primary font-bold hover:text-primary-container"
            >
              Sign In
            </a>
          </div>

        </div>
      </main>
    </div>
  );
};