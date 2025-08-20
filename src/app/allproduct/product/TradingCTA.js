"use client";

import { FaUser, FaDesktop } from "react-icons/fa";

export default function TradingCTA() {
  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 py-16 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Ready to Start Trading?
      </h2>
      <p className="text-lg md:text-xl mb-8 text-center max-w-2xl">
        Join thousands of traders who choose Qorva Markets for professional
        trading conditions across all asset classes.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        {/* Live Account Button */}
        <button className="flex items-center gap-2 bg-white text-orange-600 font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          <FaUser />
          Open Live Account
        </button>

        {/* Demo Account Button */}
        <button className="flex items-center gap-2 border-2 border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition">
          <FaDesktop />
          Try Demo Account
        </button>
      </div>
    </section>
  );
}
