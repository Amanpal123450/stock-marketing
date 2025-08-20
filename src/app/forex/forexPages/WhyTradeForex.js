"use client";

import { FaDollarSign, FaChartLine, FaBolt } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";

const features = [
  {
    icon: <FaDollarSign size={28} />,
    title: "24/5 Trading",
    description: "Trade forex 24 hours a day, 5 days a week across global sessions.",
  },
  {
    icon: <FaChartLine size={28} />,
    title: "High Liquidity",
    description: "Benefit from deep liquidity and tight spreads in the world's largest market.",
  },
  {
    icon: <MdShowChart size={28} />,
    title: "80+ Pairs",
    description: "Trade major, minor, and exotic currency pairs with competitive conditions.",
  },
  {
    icon: <FaBolt size={28} />,
    title: "Fast Execution",
    description: "Lightning-fast order execution with average speeds under 50ms.",
  },
];

export default function WhyTradeForex() {
  return (
    <section className="py-16 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Why Trade Forex with Qorva?
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
        The foreign exchange market is the worlds largest and most liquid financial
        market, trading over $6 trillion daily.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
