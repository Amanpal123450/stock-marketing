"use client";

export default function Steps() {
  const steps = [
    {
      number: "1",
      title: "Register",
      desc: "Complete our simple registration form and verify your account in minutes.",
    },
    {
      number: "2",
      title: "Fund",
      desc: "Deposit funds using your preferred payment method. Multiple options available.",
    },
    {
      number: "3",
      title: "Trade",
      desc: "Access our MT5 platform and start trading forex, commodities, and indices.",
    },
  ];

  return (
    <section className="bg-gray-50 p-6 py-16 px-6 md:px-20 flex justify-center">
      <div className="max-w-7xl text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">
          Start Trading in{" "}
          <span className="text-orange-600">3 Easy Steps</span>
        </h2>
        <p className="text-gray-600 mb-12">
          Get started with Qorva Markets in minutes. Open your account, fund it, and start trading.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* Circle */}
              <div className="w-18 h-18 flex items-center justify-center rounded-full bg-orange-500 text-white text-xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition flex items-center justify-center gap-2">
            Start Trading Now →
          </button>
        </div>
      </div>
    </section>
  );
}
