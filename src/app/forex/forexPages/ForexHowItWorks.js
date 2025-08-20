"use client";

import { Server } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Choose Your Currency Pair",
    description:
      "Select from 80+ currency pairs including majors like EUR/USD, GBP/USD, and exotic pairs.",
  },
  {
    id: 2,
    title: "Analyze the Market",
    description:
      "Use technical and fundamental analysis to determine market direction and entry points.",
  },
  {
    id: 3,
    title: "Execute Your Trade",
    description:
      "Place your buy or sell order through our MT5 platform with lightning-fast execution.",
  },
];

export default function ForexHowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Forex Trading Works
          </h2>
          <p className="text-gray-600 mb-8">
            Forex trading involves buying one currency while simultaneously
            selling another. Currency pairs are quoted in terms of one currency
            relative to another.
          </p>

          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.id} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">
                    {step.id}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-10 flex flex-col items-center text-center shadow-sm">
          <Server className="w-16 h-16 text-orange-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            MT5 Trading Platform
          </h3>
          <p className="text-gray-600 text-sm">
            Professional trading tools at your fingertips
          </p>
        </div>
      </div>
    </section>
  );
}
