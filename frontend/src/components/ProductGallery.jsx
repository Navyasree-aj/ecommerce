import React, { useState } from 'react';

export const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-3">
      {/* Main Image Display */}
      <div className="w-full aspect-square md:aspect-[4/3] bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden relative group">
        <img 
          src={selectedImage} 
          alt="Main Product" 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-3">
        {images.map((img, idx) => (
          <button 
            key={idx}
            onClick={() => setSelectedImage(img)}
            className={`aspect-square bg-surface-container-lowest rounded-lg overflow-hidden border-2 transition-colors ${
              selectedImage === img ? 'border-primary' : 'border-outline-variant hover:border-primary/50'
            }`}
          >
            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};