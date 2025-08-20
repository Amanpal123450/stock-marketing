"use client";

import { DollarSign, Monitor, FlaskConical } from "lucide-react";

export default function CryptoCategories() {
  const categories = [
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      bg: "bg-yellow-500",
      title: "Major Cryptocurrencies",
      description:
        "The most established and liquid digital currencies with the highest market caps.",
      items: ["Bitcoin (BTC)", "Ethereum (ETH)", "Ripple (XRP)", "Litecoin (LTC)"],
    },
    {
      icon: <Monitor className="w-8 h-8 text-white" />,
      bg: "bg-blue-500",
      title: "DeFi Tokens",
      description:
        "Decentralized Finance tokens powering the new financial ecosystem.",
      items: ["Chainlink (LINK)", "Uniswap (UNI)", "Aave (AAVE)", "Compound (COMP)"],
    },
    {
      icon: <FlaskConical className="w-8 h-8 text-white" />,
      bg: "bg-purple-500",
      title: "Altcoins",
      description:
        "Alternative cryptocurrencies with unique features and growing adoption.",
      items: ["Cardano (ADA)", "Polkadot (DOT)", "Solana (SOL)", "Polygon (MATIC)"],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Popular Cryptocurrency Categories
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Trade the most popular and liquid cryptocurrencies across different categories and use cases.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 px-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <div
              className={`w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full ${cat.bg}`}
            >
              {cat.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{cat.title}</h3>
            <p className="text-gray-600 mb-4">{cat.description}</p>
            <ul className="text-gray-700 space-y-1">
              {cat.items.map((item, i) => (
                <li key={i} className="text-sm">• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
