export const HowItWorks = () => {
  const items = [
    {
      title: 'Booking Pick & Drop',
      desc: 'From personal packages to business shipments — we deliver on time, every time.',
    },
    {
      title: 'Cash On Delivery',
      desc: 'From personal packages to business shipments — we deliver on time, every time.',
    },
    {
      title: 'Delivery Hub',
      desc: 'From personal packages to business shipments — we deliver on time, every time.',
    },
    {
      title: 'Booking SME & Corporate',
      desc: 'From personal packages to business shipments — we deliver on time, every time.',
    },
  ];

  return (
    <div className="w-full py-22">
      <h2 className="text-3xl font-bold mb-12 lg:ml-16">How it Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-11/12 mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="text-4xl mb-3">📦</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
