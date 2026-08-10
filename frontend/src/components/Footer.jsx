import { NavLink } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-outline-variant/40 bg-surface-container-low">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-1">
            <NavLink
              to="/"
              className="flex items-center gap-2 text-primary"
              aria-label="CraftLocal home"
            >
              <span
                className="material-symbols-outlined text-3xl"
                aria-hidden="true"
              >
                location_on
              </span>

              <span className="font-headline text-2xl font-bold">
                CraftLocal
              </span>
            </NavLink>

            <p className="mt-4 max-w-xs text-sm leading-6 text-on-surface-variant">
              Discover unique handmade products from talented local artisans
              in your community.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h2 className="font-headline text-base font-bold text-on-surface">
              Shop
            </h2>

            <nav className="mt-4 flex flex-col gap-3" aria-label="Shop">
              <NavLink
                to="/products"
                className="text-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                All Products
              </NavLink>

              <NavLink
                to="/categories"
                className="text-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                Categories
              </NavLink>

              <NavLink
                to="/wishlist"
                className="text-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                Wishlist
              </NavLink>
            </nav>
          </div>

          {/* Account */}
          <div>
            <h2 className="font-headline text-base font-bold text-on-surface">
              Account
            </h2>

            <nav className="mt-4 flex flex-col gap-3" aria-label="Account">
              <NavLink
                to="/login"
                className="text-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className="text-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                Create Account
              </NavLink>

              <NavLink
                to="/profile"
                className="text-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                My Profile
              </NavLink>

              <NavLink
                to="/orders"
                className="text-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                Order History
              </NavLink>
            </nav>
          </div>

          {/* About */}
          <div>
            <h2 className="font-headline text-base font-bold text-on-surface">
              CraftLocal
            </h2>

            <p className="mt-4 text-sm leading-6 text-on-surface-variant">
              Supporting local makers and helping you find meaningful,
              handcrafted products made close to home.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col gap-4 border-t border-outline-variant/40 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-on-surface-variant">
            © {new Date().getFullYear()} CraftLocal. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              className="text-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              Privacy Policy
            </button>

            <button
              type="button"
              className="text-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;