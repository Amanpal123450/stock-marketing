"use client";
import React from "react";

const paymentData = [
  {
    method: "Credit/Debit Cards",
    deposit: "Instant",
    withdrawal: "1-3 business days",
    minDeposit: "$10",
    minWithdrawal: "$10",
    fees: "Free",
  },
  {
    method: "PayPal",
    deposit: "Instant",
    withdrawal: "Within 24 hours",
    minDeposit: "$10",
    minWithdrawal: "$10",
    fees: "Free",
  },
  {
    method: "Skrill/Neteller",
    deposit: "Instant",
    withdrawal: "Within 24 hours",
    minDeposit: "$10",
    minWithdrawal: "$10",
    fees: "Free",
  },
  {
    method: "Bank Transfer",
    deposit: "1-3 business days",
    withdrawal: "1-5 business days",
    minDeposit: "$100",
    minWithdrawal: "$100",
    fees: "Free",
  },
  {
    method: "Cryptocurrencies",
    deposit: "Instant",
    withdrawal: "Within 1 hour",
    minDeposit: "$50",
    minWithdrawal: "$50",
    fees: "Network fees",
  },
];

export default function ProcessingTimes() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
      <div className="max-w-5xl w-full bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center">
          Processing Times <span className="text-orange-500">& Limits</span>
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Transparent information about processing times and transaction limits
          for all payment methods.
        </p>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-4 font-semibold">Payment Method</th>
                <th className="p-4 font-semibold">Deposit Time</th>
                <th className="p-4 font-semibold">Withdrawal Time</th>
                <th className="p-4 font-semibold">Min Deposit</th>
                <th className="p-4 font-semibold">Min Withdrawal</th>
                <th className="p-4 font-semibold">Fees</th>
              </tr>
            </thead>
            <tbody>
              {paymentData.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b last:border-none hover:bg-gray-50"
                >
                  <td className="p-4">{item.method}</td>
                  <td
                    className={`p-4 ${
                      item.deposit.includes("Instant") ? "text-green-600 font-semibold" : ""
                    }`}
                  >
                    {item.deposit}
                  </td>
                  <td
                    className={`p-4 ${
                      item.withdrawal.includes("Within") ||
                      item.withdrawal.includes("hour")
                        ? "text-green-600 font-semibold"
                        : ""
                    }`}
                  >
                    {item.withdrawal}
                  </td>
                  <td className="p-4">{item.minDeposit}</td>
                  <td className="p-4">{item.minWithdrawal}</td>
                  <td
                    className={`p-4 ${
                      item.fees === "Free" ? "text-green-600 font-semibold" : "text-gray-700"
                    }`}
                  >
                    {item.fees}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
