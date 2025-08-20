"use client";
import { Zap, DollarSign, CircleDot, ShieldCheck } from "lucide-react";

export default function MoneyManagementPage() {
  const features = [
    {
      icon: <Zap className="w-7 h-7 text-green-600" />,
      bg: "bg-green-100",
      title: "Instant Deposits",
      desc: "Funds available immediately in your trading account",
    },
    {
      icon: <DollarSign className="w-7 h-7 text-blue-600" />,
      bg: "bg-blue-100",
      title: "Same-Day Withdrawals",
      desc: "Get your profits within 24 hours",
    },
    {
      icon: <CircleDot className="w-7 h-7 text-orange-600" />,
      bg: "bg-orange-100",
      title: "No Hidden Fees",
      desc: "Transparent pricing with no surprise charges",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-purple-600" />,
      bg: "bg-purple-100",
      title: "Bank-Grade Security",
      desc: "SSL encryption and PCI DSS compliance",
    },
  ];

  return (
    <div className="bg-white flex flex-col items-center py-16 px-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">
        Seamless <span className="text-orange-500">Money Management</span>
      </h1>
      <p className="text-gray-600 text-center max-w-2xl mb-12">
        Experience the fastest and most secure way to manage your trading funds
        with our comprehensive payment solutions.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl w-full">
        {features.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div
  className={`w-20 h-20 rounded-full flex items-center justify-center ${item.bg} 
  transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:${item.bg}`}
>
  {item.icon}
</div>

            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-gray-600 text-sm max-w-[200px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
