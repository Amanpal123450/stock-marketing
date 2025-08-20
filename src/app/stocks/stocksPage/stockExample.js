"use client";

export default function StockExample() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Forex Trading Example
          </h2>
          <p className="text-gray-600 mt-2">
            See how forex trading works with a practical example using EUR/USD.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-md p-8 grid md:grid-cols-2 gap-8">
          {/* Left - Trade Setup */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Trade Setup
            </h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-semibold">Currency Pair: </span>
                EUR/USD
              </p>
              <p>
                <span className="font-semibold">Trade Size: </span>
                1 Standard Lot (100,000 EUR)
              </p>
              <p>
                <span className="font-semibold">Entry Price: </span>
                1.1000
              </p>
              <p>
                <span className="font-semibold">Exit Price: </span>
                1.1050
              </p>
              <p>
                <span className="font-semibold">Direction: </span>
                <span className="text-green-600 font-semibold">BUY (Long)</span>
              </p>
            </div>
          </div>

          {/* Right - Profit Calculation */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Profit Calculation
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-md border text-gray-700">
                <p>
                  <span className="font-semibold">Price Movement: </span>
                  1.1050 - 1.1000 = 0.0050 (50 pips)
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-md border text-gray-700">
                <p>
                  <span className="font-semibold">Profit Calculation: </span>
                  100,000 × 0.0050 = $500
                </p>
              </div>
               <div className="p-4 bg-gray-50 rounded-md border text-gray-700">
                <p>
                  <span className="font-semibold">Profit Calculation: </span>
                  100,000 × 0.0050 = $500
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-md border border-green-300">
                <p className="font-semibold text-green-700">Total Profit:</p>
                <p className="text-2xl font-bold text-green-600">$500</p>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Warning */}
        <div className="mt-6 bg-yellow-50 border border-yellow-300 text-yellow-800 text-sm rounded-md p-4">
          <span className="font-semibold">Risk Warning:</span> This is a
          simplified example for educational purposes. Actual trading involves
          risk of loss and spreads/commissions would apply. Past performance
          does not guarantee future results.
        </div>
      </div>
    </section>
  );
}
