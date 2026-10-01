import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Pottery',
    description: 'Functional ceramic pieces made by hand.',
    image:
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Textiles',
    description: 'Natural fibers, woven textures, and cozy staples.',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Home Decor',
    description: 'Warm, handcrafted accents for everyday living.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Wellness',
    description: 'Thoughtful self-care products and small rituals.',
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
  },
];

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Explore</p>
        <h1 className="mt-2 text-3xl font-bold text-on-surface md:text-4xl">Browse by category</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((category) => (
          <Link
            key={category.name}
            to="/products"
            className="group overflow-hidden rounded-3xl border border-outline-variant bg-surface shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-on-surface">{category.name}</h2>
              <p className="mt-2 text-sm leading-6 text-on-surface-variant">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
