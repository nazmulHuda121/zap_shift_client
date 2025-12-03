import { Package, Clock, Truck } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6f9ff] to-white py-20 px-5 mt-12 lg:my-22">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-[#03373d]">Our Services</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          Zap-Shift delivers speed, security, and reliability. We combine
          powerful technology with a smart delivery workflow that ensures your
          parcels reach their destination on time—every time.
        </p>
      </div>

      {/* ==== Service Cards ==== */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
        <div className="bg-white rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="w-16 h-16 bg-[#caeb66]/20 flex items-center justify-center rounded-xl mx-auto mb-5">
            <Package size={32} className="text-[#03373d]" />
          </div>
          <h2 className="text-2xl font-bold text-[#03373d] mb-3">
            Smart Parcel Delivery
          </h2>
          <p className="text-gray-600 leading-7">
            Seamless parcel booking, automated status updates, real-time
            tracking, and secure payments—everything in one modern platform.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="w-16 h-16 bg-[#caeb66]/20 flex items-center justify-center rounded-xl mx-auto mb-5">
            <Clock size={32} className="text-[#03373d]" />
          </div>
          <h2 className="text-2xl font-bold text-[#03373d] mb-3">
            Express Delivery
          </h2>
          <p className="text-gray-600 leading-7">
            Zap-Shift guarantees fast pickup and delivery with our optimized
            routing system—ensuring maximum speed and reliability.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="w-16 h-16 bg-[#caeb66]/20 flex items-center justify-center rounded-xl mx-auto mb-5">
            <Truck size={32} className="text-[#03373d]" />
          </div>
          <h2 className="text-2xl font-bold text-[#03373d] mb-3">
            Business Logistics
          </h2>
          <p className="text-gray-600 leading-7">
            For e-commerce and businesses—bulk delivery, smart dashboard, rider
            scheduling, payment summaries, and advanced tracking.
          </p>
        </div>
      </div>

      {/* ==== Extra Feature Section ==== */}
      <div className="max-w-6xl mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-[#03373d] mb-6">
          Why Choose Zap-Shift?
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Every delivery matters. That's why we combine intuitive UI, efficient
          workflow, and technology-driven automation to give you the **best
          parcel experience**.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          <div className="bg-[#03373d] text-white rounded-2xl p-10 shadow-xl hover:scale-[1.02] transition-all">
            <h3 className="text-3xl font-bold mb-3">Advanced Tracking</h3>
            <p className="leading-6 text-gray-200">
              Track every step of your parcel with real-time map updates and
              transparent delivery timeline.
            </p>
          </div>

          <div className="bg-[#caeb66] text-[#03373d] rounded-2xl p-10 shadow-xl hover:scale-[1.02] transition-all">
            <h3 className="text-3xl font-bold mb-3">Secure Payments</h3>
            <p className="leading-6 text-[#03373d]/80">
              Powered by Stripe—every payment is encrypted, safe, and processed
              instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
