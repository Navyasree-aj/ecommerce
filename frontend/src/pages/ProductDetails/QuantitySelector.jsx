export default function QuantitySelector({ quantity, onChange, min = 1 }) {
  return (
    <div className="flex items-center gap-sm">
      <span className="font-label-md text-label-md text-on-surface">Quantity</span>
      <div className="flex items-center border border-outline-variant rounded-lg bg-surface-container-lowest">
        <button
          className="p-2 text-on-surface-variant hover:text-primary transition-colors"
          onClick={() => onChange(Math.max(min, quantity - 1))}
        >
          <span className="material-symbols-outlined">remove</span>
        </button>
        <span className="w-8 text-center font-body-md text-body-md">{quantity}</span>
        <button
          className="p-2 text-on-surface-variant hover:text-primary transition-colors"
          onClick={() => onChange(quantity + 1)}
        >
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>
    </div>
  );
}