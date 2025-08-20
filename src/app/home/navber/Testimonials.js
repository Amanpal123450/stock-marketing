"use client";

import { Star } from "lucide-react";

export default function Testimonials() {
 const reviews = [
  {
    name: "Alex Thompson",
    role: "Forex Trader • 2 years experience",
    verified: "Verified trader since March 2024",
    rating: 5,
    text: `"I've been trading with Qorva for 8 months now. The platform is stable, spreads are competitive, and withdrawals are processed quickly. Customer service responds within a few hours which is impressive."`,
  },
  {
    name: "Maria Santos",
    role: "Swing Trader • 4 years experience",
    verified: "Verified trader since June 2024",
    rating: 4,
    text: `"Switched from my previous broker 6 months ago. The MT5 platform works smoothly and execution is fast. Only minor issue is sometimes the website loads slowly during peak hours."`,
  },
  {
    name: "James Mitchell",
    role: "Part-time Trader • 1 year experience",
    verified: "Verified trader since August 2024",
    rating: 5,
    text: `"Great broker for beginners. Their educational materials helped me understand the basics. Demo account works perfectly and live account transition was smooth. No hidden fees."`,
  },
  {
    name: "David Kim",
    role: "Commodities Trader • 3 years experience",
    verified: "Verified trader since January 2024",
    rating: 4,
    text: `"Been using Qorva for commodity trading for over a year. Spreads on gold and oil are reasonable. Withdrawal took 3 business days last time, which is acceptable."`,
  },
  {
    name: "Rachel Green",
    role: "Day Trader • 5 years experience",
    verified: "Verified trader since May 2024",
    rating: 5,
    text: `"Solid platform for scalping strategies. Order execution is reliable and slippage is minimal. Mobile app could use some improvements but web platform is excellent."`,
  },
  {
    name: "Robert Wang",
    role: "Position Trader • 6 years experience",
    verified: "Verified trader since July 2024",
    rating: 4,
    text: `"Account verification took about 24 hours which was faster than expected. Trading conditions are fair and transparent. Would recommend for intermediate traders."`,
  },
];


  return (
    <section className="bg-white p-6 py-16 px-6 md:px-20 flex justify-center">
      <div className="max-w-6xl text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">
          What Our <span className="text-orange-600">Traders Say</span>
        </h2>
        <p className="text-gray-600 mb-12">
          Real feedback from traders who have chosen Qorva Markets for their trading journey.
        </p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       {reviews.map((review, idx) => (
  <div
    key={idx}
    className="bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-orange-500 text-left 
               hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
  >
    {/* Stars */}
    <div className="flex items-center mb-3">
      {Array.from({ length: review.rating }).map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
      ))}
      {review.rating < 5 &&
        Array.from({ length: 5 - review.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-gray-300" />
        ))}
      <span className="ml-2 text-gray-700 font-medium">{review.rating}.0</span>
    </div>

    {/* Review Text */}
    <p className="text-gray-700 mb-4 text-sm">{review.text}</p>

    {/* Divider */}
    <hr className="my-3" />

    {/* User Info */}
    <div>
      <p className="font-semibold">{review.name}</p>
      <p className="text-gray-500 text-sm">{review.role}</p>
      <p className="text-gray-400 text-xs">{review.verified}</p>
    </div>
  </div>
))}

        </div>
      </div>
    </section>
  );
}
