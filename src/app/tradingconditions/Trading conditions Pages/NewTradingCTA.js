"use client";

import { User, Monitor } from "lucide-react";

export default function NewTradingCTA() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
Experience Superior Trading Conditions
      </h2>

      {/* Subtext */}
      <p className="text-lg md:text-xl mb-8 text-center max-w-2xl">
Start trading with industry-leading spreads and lightning-fast execution. Open your account today.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        {/* Live Account Button */}
        <button className="flex items-center gap-2 bg-white text-orange-600 font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          <User className="w-5 h-5" />
          Open Live Account
        </button>

        {/* Demo Account Button */}
        <button className="flex items-center gap-2 border-2 border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition">
          <Monitor className="w-5 h-5" />
          Try Demo Account
        </button>
      </div>
    </section>
  );
}
