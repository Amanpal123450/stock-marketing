"use client";
import React from "react";

const steps = [
  {
    number: "1",
    title: "Choose Payment Method",
    description:
      "Select your preferred payment method from our comprehensive list of options.",
    color: "bg-orange-500",
  },
  {
    number: "2",
    title: "Enter Amount",
    description:
      "Specify the amount you want to deposit or withdraw from your trading account.",
    color: "bg-blue-600",
  },
  {
    number: "3",
    title: "Confirm Transaction",
    description:
      "Review and confirm your transaction. Funds will be processed according to the method's timeline.",
    color: "bg-green-600",
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex justify-center">
      <div className="max-w-6xl w-full text-center">
        <h1 className="text-3xl font-bold">
          How It <span className="text-orange-500">Works</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Simple 3-step process to fund your account and start trading within
          minutes.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* Circle Number */}
              <div
                className={`${step.color} text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold`}
              >
                {step.number}
              </div>

              {/* Title */}
              <h2 className="mt-6 text-lg font-semibold text-gray-900">
                {step.title}
              </h2>

              {/* Description */}
              <p className="mt-2 text-gray-600 max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
