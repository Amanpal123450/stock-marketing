export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Building <span className="text-orange-500">TRUST</span> Through <span className="text-orange-500">Excellence</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            From a <span className="text-orange-500 font-medium">visionary idea</span> to a <span className="text-orange-500 font-medium">global trading empire</span> – this is the story of how we transformed the way people trade.
          </p>
        </div>

        {/* Description */}
        <div className="text-center text-gray-600 max-w-4xl mx-auto mb-12">
          <p className="mb-4">
            Founded by seasoned financial experts who believed that <span className="font-semibold">every trader deserves institutional-grade tools</span>, Qorva Markets emerged from a simple yet powerful mission: democratize access to professional trading.
          </p>
          <p>
            Today, were proud to serve <span className="font-semibold">50,000+ traders across 80+ countries</span>, providing them with the technology, support, and conditions that were once reserved for Wall Street giants.
          </p>
        </div>

        {/* Stats and Philosophy */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-500 text-white rounded-lg p-5 text-center">
                <div className="text-2xl font-bold">6+</div>
                <div className="text-sm">Years of Innovation</div>
              </div>
              <div className="bg-gray-900 text-white rounded-lg p-5 text-center">
                <div className="text-2xl font-bold">80+</div>
                <div className="text-sm">Countries Served</div>
              </div>
              <div className="bg-orange-500 text-white rounded-lg p-5 text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm">Trusted Traders</div>
              </div>
              <div className="bg-gray-900 text-white rounded-lg p-5 text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Dedicated Support</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-md shadow hover:bg-orange-600">
                Meet Our Team
              </button>
              <button className="border border-black text-black px-6 py-2 rounded-md hover:bg-black hover:text-white flex items-center gap-2">
                Why Choose Us
                <span>🕒</span>
              </button>
            </div>
          </div>

          {/* Leadership Philosophy Card */}
          <div className="relative bg-white shadow-lg rounded-xl p-6">
            {/* Trusted Badge */}
            <div className="absolute top-0 right-0 -mt-5 -mr-5">
              <div className="bg-orange-200 text-orange-700 text-sm px-4 py-2 rounded-full shadow-md">
                TRUSTED <br /> <span className="font-bold">2018</span>
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-full mx-auto mb-2">
                🏢
              </div>
              <h3 className="text-xl font-semibold">Our Leadership Philosophy</h3>
              <p className="text-gray-600 text-sm mt-2">
                We don t just provide trading platforms  we build partnerships that empower traders to achieve their financial dreams.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-3">
              <div className="flex items-start bg-orange-50 rounded-md p-4 border border-orange-200">
                <div className="text-orange-500 text-lg mr-3">🛡️</div>
                <div>
                  <h4 className="font-bold text-sm mb-1">Transparency First</h4>
                  <p className="text-gray-600 text-sm">No hidden fees, complete clarity</p>
                </div>
              </div>

              <div className="flex items-start bg-gray-100 rounded-md p-4 border border-gray-300">
                <div className="text-black text-lg mr-3">⚡</div>
                <div>
                  <h4 className="font-bold text-sm mb-1">Innovation Drive</h4>
                  <p className="text-gray-600 text-sm">Cutting-edge technology always</p>
                </div>
              </div>

              <div className="flex items-start bg-orange-50 rounded-md p-4 border border-orange-200">
                <div className="text-orange-500 text-lg mr-3">❤️</div>
                <div>
                  <h4 className="font-bold text-sm mb-1">Client Success</h4>
                  <p className="text-gray-600 text-sm">Your success is our mission</p>
                </div>
              </div>
            </div>

            {/* A+ Rating */}
            <div className="absolute -bottom-5 -left-5 bg-white border border-orange-500 text-orange-600 px-4 py-2 rounded-md shadow-md text-center text-xs font-bold">
              A+<br />
              <span className="text-[10px] font-normal">Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
