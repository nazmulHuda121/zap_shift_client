const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-5">
      <h1 className="text-5xl font-bold text-center mb-14">About Zap-Shift</h1>

      {/* Tabs */}
      <div
        role="tablist"
        className="tabs tabs-bordered flex flex-wrap gap-2 rounded-xl shadow-lg p-3 bg-base-100"
      >
        {/* STORY */}
        <input
          type="radio"
          name="about_tabs"
          role="tab"
          className="tab text-lg font-semibold hover:bg-base-300 transition-all"
          aria-label="Story"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-200 p-7 rounded-xl mt-3 shadow-inner"
        >
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="leading-8 text-lg">
            Zap-Shift was founded with a clear purpose — to modernize parcel
            delivery across Bangladesh. Traditional courier systems were slow,
            outdated, and lacked transparency.
            <br />
            <br />
            We envisioned a system where customers could send parcels
            effortlessly, track their delivery in real time, and experience
            fast, secure, technology-driven logistics.
            <br />
            <br />
            From our early days to now, Zap-Shift has grown into a reliable
            delivery ecosystem trusted by thousands of users nationwide.
          </p>
        </div>

        {/* MISSION */}
        <input
          type="radio"
          name="about_tabs"
          role="tab"
          className="tab text-lg font-semibold hover:bg-base-300 transition-all"
          aria-label="Mission"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-200 p-7 rounded-xl mt-3 shadow-inner"
        >
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="leading-8 text-lg">
            Our mission is to make logistics simple, faster, and smarter.
            Zap-Shift brings automation to a space that has long been dependent
            on manual processes.
            <br />
            <br />
            ✔ Real-time tracking ✔ Automated status timeline ✔ Safe and
            encrypted online payment ✔ Reliable riders and on-time delivery
            <br />
            <br />
            We aim to empower individuals, small businesses, and enterprises
            with a smooth and transparent delivery experience.
          </p>
        </div>

        {/* SUCCESS */}
        <input
          type="radio"
          name="about_tabs"
          role="tab"
          className="tab text-lg font-semibold hover:bg-base-300 transition-all"
          aria-label="Success"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-200 p-7 rounded-xl mt-3 shadow-inner"
        >
          <h2 className="text-3xl font-semibold mb-4">Our Success</h2>
          <p className="leading-8 text-lg">
            Zap-Shift has become one of the most efficient delivery platforms
            with outstanding performance metrics.
            <br />
            <br />⭐ <strong>98% On-Time Delivery Rate</strong>⭐{' '}
            <strong>Thousands of successfully delivered parcels</strong>⭐{' '}
            <strong>1500+ active senders across Bangladesh</strong>⭐{' '}
            <strong>Fastest payment confirmation with Stripe</strong>
            <br />
            <br />
            Our success is built on user trust, smart technology, and a
            dedicated team working to deliver excellence every single day.
          </p>
        </div>

        {/* TERMS */}
        <input
          type="radio"
          name="about_tabs"
          role="tab"
          className="tab text-lg font-semibold hover:bg-base-300 transition-all"
          aria-label="Terms & Conditions"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-200 p-7 rounded-xl mt-3 shadow-inner"
        >
          <h2 className="text-3xl font-semibold mb-4">Terms & Conditions</h2>
          <p className="leading-8 text-lg">
            To ensure safety and smooth service, users must follow our standard
            guidelines:
            <br />
            <br />
            • No illegal or prohibited items • Parcels must be properly packaged
            • Sender & receiver information must be accurate • Payment must be
            completed before parcel assignment
            <br />
            <br />
            Zap-Shift takes high security measures to ensure safe delivery and
            digital compliance.
          </p>
        </div>

        {/* OTHERS */}
        <input
          type="radio"
          name="about_tabs"
          role="tab"
          className="tab text-lg font-semibold hover:bg-base-300 transition-all"
          aria-label="Others"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-200 p-7 rounded-xl mt-3 shadow-inner"
        >
          <h2 className="text-3xl font-semibold mb-4">Others</h2>
          <p className="leading-8 text-lg">
            For partnership, business support, or custom delivery integrations,
            Zap-Shift offers flexible solutions.
            <br />
            <br />
            • Business delivery contracts • E-commerce integrations • API-based
            delivery automation • Rider network expansion
            <br />
            <br />
            We are constantly evolving to introduce more features and make your
            delivery experience even better.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
