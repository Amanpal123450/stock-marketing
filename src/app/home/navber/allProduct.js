"use client";
import { FaBolt, FaDollarSign, FaCheckCircle } from "react-icons/fa";

export default function AllProduct() {
  const features = [
    {
      icon: <FaBolt className="text-orange-500 text-3xl" />,
      title: "500+ Instruments",
      desc: "Access over 500 trading instruments across all major asset classes",
    },
    {
      icon: <FaDollarSign className="text-green-500 text-3xl" />,
      title: "Tight Spreads",
      desc: "Competitive spreads starting from 0.0 pips* on major currency pairs",
    },
    {
      icon: <FaCheckCircle className="text-blue-500 text-3xl" />,
      title: "No Hidden Fees",
      desc: "Transparent pricing with no hidden fees or commissions",
    },
  ];

  return (
    <div className="flex justify-center items-center bg-gray-50 p-6 py-16 px-6 md:px-20">
      <div className="bg-white shadow-md rounded-2xl p-10 w-full max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="border border-orange-500 text-orange-500 font-medium px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition">
            View All Products →
          </button>
        </div>
      </div>
    </div>
  );
}
