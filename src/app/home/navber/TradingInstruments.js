"use client";
import Image from "next/image";
import Link from "next/link";

export default function TradingInstruments() {
  const instruments = [
  {
    title: "Forex",
    desc: "Trade major, minor, and exotic currency pairs with competitive spreads from 0.0 pips",
    img: "https://res.cloudinary.com/dknrega1a/image/upload/v1755506025/forex_ztrbie.png", 
    link: "/trading/forex",
  },
  {
    title: "Indices",
    desc: "Trade global stock indices including S&P 500, NASDAQ, DAX, and FTSE with tight spreads",
    img: "https://res.cloudinary.com/dknrega1a/image/upload/v1755506025/indices_noehtc.png",
    link: "/trading/indices",
  },
  {
    title: "Stocks",
    desc: "Access shares of leading companies from US, European, and Asian markets worldwide",
    img: "https://res.cloudinary.com/dknrega1a/image/upload/v1755506013/commodities_gtd7wy.png",
    link: "/trading/stocks",
  },
  {
    title: "Commodities",
    desc: "Trade energy, agricultural, and raw material commodities with competitive pricing",
    img: "https://res.cloudinary.com/dknrega1a/image/upload/v1755506013/stocks_mm3jta.png",
    link: "/trading/commodities",
  },
  {
    title: "Metals",
    desc: "Trade precious metals including Gold, Silver, Platinum, and Palladium with low spreads",
    img: "https://res.cloudinary.com/dknrega1a/image/upload/v1755506013/crypto_ex4fau.png",
    link: "/trading/metals",
  },
  {
    title: "Crypto",
    desc: "Trade popular cryptocurrencies like Bitcoin, Ethereum, and more with instant execution",
    img: "https://res.cloudinary.com/dknrega1a/image/upload/v1755506013/metals_wpgwxt.png",
    link: "/trading/crypto",
  },
];


  return (
    <section className="bg-gray-50 p-6 py-16 px-6 md:px-20 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Explore Our <span className="text-orange-600">Trading Instruments</span>
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Access a diverse range of financial markets with competitive spreads,
        fast execution, and deep liquidity across all major asset classes.
      </p>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {instruments.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            {/* Image */}
            <div className="relative w-full h-52">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-left">
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
              <Link
                href={item.link}
                className="text-orange-600 font-semibold flex items-center gap-1 hover:underline"
              >
                Start Trading →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
