"use client";
import { DollarSign, Sparkles, BarChart2, Lightbulb } from "lucide-react";

export default function TradingInstrumentsPage() {
  const instruments = [
    {
      icon: <DollarSign className="w-7 h-7 text-blue-600" />,
      bg: "bg-blue-100",
      title: "Forex",
      highlight: "55+",
      desc: "Major, minor, and exotic currency pairs",
    },
    {
      icon: <Sparkles className="w-7 h-7 text-yellow-600" />,
      bg: "bg-yellow-100",
      title: "Commodities",
      highlight: "25+",
      desc: "Precious metals, energy, and agricultural products",
    },
    {
      icon: <BarChart2 className="w-7 h-7 text-green-600" />,
      bg: "bg-green-100",
      title: "Indices",
      highlight: "15+",
      desc: "Global stock market indices",
    },
    {
      icon: <Lightbulb className="w-7 h-7 text-purple-600" />,
      bg: "bg-purple-100",
      title: "Crypto",
      highlight: "10+",
      desc: "Major cryptocurrencies against USD",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-16 px-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">
        100+ <span className="text-orange-500">Trading Instruments</span>
      </h1>
      <p className="text-gray-600 text-center max-w-2xl mb-12">
        Diversify your portfolio with our comprehensive range of trading
        instruments across multiple asset classes.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl w-full">
        {instruments.map((item, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${item.bg}`}
            >
              {item.icon}
            </div>
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-2xl font-bold text-orange-500 mb-2">
              {item.highlight}
            </p>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
