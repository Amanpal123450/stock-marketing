export default function GlobalReachSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Text and Stats */}
        <div>
          <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
            Global Reach
          </span>

          <h2 className="text-4xl font-bold mt-4 mb-6">
            Serving Traders <span className="text-orange-500">Worldwide</span>
          </h2>

          <p className="text-gray-600 mb-8">
            With our offices strategically located, we provide 24/7 support to traders
            across all major time zones. Our multilingual team ensures that language
            is never a barrier to accessing our services.
          </p>

          {/* Grid Stats */}
          <div className="grid grid-cols-2 gap-6 text-sm mb-10">
            <div className="flex items-start gap-3">
              <div className="bg-orange-100 p-2 rounded-md">
                🌍
              </div>
              <div>
                <p className="font-semibold text-gray-900">80+ Countries</p>
                <p className="text-gray-500 text-sm">Global Coverage</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-orange-100 p-2 rounded-md">
                ⏰
              </div>
              <div>
                <p className="font-semibold text-gray-900">24/7 Support</p>
                <p className="text-gray-500 text-sm">Round-the-clock</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-orange-100 p-2 rounded-md">
                💬
              </div>
              <div>
                <p className="font-semibold text-gray-900">15+ Languages</p>
                <p className="text-gray-500 text-sm">Multilingual Support</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-orange-100 p-2 rounded-md">
                🏢
              </div>
              <div>
                <p className="font-semibold text-gray-900">2 Global Offices</p>
                <p className="text-gray-500 text-sm">Strategic Locations</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition">
            Contact Our Team →
          </button>
        </div>

        {/* Right: Office Cards */}
        <div className="bg-gray-100 rounded-2xl p-8 shadow-md">
          <h3 className="text-2xl font-bold mb-1">Our Global Offices</h3>
          <p className="text-gray-600 mb-6">Strategically located in major financial hubs</p>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-md">📍</div>
                <div>
                  <p className="font-semibold text-gray-900">Comoros Union</p>
                  <p className="text-sm text-gray-500">Registered Office</p>
                  <p className="text-sm text-gray-500">Bonovo Road – Fomboni, Island of Mohéli</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 text-orange-600 p-2 rounded-md">📍</div>
                <div>
                  <p className="font-semibold text-gray-900">Dubai, UAE</p>
                  <p className="text-sm text-gray-500">Physical Office</p>
                  <p className="text-sm text-gray-500">Office # 210 Al-Nasar Sports Club</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
