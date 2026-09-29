import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen text-on-background pt-10 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <section className="rounded-[32px] bg-surface-container-low border border-outline-variant/50 p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Shop local, pay with confidence
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-on-surface sm:text-5xl">
                Discover handcrafted products and complete checkout in one place.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-on-surface-variant">
                Get started with your order by adding shipping details, reviewing your cart summary,
                and choosing the payment method that works for you.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <NavLink
                  to="/checkout"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary shadow-sm transition hover:bg-primary-container"
                >
                  Start Checkout
                </NavLink>
                <NavLink
                  to="/checkout"
                  className="inline-flex items-center justify-center rounded-full border border-outline-variant bg-surface px-6 py-3 text-sm font-semibold text-on-surface transition hover:border-primary hover:text-primary"
                >
                  View Checkout Flow
                </NavLink>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                {
                  title: 'Shipping Address',
                  description: 'Enter your delivery address and contact details to ensure fast, accurate shipping.',
                  label: 'Add address',
                },
                {
                  title: 'Order Summary',
                  description: 'Review item quantities, shipping cost and taxes before placing your order.',
                  label: 'View summary',
                },
                {
                  title: 'Payment',
                  description: 'Choose card, UPI, or cash-on-delivery and complete checkout securely.',
                  label: 'Select payment',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-outline-variant/50 bg-background p-6 shadow-sm"
                >
                  <h2 className="text-lg font-semibold text-on-surface">{card.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-on-surface-variant">{card.description}</p>
                  <NavLink
                    to="/checkout"
                    className="mt-5 inline-flex items-center rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/5"
                  >
                    {card.label}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
