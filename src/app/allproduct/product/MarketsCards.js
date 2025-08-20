// components/MarketsCards.tsx
import { DollarSign, Building2, Coins, LineChart, Gem, Droplets, BarChart } from "lucide-react";

const cards = [
  {
    icon: <DollarSign className="w-7 h-7 text-white" />,
    title: "Forex",
    subtitle: "60+ Currency Pairs",
    desc: "Trade major, minor, and exotic currency pairs with spreads from 0.0 pips and leverage up to 1:1000.",
    details: [
      { label: "Min Spread:", value: "0.0 pips", highlight: true },
      { label: "Max Leverage:", value: "1:1000" },
      { label: "Trading Hours:", value: "24/5" },
    ],
    btn: "Trade Forex",
    color: "bg-blue-500",
  },
  {
    icon: <Building2 className="w-7 h-7 text-white" />,
    title: "Stocks",
    subtitle: "1000+ Global Stocks",
    desc: "Access major stocks from NYSE, NASDAQ, LSE with competitive commissions starting from $2.",
    details: [
      { label: "Min Commission:", value: "$2.00", highlight: true },
      { label: "Max Leverage:", value: "1:20" },
      { label: "Exchanges:", value: "Global" },
    ],
    btn: "Trade Stocks",
    color: "bg-green-500",
  },
  {
    icon: <Coins className="w-7 h-7 text-white" />,
    title: "Cryptocurrencies",
    subtitle: "30+ Digital Assets",
    desc: "Trade Bitcoin, Ethereum, and 30+ crypto CFDs with 24/7 trading and competitive spreads.",
    details: [
      { label: "Min Spread:", value: "0.75%", highlight: true },
      { label: "Max Leverage:", value: "1:100" },
      { label: "Trading Hours:", value: "24/7" },
    ],
    btn: "Trade Crypto",
    color: "bg-orange-500",
  },
  {
    icon: <BarChart className="w-7 h-7 text-white" />, // ✅ FIXED (LineChart → BarChart)
    title: "Indices",
    subtitle: "20+ Global Indices",
    desc: "Trade major stock indices including S&P 500, NASDAQ, FTSE 100 with tight spreads and high leverage.",
    details: [
      { label: "Min Spread:", value: "0.4 pts", highlight: true },
      { label: "Max Leverage:", value: "1:500" },
      { label: "Trading Hours:", value: "24/5" },
    ],
    btn: "Trade Indices",
    color: "bg-purple-500",
  },
  {
    icon: <Gem className="w-7 h-7 text-white" />,
    title: "Precious Metals",
    subtitle: "Gold, Silver, Platinum",
    desc: "Trade safe-haven precious metals with competitive spreads and high leverage for portfolio diversification.",
    details: [
      { label: "Min Spread:", value: "0.20", highlight: true },
      { label: "Max Leverage:", value: "1:1000" },
      { label: "Trading Hours:", value: "24/5" },
    ],
    btn: "Trade Metals",
    color: "bg-yellow-500",
  },
  {
    icon: <Droplets className="w-7 h-7 text-white" />,
    title: "Commodities",
    subtitle: "Oil, Gas, Agriculture",
    desc: "Trade essential commodities including Crude Oil, Natural Gas, and Agricultural products with competitive conditions.",
    details: [
      { label: "Min Spread:", value: "0.03", highlight: true },
      { label: "Max Leverage:", value: "1:500" },
      { label: "Trading Hours:", value: "24/5" },
    ],
    btn: "Trade Commodities",
    color: "bg-red-500",
  },
];

export default function MarketsCards() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
  key={index}
  className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between 
             transition-transform duration-300 hover:scale-105 hover:shadow-xl"
>
  {/* Icon */}
  <div className={`w-12 h-12 flex items-center justify-center rounded-full ${card.color}`}>
    {card.icon}
  </div>

  {/* Title */}
  <h3 className="text-xl font-bold mt-4">{card.title}</h3>
  <p className="text-gray-500">{card.subtitle}</p>

  {/* Description */}
  <p className="mt-4 text-gray-600 text-sm">{card.desc}</p>

  {/* Details */}
  <ul className="mt-6 space-y-2 text-sm">
    {card.details.map((d, i) => (
      <li key={i} className="flex justify-between">
        <span className="text-gray-600">{d.label}</span>
        <span className={d.highlight ? "text-orange-500 font-semibold" : "font-semibold"}>
          {d.value}
        </span>
      </li>
    ))}
  </ul>

  {/* Button */}
  <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition">
    {card.btn} →
  </button>
</div>

        ))}
      </div>
    </section>
  );
}
