"use client";

import Link from "next/link";

const spreads = [
  { pair: "EUR/USD", standard: "0.8 pips", raw: "0.0 pips", leverage: "1:500" },
  { pair: "GBP/USD", standard: "1.2 pips", raw: "0.0 pips", leverage: "1:500" },
  { pair: "USD/JPY", standard: "0.9 pips", raw: "0.0 pips", leverage: "1:500" },
  { pair: "AUD/USD", standard: "1.0 pips", raw: "0.0 pips", leverage: "1:500" },
  { pair: "USD/CAD", standard: "1.5 pips", raw: "0.0 pips", leverage: "1:500" },
];

export default function ForexSpreads() {
  return (
    <section className="py-16 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Competitive Forex Spreads
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Trade with some of the most competitive spreads in the industry across all major currency pairs.
        </p>
      </div>

      {/* Table */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-sm uppercase">
                <th className="py-3 px-6">Currency Pair</th>
                <th className="py-3 px-6">Standard Account</th>
                <th className="py-3 px-6">Raw Account</th>
                <th className="py-3 px-6">Max Leverage</th>
              </tr>
            </thead>
            <tbody>
              {spreads.map((row, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-6 font-medium">{row.pair}</td>
                  <td className="py-3 px-6 text-orange-600 font-medium">
                    {row.standard}
                  </td>
                  <td className="py-3 px-6 text-orange-600 font-medium">
                    {row.raw}
                  </td>
                  <td className="py-3 px-6">{row.leverage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notice Box */}
        <div className="mt-6 bg-yellow-100 border border-yellow-300 text-yellow-800 text-sm p-4 rounded-md">
          <span className="font-semibold">Important Notice:</span> The spreads shown above are typical/indicative values for illustration purposes only. 
          Actual spreads may vary based on market conditions, volatility, liquidity, and time of day. 
          Spreads may widen significantly during major news events, market openings, or periods of low liquidity. 
          Past spread performance does not guarantee future results.
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <Link
            href="/account-types"
            className="bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-orange-700 transition"
          >
            View All Account Types
          </Link>
        </div>
      </div>
    </section>
  );
}
