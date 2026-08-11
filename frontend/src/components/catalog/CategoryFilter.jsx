const categories = [
  "All",
  "Pottery",
  "Jewelry",
  "Woodwork",
  "Paintings",
  "Textiles",
];

function CategoryFilter({ selected, setSelected }) {
  return (
    <div className="category-list">

      {categories.map((category) => (
        <button
          key={category}
          className={`category ${
            selected === category ? "active" : ""
          }`}
          onClick={() => setSelected(category)}
        >
          {category}
        </button>
      ))}

    </div>
  );
}

export default CategoryFilter;