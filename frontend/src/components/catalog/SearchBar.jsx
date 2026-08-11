function SearchBar({ search, setSearch }) {
  return (
    <div className="catalog-search">
      <span className="material-symbols-outlined">
        search
      </span>

      <input
        type="text"
        placeholder="Search handmade products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;