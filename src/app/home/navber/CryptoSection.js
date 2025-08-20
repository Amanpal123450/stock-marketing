"use client";
import Image from "next/image";

export default function CryptoSection() {
  const coins = [
    { name: "BTC", icon: "https://res.cloudinary.com/dknrega1a/image/upload/v1755513738/bitcoin_i6inku.webp" },
    { name: "ETH", icon: "https://res.cloudinary.com/dknrega1a/image/upload/v1755513708/eth_xsbhdi.webp" },
    { name: "LTC", icon: "https://res.cloudinary.com/dknrega1a/image/upload/v1755513707/litecoin_oycyaa.webp" },
    { name: "ADA", icon: "https://res.cloudinary.com/dknrega1a/image/upload/v1755513708/cardano_dvewc4.webp" },
    { name: "SOL", icon: "https://res.cloudinary.com/dknrega1a/image/upload/v1755513708/solana_d7inhk.webp" },
    { name: "USDT", icon: "https://res.cloudinary.com/dknrega1a/image/upload/v1755513708/usdt_vqzcog.webp" },
    { name: "XRP", icon: "https://res.cloudinary.com/dknrega1a/image/upload/v1755513707/xrp_mxchfu.webp" },
    { name: "DASH", icon: "https://res.cloudinary.com/dknrega1a/image/upload/v1755513707/dash_aqmhms.webp" },
    { name: "DOT", icon: "https://res.cloudinary.com/dknrega1a/image/upload/v1755513707/dot_kzohdh.webp" },
  ];

  return (
    <section className="bg-gradient-to-r from-[#f44f2a] to-[#e54829] text-white p-6 py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold mb-3">
        Trade Popular <span className="text-orange-200">Cryptocurrencies</span>
      </h2>
      <p className="text-lg text-white/90 mb-12">
        Access the most traded digital assets with competitive spreads and leverage up to 1:100
      </p>

      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {coins.map((coin, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center shadow-lg border border-white/20 hover:scale-110 transition">
              <Image
                src={coin.icon}
                alt={coin.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <p className="mt-2 text-sm font-semibold">{coin.name}</p>
          </div>
        ))}
      </div>
<div className="flex justify-center">


      <button className="bg-white text-[#e54829] px-6 py-3 rounded-xl font-semibold shadow-lg flex items-center gap-2 hover:scale-105 transition">
        Start Crypto Trading →
      </button>
      </div>
    </section>
  );
}
