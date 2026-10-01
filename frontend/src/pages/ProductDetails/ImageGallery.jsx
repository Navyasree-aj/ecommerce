import { useState } from "react";

export default function ImageGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  return (
    <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-sm">
      <div className="w-full aspect-square md:aspect-[4/3] bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden relative group">
        <img
          alt={active.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={active.src}
        />
      </div>
      <div className="grid grid-cols-3 gap-sm">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`aspect-square bg-surface-container-lowest rounded-lg overflow-hidden ${
              i === activeIndex
                ? "border-2 border-primary"
                : "border border-outline-variant hover:border-primary/50 transition-colors"
            }`}
          >
            <img alt={img.alt} className="w-full h-full object-cover" src={img.src} />
          </button>
        ))}
      </div>
    </div>
  );
}