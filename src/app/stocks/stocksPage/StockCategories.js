"use client";

import { Monitor, Building2, ShoppingBag } from "lucide-react";

export default function StockCategories() {
  const categories = [
    {
      title: "Technology",
      description:
        "Leading tech giants and innovative companies shaping the future.",
      icon: <Monitor className="w-8 h-8 text-white" />,
      bgColor: "bg-blue-500",
      stocks: ["Apple (AAPL)", "Microsoft (MSFT)", "Tesla (TSLA)", "Google (GOOGL)"],
    },
    {
      title: "Financial Services",
      description:
        "Major banks and financial institutions from around the world.",
      icon: <Building2 className="w-8 h-8 text-white" />,
      bgColor: "bg-green-500",
      stocks: ["JPMorgan (JPM)", "Bank of America (BAC)", "Goldman Sachs (GS)", "Visa (V)"],
    },
    {
      title: "Consumer Goods",
      description:
        "Household names and consumer brands with global reach.",
      icon: <ShoppingBag className="w-8 h-8 text-white" />,
      bgColor: "bg-purple-500",
      stocks: ["Amazon (AMZN)", "Coca-Cola (KO)", "Nike (NKE)", "McDonald's (MCD)"],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Popular Stock Categories
        </h2>
        <p className="text-gray-600 mb-12">
          Trade leading companies across various sectors and regions with access
          to major global exchanges.
        </p>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
  key={idx}
  className="bg-white rounded-xl shadow-md p-6 text-center 
             hover:shadow-2xl hover:scale-105 hover:border hover:border-orange-500
             transition-all duration-300 ease-in-out cursor-pointer"
>
  {/* Icon */}
  <div
    className={`w-14 h-14 flex items-center justify-center rounded-full mx-auto ${cat.bgColor} mb-4 
                transition-transform duration-300 group-hover:rotate-12`}
  >
    {cat.icon}
  </div>

  {/* Title */}
  <h3 className="text-lg font-semibold text-gray-900 mb-2">
    {cat.title}
  </h3>
  <p className="text-gray-600 text-sm mb-4">{cat.description}</p>

  {/* Stock List */}
  <ul className="text-gray-700 text-sm space-y-1">
    {cat.stocks.map((stock, i) => (
      <li key={i}>• {stock}</li>
    ))}
  </ul>
</div>

          ))}
        </div>
      </div>
    </section>
  );
}
