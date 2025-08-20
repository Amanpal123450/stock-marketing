export default function VisionSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Stats Card */}
        <div className="bg-white shadow-xl rounded-2xl p-8 grid grid-cols-2 gap-6">
          <div className="text-center">
            <h3 className="text-orange-500 font-bold text-xl">2018</h3>
            <p className="text-gray-500 text-sm mt-1">Founded</p>
          </div>
          <div className="text-center">
            <h3 className="text-orange-500 font-bold text-xl">2</h3>
            <p className="text-gray-500 text-sm mt-1">Global Offices</p>
          </div>
          <div className="text-center">
            <h3 className="text-orange-500 font-bold text-xl">500+</h3>
            <p className="text-gray-500 text-sm mt-1">Instruments</p>
          </div>
          <div className="text-center">
            <h3 className="text-orange-500 font-bold text-xl">&lt;50ms</h3>
            <p className="text-gray-500 text-sm mt-1">Execution Speed</p>
          </div>
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            From Vision to <span className="text-orange-500">Global Leader</span>
          </h2>
          <div className="text-gray-700 space-y-5">
            <p>
              Founded in 2018 by a team of seasoned financial professionals, Qorva Markets emerged from a simple yet powerful vision: to democratize access to the global financial markets through cutting-edge technology and transparent trading conditions.
            </p>
            <p>
              What started as a mission to bridge the gap between institutional-grade trading tools and retail traders has evolved into a comprehensive trading ecosystem serving over 50,000 active traders across 80+ countries.
            </p>
            <p>
              Today, we continue to innovate and expand, always keeping our core values of transparency, integrity, and client-first approach at the heart of everything we do.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition flex items-center gap-2">
              Why Choose Us <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
