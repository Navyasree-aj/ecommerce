export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-base max-w-max-width mx-auto">
        <div className="flex items-center gap-xs text-primary transition-transform scale-95 active:opacity-80">
          <span
            className="material-symbols-outlined font-headline-md text-headline-md"
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            location_on
          </span>
          <span className="font-display-lg text-display-lg font-bold">CraftLocal</span>
        </div>

        <nav className="hidden md:flex items-center gap-md">
          <a className="text-on-surface-variant font-label-md text-label-md hover:text-primary-container transition-colors" href="#">Shop</a>
          <a className="text-primary font-bold font-label-md text-label-md hover:text-primary-container transition-colors" href="#">Explore</a>
          <a className="text-on-surface-variant font-label-md text-label-md hover:text-primary-container transition-colors" href="#">Wishlist</a>
          <a className="text-on-surface-variant font-label-md text-label-md hover:text-primary-container transition-colors" href="#">Cart</a>
        </nav>

        <div className="md:hidden flex items-center gap-sm">
          <button className="p-2 text-on-surface-variant hover:text-primary-container transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>
    </header>
  );
}