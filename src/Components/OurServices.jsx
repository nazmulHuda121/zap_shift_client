export const OurServices = () => {
  const services = [
    {
      title: 'Express & Standard Delivery',
      desc: 'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours.',
    },
    {
      title: 'Nationwide Delivery',
      desc: 'We deliver parcels nationwide with home delivery ensuring your products reach customers within 48–72 hours.',
      highlight: true,
    },
    {
      title: 'Fulfillment Solution',
      desc: 'We offer customized service with inventory management support, online order processing, packaging, and after sales support.',
    },
    {
      title: 'Cash on Home Delivery',
      desc: '100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.',
    },
    {
      title: 'Corporate Service / Contract In Logistics',
      desc: 'Customized corporate services including warehouse and inventory management support.',
    },
    {
      title: 'Parcel Return',
      desc: 'Our reverse logistics facility lets customers return or exchange products with online merchants.',
    },
  ];

  return (
    <div className="w-full py-20 bg-[#042f2e] text-white rounded-3xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="text-gray-300 w-[60%] mx-auto mt-2">
          Enjoy fast, reliable parcel delivery with real‑time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className={`p-6 rounded-xl shadow bg-white text-gray-800 border ${
              s.highlight ? 'bg-lime-200' : ''
            }`}
          >
            <div className="text-4xl mb-3">📦</div>
            <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
