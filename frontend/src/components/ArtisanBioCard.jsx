import React from 'react';

export const ArtisanBioCard = ({ artisan }) => {
  return (
    <div className="lg:col-span-4 bg-surface-container-lowest p-6 rounded-lg border border-outline-variant shadow-sm hover:shadow-[0_4px_20px_rgba(34,34,34,0.05)] transition-shadow">
      <h3 className="font-headline font-bold text-xl text-on-surface mb-3">About the Maker</h3>
      <div className="flex items-center gap-3 mb-4">
        <img src={artisan.avatar} alt={artisan.name} className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-sm text-on-surface">{artisan.name}</p>
          <p className="text-xs text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">location_on</span> {artisan.location}
          </p>
        </div>
      </div>
      <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{artisan.bio}</p>
      <button className="text-tertiary font-semibold text-sm underline hover:text-primary transition-colors">
        View Artisan Profile
      </button>
    </div>
  );
};