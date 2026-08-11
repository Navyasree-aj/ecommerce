import { useState } from "react";
import Icon from "./Icon";

function ProductCard({ product, onAddToCart }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="product-card">

      <div className="product-image-wrapper">

        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        ) : (
          <div className="missing-image">
            <span>Product Image</span>
          </div>
        )}

        <button
          className={`wishlist-button ${liked ? "liked" : ""}`}
          onClick={() => setLiked(!liked)}
          aria-label={
            liked
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
        >
          <Icon name="heart" size={18} />
        </button>

        {product.badge && (
          <span className="product-badge">
            {product.badge}
          </span>
        )}

      </div>

      <div className="product-content">

        <div className="product-category">
          {product.category}
        </div>

        <h3 className="product-name">
          {product.name}
        </h3>

        <div className="seller-row">

          <span className="seller-avatar">
            {product.seller.charAt(0)}
          </span>

          <span>{product.seller}</span>

          <span className="verified">
            ✓
          </span>

        </div>

        <div className="product-bottom">

          <div>
            <span className="product-price">
              ${product.price.toFixed(2)}
            </span>

            <div className="rating">
              <Icon name="star" size={13} />
              <span>{product.rating}</span>
              <span className="review-count">
                ({product.reviews})
              </span>
            </div>
          </div>

          <button
            className="add-cart-button"
            onClick={() => onAddToCart(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            <Icon name="plus" size={17} />
          </button>

        </div>

      </div>

    </article>
  );
}

export default ProductCard;