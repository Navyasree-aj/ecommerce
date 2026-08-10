import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/authService';

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      // Save login token
      localStorage.setItem('token', response.token);

      console.log('Login successful:', response);

      // Go to profile after successful login
      navigate('/profile');
    } catch (error) {
      console.error('Login failed:', error);

      alert(
        error.response?.data?.message || 'Invalid email or password'
      );
    }
  };

  return (
    <div className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto max-w-md">

        {/* Heading */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <span
              className="material-symbols-outlined text-5xl text-primary"
              aria-hidden="true"
            >
              location_on
            </span>
          </div>

          <h1 className="font-headline text-3xl font-bold text-on-surface">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-on-surface-variant">
            Sign in to continue shopping locally.
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-6 shadow-sm sm:p-8">

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-on-surface"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-outline-variant bg-background px-4 py-3 text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-on-surface"
                >
                  Password
                </label>

                <button
                  type="button"
                  className="text-sm font-semibold text-primary hover:text-primary-container"
                  onClick={() => {
                    console.log('Forgot password clicked');
                  }}
                >
                  Forgot password?
                </button>
              </div>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className="w-full rounded-lg border border-outline-variant bg-background px-4 py-3 pr-12 text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((previous) => !previous)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-on-surface-variant hover:text-primary"
                  aria-label={
                    showPassword
                      ? 'Hide password'
                      : 'Show password'
                  }
                >
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />

              <label
                htmlFor="rememberMe"
                className="text-sm text-on-surface-variant"
              >
                Remember me
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-5 py-3 font-semibold text-on-primary transition hover:bg-primary-container focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-6 border-t border-outline-variant/40 pt-6 text-center">
            <p className="text-sm text-on-surface-variant">
              Don't have an account?{' '}
              <NavLink
                to="/register"
                className="font-bold text-primary hover:text-primary-container"
              >
                Create an account
              </NavLink>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}