function FilterSidebar({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  minRating,
  setMinRating,
  clearFilters,
}) {
  return (
    <aside className="filter-sidebar">

      <div className="filter-header">
        <h2>Filters</h2>

        <button onClick={clearFilters}>
          Clear All
        </button>
      </div>

      <hr />

      <h3>Price</h3>

      <div className="price-inputs">

        <input
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <span>-</span>

        <input
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

      </div>

      <hr />

      <h3>Rating</h3>

      {[4, 3, 2].map((rating) => (
        <label
          key={rating}
          className="filter-check"
        >
          <input
            type="radio"
            name="rating"
            checked={minRating === rating}
            onChange={() => setMinRating(rating)}
          />

          {rating}+ stars
        </label>
      ))}

    </aside>
  );
}

export default FilterSidebar;