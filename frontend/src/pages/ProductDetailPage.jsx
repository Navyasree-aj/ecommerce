import React from 'react';
import { Navbar } from '../components/Navbar';
import { BottomNav } from '../components/BottomNav';
import { ProductGallery } from '../components/ProductGallery';
import { ProductInfo } from '../components/ProductInfo';
import { ArtisanBioCard } from '../components/ArtisanBioCard';
import { RecommendedProducts } from '../components/RecommendedProducts';

// Mock Data
const PRODUCT_DATA = {
  title: "Hand-Thrown Terracotta Bowl",
  price: 45.0,
  distance: "1.2km",
  images: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBfqbi2rR5TJ-jxKZHAPh3Z8Wkw9AswO-UesdNI0xPW3i_YAQWRHZKDt5Dm2LGU9hhX2q4pJb3nsm1THLI1FeVwe9d7EmRjnWgTfuNYI-V8JPFXwvbyfYZKSbGXB7fO2_KQulxi-zOwLDDIujMa26gWieBEHBgXxXPnKi0ChuhF7CVCHvd__5qBYejaWrweJRiDR377JXgs4N9Nj45a28bXwL3AnuWqNG-ZO9zXMxPp68t798XxUaHu",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAJICaO-8XzyCQYoL6CODjCqeZ7wFqaM9tdEIyHChKZhxc2ibHvfvymRViujTF4AcydW2Y-7QF2eIUshk83A85ImqP6B6DwXEV9NBW823yC4hnq-RgTp7oh7RQUfJ6xnN2xwbLFaN17WppzbCk6VtMe_fvdc6YRduNKCt01i444tzOZ139IQhmfhy0kfaNcR5XeLk1vO6IY9JUHP-YVqVWG2aWc4FW2rQQauSt2mWxWOj3SrXcufSSH",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCR2n_ONgYGnVVfMrbHdJ_OL2yJGc_DOzQCnelqkPiflKtkWFmuqRAy7HEhb4mK9tpWG5n7DewqKXcqxxR-SROpH_qBhsS0fnrr2blKrlILexwW1wIbdRWjppBoYLv53MBfZ3OWHi8y1pZdxbdfQ6uCeCJA52kzcwqKxxJ_u_LjOb-G3xYY_cVnjTj86QPIqj0Fa_AeZkOWQ3vt5-02REuLahyTkwGCZH8cWLRT5Arg_MjXQHipOmYW"
  ],
  artisan: {
    name: "Studio Terra",
    location: "Portland, OR",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkJaZ1LQ7t9-_WeN8kxBE0HYo1CLCl2dCKL4WBZI54M3ISu-hZQai7KPVelUbD1FKOWuCP3f1ByoR-jBcd1VIhDzZo-zVRsSB-BpLP-YtnluZsI1gME9fCfWaINuoL5yFuMNeb-ogY2FzXBhCjNNx5ft93dNPNEeNsZFyxIkTkfjFMIs0c4R-j8fW-iNGqPOrKuPZ0gNGlFWt_0comCOz1kO89yOj00dZ1puuCsVeMuFTvsRtK1NaP",
    bio: "Dedicated to preserving traditional pottery techniques, Studio Terra crafts functional art pieces designed for everyday living. Each piece is thrown by hand and glazed with custom-mixed finishes reflecting the local landscape."
  }
};

const RECOMMENDED_ITEMS = [
  { id: 1, title: "Speckled Morning Mug", seller: "Earth & Kiln", price: 32.0, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPl2RlWMS9zMyPArNDTX9W1MgwOv95LHRiD_xzbRLwMzmvTpIQBPh6V_kaQFAZnyQPiuKajHGuFvK4nXLrZsp6TRo2bRVf20FIhkBF5Bf6_6rYo3ekvqhJaRn_qKoXPf_hQzKyUGQs5jq0PbpyHGNT9NZ7evHS_PPgz9RNFztC7WCX5NzwMVixbBI0CsLSe_wR7b_IklDzot1LKKfLcBW_vt8uGbViNXrFX11suYD9AhjymddMtXnt" },
  { id: 2, title: "Carved Serving Spoons", seller: "TimberWorks", price: 45.0, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1EhN5O1RCnGhM9mD6IJLdlwuVoepZpv5BmIeDTgaQLuLuESXvf2ee2oDUxlgvx9vHPjETqFNiXDlHsybZmrFbMUsGOWqMctkyeA066XJT6x7eW68YJar3ajyTPvetGBL5mSpApqkLS_sS6fopjwsi1VkSL_23qu2FbTyYu1RxzlgeVSkZJSgBsY-ySWf0n0KO8vsVvjvZM4Kz_oVOgI-vzGy4d1zMk_7lGQms3v9VM-OSLOIvkx5L" },
  { id: 3, title: "Cedarwood Soy Candle", seller: "Lumina Local", price: 28.0, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzlgtmfEd--wX8iYxs33GsgQ0itlVMSiKHSCDmaSAVhCLe6fM5ICbSBlaFFF9VrZ4D4p8LQ6QBjEctJ3D8RebvHL42Q5z2dtTkv5YatUEXKr_E_319D1YMj22qf4l-YJgPkUNtR21oSC39JQWRMDbOT3MAkme2yE-KZ1K_lt-vT2TpJ2XnTukjBdzJj_23RlS8PPqiJXgg7vDhKWFoYtX7H6Sx5tvKa8fP4M0YP4Z9TC6PRnSqoB1K" }
];

export const ProductDetailPage = () => {
  return (
    <div className="bg-background text-on-background min-h-screen pt-[72px] pb-[80px] md:pb-0">
      <Navbar />

      <main className="max-w-[1280px] mx-auto px-4 md:px-10 py-6 md:py-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1 text-on-surface-variant text-xs mb-8 font-medium">
          <a className="hover:text-primary transition-colors" href="#">Home</a>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <a className="hover:text-primary transition-colors" href="#">Pottery</a>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-primary">{PRODUCT_DATA.title}</span>
        </nav>

        {/* Gallery & Product Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <ProductGallery images={PRODUCT_DATA.images} />
          <ProductInfo product={PRODUCT_DATA} />
        </div>

        {/* Artisan Profile & Recommendations */}
        <div className="mt-16 border-t border-outline-variant pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <ArtisanBioCard artisan={PRODUCT_DATA.artisan} />
          <RecommendedProducts products={RECOMMENDED_ITEMS} />
        </div>
      </main>

      <BottomNav />
    </div>
  );
};