"use client";
import { Zap, BarChart2, Hand, Crosshair } from "lucide-react";

export default function TradingConditionsPage() {
  const conditions = [
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      bg: "bg-orange-100",
      title: "Ultra-Fast Execution",
      highlight: "< 50ms",
      highlightColor: "text-orange-500",
      desc: "Average execution speed with 99.9% order success rate",
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
      bg: "bg-blue-100",
      title: "Competitive Spreads",
      highlight: "0.0",
      highlightColor: "text-blue-600",
      desc: "Pips spread on EUR/USD with Raw accounts",
    },
    {
      icon: <Hand className="w-8 h-8 text-green-600" />,
      bg: "bg-green-100",
      title: "Flexible Leverage",
      highlight: "Up to 1:1000*",
      highlightColor: "text-orange-500",
      desc: "Maximum leverage for eligible Pro accounts",
    },
    {
      icon: <Crosshair className="w-8 h-8 text-purple-600" />,
      bg: "bg-purple-100",
      title: "Trading Instruments",
      highlight: "100+",
      highlightColor: "text-orange-500",
      desc: "Forex pairs, commodities, indices, and crypto",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-16 px-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">
        World-Class <span className="text-orange-500">Trading Conditions</span>
      </h1>
      <p className="text-gray-600 text-center max-w-2xl mb-12">
        Maximize your trading potential with our industry-leading conditions
        designed for serious traders.
      </p>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl w-full">
        {conditions.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${item.bg}`}
            >
              {item.icon}
            </div>
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className={`text-2xl font-bold ${item.highlightColor} mb-2`}>
              {item.highlight}
            </p>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
