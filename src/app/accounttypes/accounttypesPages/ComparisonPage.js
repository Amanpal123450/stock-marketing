"use client";
import { motion } from "framer-motion";

export default function ComparisonPage() {
  const plans = [
    {
      name: "Standard",
      color: "text-blue-600",
      values: ["$100", "1.0 pips", "$0", "1:500"],
    },
    {
      name: "Raw",
      color: "text-orange-500",
      values: ["$500", "0.0 pips", "$3.50/lot", "1:500"],
    },
    {
      name: "Pro",
      color: "text-purple-600",
      values: ["$10,000", "-0.1 pips", "$2.50/lot", "1:1000"],
    },
  ];

  const features = [
    "Minimum Deposit",
    "EUR/USD Spread",
    "Commission",
    "Maximum Leverage",
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-4"
      >
        Detailed <span className="text-orange-500">Comparison</span>
      </motion.h1>

      <p className="text-gray-600 text-center max-w-2xl mb-10">
        Compare all account features side by side to make the best choice for
        your trading needs.
      </p>

      {/* Table */}
      <div className="overflow-x-auto w-full max-w-5xl">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-4 font-semibold text-gray-800">Feature</th>
                {plans.map((plan, i) => (
                  <th
                    key={i}
                    className={`p-4 font-semibold ${plan.color} text-center`}
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, rowIdx) => (
                <tr
                  key={rowIdx}
                  className={rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="p-4 font-medium text-gray-800">
                    {feature}
                  </td>
                  {plans.map((plan, i) => (
                    <td
                      key={i}
                      className={`p-4 text-center font-medium ${
                        plan.values[rowIdx].includes("pips") &&
                        plan.values[rowIdx].includes("0")
                          ? plan.color
                          : ""
                      }`}
                    >
                      {plan.values[rowIdx]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
