const navItems = [
  { label: "Shop", icon: "storefront", active: false },
  { label: "Explore", icon: "explore", active: true },
  { label: "Wishlist", icon: "favorite", active: false },
  { label: "Cart", icon: "shopping_bag", active: false },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center bg-surface py-2 md:hidden border-t border-outline-variant shadow-sm z-50">
      {navItems.map((item) => (
        <a
          key={item.label}
          href="#"
          className={`flex flex-col items-center justify-center hover:bg-secondary-container/20 transition-all duration-200 active:scale-90 p-2 rounded-lg ${
            item.active ? "text-primary font-bold" : "text-on-surface-variant"
          }`}
        >
          <span
            className="material-symbols-outlined"
            style={item.active ? { fontVariationSettings: "'FILL' 1" } : undefined}
          >
            {item.icon}
          </span>
          <span className="font-label-sm text-label-sm mt-1">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}