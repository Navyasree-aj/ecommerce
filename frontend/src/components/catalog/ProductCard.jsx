function ProductCard({ product, view = "grid" }) {
  return (
    <div className={`product-card ${view === "list" ? "list-view" : ""}`}>
      
      <div className="product-image-container">
        <img src={product.image} alt={product.name} />

        <span className="distance">
          📍 {product.distance} km away
        </span>

        <button className="favorite">
          ♡
        </button>
      </div>

      <div className="product-info">

        <div className="artisan">
          👤 {product.artisan}
        </div>

        <h2>{product.name}</h2>

        <div className="rating">
          <span className="stars">★★★★★</span>
          <span>
            {product.rating} ({product.reviews})
          </span>
        </div>

        <div className="product-bottom">

          <strong>
            ${product.price.toFixed(2)}
          </strong>

          <button>
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;