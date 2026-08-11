import { useMemo, useState } from "react";

import Navbar from "../../components/layout/Navbar";

import products from "../../data/products";

import ProductCard from "../../components/catalog/ProductCard";
import SearchBar from "../../components/catalog/SearchBar";
import CategoryFilter from "../../components/catalog/CategoryFilter";
import FilterSidebar from "../../components/catalog/FilterSidebar";
import ViewToggle from "../../components/catalog/ViewToggle";

import "./Catalog.css";

function Discover() {
  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("All Local");

  const [minPrice, setMinPrice] =
    useState("");

  const [maxPrice, setMaxPrice] =
    useState("");

  const [minRating, setMinRating] =
    useState(0);

  const [view, setView] =
    useState("grid");

  const [sortBy, setSortBy] =
    useState("distance");

  const filteredProducts = useMemo(() => {

    let result = products.filter((product) => {

      /* SEARCH */
      const searchText =
        search.toLowerCase().trim();

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(searchText) ||

        product.artisan
          .toLowerCase()
          .includes(searchText);

      /* CATEGORY */
      const matchesCategory =
        category === "All Local" ||
        product.category === category;

      /* PRICE */
      const matchesMinPrice =
        minPrice === "" ||
        product.price >= Number(minPrice);

      const matchesMaxPrice =
        maxPrice === "" ||
        product.price <= Number(maxPrice);

      /* RATING */
      const matchesRating =
        product.rating >= Number(minRating);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesRating
      );
    });

    /* SORTING */

    if (sortBy === "distance") {
      result.sort(
        (a, b) =>
          a.distance - b.distance
      );
    }

    if (sortBy === "price-low") {
      result.sort(
        (a, b) =>
          a.price - b.price
      );
    }

    if (sortBy === "price-high") {
      result.sort(
        (a, b) =>
          b.price - a.price
      );
    }

    if (sortBy === "rating") {
      result.sort(
        (a, b) =>
          b.rating - a.rating
      );
    }

    return result;

  }, [
    search,
    category,
    minPrice,
    maxPrice,
    minRating,
    sortBy,
  ]);


  const clearFilters = () => {

    setSearch("");

    setCategory("All Local");

    setMinPrice("");

    setMaxPrice("");

    setMinRating(0);

    setSortBy("distance");
  };


  return (
    <>
      <Navbar />

      <main className="catalog-page">

        {/* ================= HEADER ================= */}

        <section className="catalog-header">

          <div className="catalog-heading">

            <p className="eyebrow">
              PRODUCT DISCOVERY
            </p>

            <h1>
              Discover Handmade Goods
            </h1>

            <p>
              Find unique products created by
              local artisans.
            </p>

          </div>

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

        </section>


        {/* ================= TOOLBAR ================= */}

        <section className="catalog-toolbar">

          <CategoryFilter
            selected={category}
            setSelected={setCategory}
          />

          <div className="toolbar-right">

            {/* SORT */}

            <div className="sort-control">

              <span className="material-symbols-outlined">
                sort
              </span>

              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value)
                }
              >
                <option value="distance">
                  Distance: Nearest
                </option>

                <option value="price-low">
                  Price: Low to High
                </option>

                <option value="price-high">
                  Price: High to Low
                </option>

                <option value="rating">
                  Rating: Highest
                </option>
              </select>

            </div>


            {/* VIEW */}

            <ViewToggle
              view={view}
              setView={setView}
            />

          </div>

        </section>


        {/* ================= CATALOG LAYOUT ================= */}

        <section className="catalog-layout">

          {/* SIDEBAR */}

          <FilterSidebar
            minPrice={minPrice}
            setMinPrice={setMinPrice}

            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}

            minRating={minRating}
            setMinRating={setMinRating}

            clearFilters={clearFilters}
          />


          {/* RESULTS */}

          <div className="catalog-results">

            <div className="results-header">

              <div>

                <h2>
                  {filteredProducts.length} Products
                </h2>

                <p>
                  Handmade products from local artisans
                </p>

              </div>

              {(search ||
                category !== "All Local" ||
                minPrice ||
                maxPrice ||
                minRating > 0) && (

                <button
                  className="results-clear"
                  onClick={clearFilters}
                >
                  Clear all
                </button>

              )}

            </div>


            {/* NO PRODUCTS */}

            {filteredProducts.length === 0 ? (

              <div className="empty-state">

                <span className="material-symbols-outlined">
                  search_off
                </span>

                <h2>
                  No products found
                </h2>

                <p>
                  Try changing your search
                  or filters.
                </p>

                <button
                  onClick={clearFilters}
                >
                  Clear Filters
                </button>

              </div>

            ) : (

              /* PRODUCTS */

              <div
                className={
                  view === "grid"
                    ? "product-grid"
                    : "product-list"
                }
              >

                {filteredProducts.map(
                  (product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      view={view}
                    />
                  )
                )}

              </div>

            )}

          </div>

        </section>

      </main>
    </>
  );
}

export default Discover;