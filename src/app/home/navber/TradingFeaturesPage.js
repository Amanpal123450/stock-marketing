"use client";

import { useState } from "react";

export default function TradingFeaturesPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCreateAccount = () => {
    console.log("Creating live account...");
    // router.push("/signup") - Add your Next.js routing here
    alert("Redirecting to account creation...");
  };

  const handleTryDemo = () => {
    console.log("Opening demo account...");
    // router.push("/demo") - Add your Next.js routing here  
    alert("Opening demo platform...");
  };

  const features = [
    {
      id: 1,
      icon: "⚡",
      iconBg: "bg-blue-500",
      title: "Ultra-Fast Execution",
      description: "Experience lightning-fast trade execution with our cutting-edge infrastructure. No delays, no requeues.",
      benefits: ["Under 30ms execution", "99.9% uptime"],
      checkmarks: true
    },
    {
      id: 2,
      icon: "💰",
      iconBg: "bg-orange-500",
      title: "Competitive Trading Costs",
      description: "Enjoy some of the tightest spreads in the industry with transparent pricing and no hidden fees.",
      benefits: ["Spreads from 0.0 pips", "No hidden charges"],
      checkmarks: true
    },
    {
      id: 3,
      icon: "🛡️",
      iconBg: "bg-purple-500",
      title: "Secure & Regulated",
      description: "Trade with peace of mind knowing your funds are protected and we operate under strict regulatory oversight.",
      benefits: ["Segregated accounts", "SSL encryption"],
      checkmarks: true
    }
  ];

  const stats = [
    { number: "500+", label: "Trading Instruments", color: "text-orange-500" },
    { number: "24/5", label: "Customer Support", color: "text-orange-500" },
    { number: "0.0", label: "Spreads From", color: "text-orange-500" },
    { number: "1:500", label: "Max Leverage", color: "text-orange-500" }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 py-16 px-6 md:px-20 ">
         <section className="bg-gray-50 py-16 px-4 text-center">
      {/* Small Badge */}
      <div className="inline-block bg-orange-100 text-orange-600 font-semibold px-4 py-1 rounded-full text-sm mb-6">
        WHY CHOOSE US
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
        Start Trading with Confidence
      </h2>

      {/* Sub Text */}
      <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        Join a trusted broker that combines cutting-edge technology with
        exceptional service to deliver the ultimate trading experience.
      </p>
    </section> 

      <div className="container mx-auto py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Features Section */}
          <div className="lg:col-span-2 space-y-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 "
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-start gap-4 flex-col">
                  <div className={`${feature.iconBg} w-16 h-16 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0`}>
                  <h5>  {feature.icon}</h5>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex flex-wrap gap-6">
                      {feature.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 md:p-10 text-white sticky top-6 w-full max-w-[450px] mx-auto shadow-lg">

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-3">Ready to Start Trading?</h2>
                <p className="text-white/90 text-sm leading-relaxed">
                  Join thousands of successful traders and experience the difference with Qorva Markets.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Open account in 3 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Start with as low as $100</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">24/5 dedicated support</span>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleCreateAccount}
                  className="w-full bg-white text-orange-600 font-bold py-4 px-6 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Create Live Account
                </button>
                <button
                  onClick={handleTryDemo}
                  className="w-full bg-white/20 text-white font-bold py-4 px-6 rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Try Demo First
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer p-4 rounded-xl shadow-lg bg-white/5 backdrop-blur-md"
              onMouseEnter={() => setHoveredCard(`stat-${index}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`text-4xl md:text-5xl font-black mb-2 ${stat.color} transition-all duration-300 ${hoveredCard === `stat-${index}` ? 'scale-110' : ''}`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
  <p className="text-gray-500 text-sm mb-6">
    Trusted by traders worldwide
  </p>

  <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 opacity-60">
    <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">
      REGULATED
    </div>
    <div className="hidden sm:block w-2 h-2 bg-gray-400 rounded-full"></div>

    <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">
      SECURE
    </div>
    <div className="hidden sm:block w-2 h-2 bg-gray-400 rounded-full"></div>

    <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">
      LICENSED
    </div>
  </div>
</div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .group:hover .animate-float {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}