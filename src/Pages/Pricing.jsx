const Pricing = () => {
  return (
    <div className="bg-base-100 py-20 px-6 my-22 rounded-2xl">
      <style>
        {`
          :root {
            --color-primary: #caeb66;
            --color-secondary: #03373d;
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">
          Simple & Transparent Pricing
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose a plan that fits your delivery needs. Clear pricing, no hidden
          fees — just smooth parcel management with Zap-Shift.
        </p>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {/* STARTER */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-[var(--color-secondary)]">
              Starter
            </h2>
            <p className="mt-3 text-gray-700">Perfect for individuals</p>

            <div className="mt-6">
              <span className="text-5xl font-bold">৳49</span>
              <span className="text-gray-500"> / parcel</span>
            </div>

            <ul className="mt-8 space-y-3 text-gray-700">
              <li>✔ Up to 3 parcels/day</li>
              <li>✔ Real-time Tracking</li>
              <li>✔ Basic Support</li>
              <li>✔ Instant Updates</li>
            </ul>

            <button
              className="mt-10 w-full py-3 rounded-xl font-semibold"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-secondary)',
              }}
            >
              Choose Starter
            </button>
          </div>

          {/* STANDARD */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-[var(--color-primary)] scale-105 hover:scale-110 transition-all duration-300">
            <h2 className="text-3xl font-bold text-[var(--color-secondary)]">
              Standard
            </h2>
            <p className="mt-3 text-gray-700">Most popular choice</p>

            <div className="mt-6">
              <span className="text-5xl font-bold">৳99</span>
              <span className="text-gray-500"> / parcel</span>
            </div>

            <ul className="mt-8 space-y-3 text-gray-700">
              <li>✔ Up to 10 parcels/day</li>
              <li>✔ Priority Delivery</li>
              <li>✔ Advanced Status Timeline</li>
              <li>✔ Premium Support</li>
            </ul>

            <button
              className="mt-10 w-full py-3 rounded-xl font-semibold text-white"
              style={{
                backgroundColor: 'var(--color-secondary)',
              }}
            >
              Choose Standard
            </button>
          </div>

          {/* BUSINESS */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-[var(--color-secondary)]">
              Business
            </h2>
            <p className="mt-3 text-gray-700">Ideal for small businesses</p>

            <div className="mt-6">
              <span className="text-5xl font-bold">৳199</span>
              <span className="text-gray-500"> / parcel</span>
            </div>

            <ul className="mt-8 space-y-3 text-gray-700">
              <li>✔ Unlimited parcels/day</li>
              <li>✔ Business Dashboard</li>
              <li>✔ Rider Management</li>
              <li>✔ Dedicated Support</li>
            </ul>

            <button
              className="mt-10 w-full py-3 rounded-xl font-semibold"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-secondary)',
              }}
            >
              Choose Business
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
