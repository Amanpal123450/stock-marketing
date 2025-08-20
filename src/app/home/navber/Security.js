"use client";
import { FaLock, FaShieldAlt, FaLifeRing, FaCertificate } from "react-icons/fa";

export default function Security() {
  const features = [
    {
      icon: FaShieldAlt,
      bg: "bg-green-100",
      iconColor: "text-green-600",
      title: "Segregated Funds",
      desc: "Client funds are kept separate from company funds in top-tier banks.",
    },
    {
      icon: FaLock,
      bg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "SSL Encryption",
      desc: "Bank-level 256-bit SSL encryption protects all your personal data.",
    },
    {
      icon: FaCertificate,
      bg: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Licensed & Regulated",
      desc: "Fully licensed and regulated by top-tier financial authorities.",
    },
    {
      icon: FaLifeRing,
      bg: "bg-orange-100",
      iconColor: "text-orange-600",
      title: "24/7 Support",
      desc: "Round-the-clock customer support in multiple languages.",
    },
  ];

  return (
    <div className="bg-white flex justify-center p-6 py-16 px-6 md:px-20">
      <div className="max-w-7xl text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-orange-600">Security</span> & Regulation
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Your safety is our priority. Trade with confidence knowing your funds
          are protected and we operate under strict regulatory oversight.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {features.map((item, idx) => {
            const Icon = item.icon; // <-- Yeh line add karni zaroori hai
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-md transition"
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${item.bg}`}
                >
                  <Icon className={`${item.iconColor} text-3xl`} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="px-6 py-3 border border-orange-500 text-orange-600 font-medium rounded-lg hover:bg-orange-500 hover:text-white transition">
            Learn More About Security →
          </button>
        </div>
      </div>
    </div>
  );
}
