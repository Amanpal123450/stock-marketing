"use client";
import { FaUser, FaBolt, FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

export default function PopularPlan() {
  const accounts = [
    {
      icon: <FaUser className="text-blue-500 text-3xl" />,
      title: "Standard",
      subtitle: "Perfect for beginners",
      features: [
        "From 1.0 pips spreads",
        "Up to 1:500 leverage",
        "$100 minimum deposit",
      ],
      button: "Learn More",
      highlight: false,
    },
    {
      icon: <FaBolt className="text-orange-500 text-3xl" />,
      title: "Raw",
      subtitle: "For active traders",
      features: [
        "From 0.0 pips spreads",
        "Up to 1:500 leverage",
        "$500 minimum deposit",
      ],
      button: "Open Account",
      highlight: true,
    },
    {
      icon: <FaStar className="text-purple-500 text-3xl" />,
      title: "Pro",
      subtitle: "For professional traders",
      features: [
        "Institutional spreads",
        "Up to 1:1000 leverage",
        "$10,000 minimum deposit",
      ],
      button: "Learn More",
      highlight: false,
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-50 p-6 py-16 px-6 md:px-20">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
        Choose Your <span className="text-orange-500">Account Type</span>
      </h2>
      <p className="text-gray-600 text-center mb-10">
        Select the perfect account type that matches your trading style and experience level.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {accounts.map((item, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-xl p-8 shadow-md border transition hover:shadow-lg flex flex-col items-center
              ${item.highlight ? "border-orange-500" : "border-gray-200"}`}
          >
            {/* Most Popular Badge */}
            {item.highlight && (
              <span className="absolute -top-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-4">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-500 mb-6">{item.subtitle}</p>

            {/* Features */}
            <ul className="space-y-3 text-gray-600 mb-8">
              {item.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheck className="text-green-500" /> {f}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`w-full py-3 rounded-lg font-medium transition ${
                item.highlight
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.button}
            </button>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <p className="text-xs text-gray-400 mt-6 text-center max-w-2xl">
        * All spreads, leverage ratios, and minimum deposits shown are typical/indicative values for illustration purposes only. 
        Actual trading conditions may vary based on market conditions, account equity, and regulatory requirements. 
        Trading conditions are subject to change without notice.
      </p>
    </div>
  );
}
