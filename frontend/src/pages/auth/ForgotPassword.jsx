import React, { useState } from 'react';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend integration will be added later.
  };

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <main className="flex flex-col items-center px-6 py-16">

        {/* Icon */}
        <span
          className="material-symbols-outlined text-primary text-6xl mb-4"
          style={{ fontVariationSettings: "'FILL' 0" }}
        >
          lock_reset
        </span>

        {/* Heading */}
        <h1 className="font-headline text-4xl font-bold mb-2 text-center">
          Forgot Your Password?
        </h1>

        <p className="text-on-surface-variant text-lg mb-8 text-center">
          Enter your email and we'll help you reset your password.
        </p>

        {/* Form Card */}
        <div className="w-full max-w-xl bg-surface-container-lowest border border-outline-variant rounded-2xl p-8">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div>
              <label className="block font-semibold mb-2">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-5 py-4 rounded-xl border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-primary text-on-primary font-bold text-lg hover:bg-primary-container transition-colors"
            >
              Send Reset Link
            </button>

          </form>

          {/* Back to Login */}
          <div className="text-center mt-6">
            <a
              href="/login"
              className="text-primary font-bold hover:text-primary-container"
            >
              ← Back to Sign In
            </a>
          </div>

        </div>
      </main>
    </div>
  );
};