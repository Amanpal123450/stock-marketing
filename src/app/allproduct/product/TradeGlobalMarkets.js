// components/TradeGlobalMarkets.tsx
import { DollarSign, Building2, ArrowUpRight, Package } from "lucide-react";

const features = [
  {
    icon: <DollarSign className="w-8 h-8 text-white" />,
    value: "60+",
    label: "Major Forex Pairs",
  },
  {
    icon: <Building2 className="w-8 h-8 text-white" />,
    value: "1000+",
    label: "Global Stocks",
  },
  {
    icon: <ArrowUpRight className="w-8 h-8 text-white" />,
    value: "30+",
    label: "Cryptocurrencies",
  },
  {
    icon: <Package className="w-8 h-8 text-white" />,
    value: "25+",
    label: "Commodities & Metals",
  },
];

export default function TradeGlobalMarkets() {
  return (
    <section className="py-20 bg-white text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900">Trade Global Markets</h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Access thousands of trading instruments across multiple asset classes with
        competitive spreads, fast execution, and professional tools.
      </p>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Circle with Icon */}
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-md 
                transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:from-red-500 hover:to-orange-500">
  {item.icon}
</div>
            {/* Value */}
            <p className="text-orange-500 text-2xl font-bold mt-4">{item.value}</p>
            {/* Label */}
            <p className="text-gray-600 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
