import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import products from "../../data/products";


const categories = [
  {
    name: "Pottery",
    icon: "coffee",
  },
  {
    name: "Jewelry",
    icon: "diamond",
  },
  {
    name: "Woodwork",
    icon: "chair",
  },
  {
    name: "Paintings",
    icon: "palette",
  },
  {
    name: "Textiles",
    icon: "texture",
  },
];

function Stars({ rating }) {
  return (
    <div className="rating">
      <div className="stars">
        <span
          className="material-symbols-outlined filled"
        >
          star
        </span>

        <span
          className="material-symbols-outlined filled"
        >
          star
        </span>

        <span
          className="material-symbols-outlined filled"
        >
          star
        </span>

        <span
          className="material-symbols-outlined filled"
        >
          star
        </span>

        <span
          className="material-symbols-outlined filled"
        >
          star
        </span>
      </div>

      <span className="rating-number">
        ({rating})
      </span>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <article className="product-card">

      <div className="product-image-wrapper">

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <div className="distance-badge">
          <span className="material-symbols-outlined">
            near_me
          </span>

          {product.distance}
        </div>

        <button
          className="favorite-product"
          aria-label={`Add ${product.name} to wishlist`}
        >
          <span className="material-symbols-outlined">
            favorite
          </span>
        </button>

      </div>

      <div className="product-content">

        <div className="artisan-row">

          <div className="artisan-avatar">
            <span className="material-symbols-outlined">
              person
            </span>
          </div>

          <span>
            {product.artisan}
          </span>

          <span
            className="material-symbols-outlined verified-icon"
          >
            check_circle
          </span>

        </div>

        <h3>{product.name}</h3>

        <Stars rating={product.rating} />

        <div className="product-bottom">

          <span className="product-price">
            {product.price}
          </span>

          <button
            className="add-cart-button"
            onClick={() =>
              console.log(
                `Added ${product.name} to cart`
              )
            }
          >
            Add to Cart
          </button>

        </div>

      </div>
    </article>
  );
}

function Home() {
  return (
    <div className="app-page">

      <Navbar />

      <main className="home-main">

        {/* Hero */}
        <section className="home-hero">

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <div className="hero-text">

              <span className="eyebrow">
                LOCAL • HANDMADE • AUTHENTIC
              </span>

              <h1>
                Discover beautiful
                <span> handmade goods </span>
                near you.
              </h1>

              <p>
                Support your local community.
                Discover unique, artisanal products
                created by makers in your neighborhood.
              </p>

              <div className="hero-buttons">

                <Link
                  to="/discover"
                  className="primary-button"
                >
                  Explore Local Finds

                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </Link>

                <button className="secondary-button">
                  <span className="material-symbols-outlined">
                    near_me
                  </span>

                  Find Near Me
                </button>

              </div>

            </div>

            <div className="hero-art">

              <div className="hero-main-image">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn--nQVu1iptmK52_j8jQYXhYR6eaIMO5bctNrB38D9pVA3U0PNZWmJj3Asj-EOb5PXTbgVBbO_C6VfkL8LhjbTkvp7DvCqmwGGkcgcY5C7HGmgzHGJPYkAJsA7SQbTK99PWXBI0efUaPeTpUNX2ahtIcYVr_4CZKlpLJEqornVdTt3kC2xzC63b_KbZep1r5ShB4LGRE0AZavn6zz-OVulmB1M7XFF9cdqU4eObQQnb0BQgrvYaSu"
                  alt="Handmade ceramic bowl"
                />

                <div className="image-label">
                  <span className="material-symbols-outlined">
                    verified
                  </span>

                  Maya's Clay
                </div>
              </div>

              <div className="hero-small-card">
                <span className="material-symbols-outlined">
                  explore
                </span>

                <strong>24</strong>

                <span>
                  Artisans Nearby
                </span>
              </div>

            </div>

          </div>
        </section>

        {/* Categories */}
        <section className="home-section">

          <div className="section-heading">

            <div>
              <span className="section-label">
                EXPLORE
              </span>

              <h2>
                Shop by Category
              </h2>
            </div>

            <Link
              to="/discover"
              className="text-link"
            >
              View all
              <span className="material-symbols-outlined">
                arrow_forward
              </span>
            </Link>

          </div>

          <div className="category-grid">

            {categories.map((category) => (
              <Link
                to="/discover"
                className="category-card"
                key={category.name}
              >

                <div className="category-icon">
                  <span className="material-symbols-outlined">
                    {category.icon}
                  </span>
                </div>

                <h3>
                  {category.name}
                </h3>

                <span className="material-symbols-outlined category-arrow">
                  arrow_forward
                </span>

              </Link>
            ))}

          </div>

        </section>

        {/* Featured products */}
        <section className="home-section">

          <div className="section-heading">

            <div>
              <span className="section-label">
                LOCAL FINDS
              </span>

              <h2>
                Popular Near You
              </h2>

              <p>
                Handcrafted products from makers
                around your neighborhood.
              </p>
            </div>

            <Link
              to="/discover"
              className="text-link"
            >
              Explore all
              <span className="material-symbols-outlined">
                arrow_forward
              </span>
            </Link>

          </div>

          <div className="products-grid home-products">

            {products.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
              />
            ))}

          </div>

        </section>

        {/* Artisan CTA */}
        <section
          className="artisan-banner"
          id="artisans"
        >

          <div>

            <span className="section-label">
              FOR LOCAL MAKERS
            </span>

            <h2>
              Turn your craft into a
              local business.
            </h2>

            <p>
              Share your handmade products with
              customers in your neighborhood.
            </p>

          </div>

          <button className="primary-button">
            Become an Artisan

            <span className="material-symbols-outlined">
              arrow_forward
            </span>
          </button>

        </section>

      </main>

    </div>
  );
}

export default Home;