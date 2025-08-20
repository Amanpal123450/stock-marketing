"use client";
import { useState, useEffect } from "react";

export default function Banner() {
  const [profit, setProfit] = useState(2847.50);

  const handleStart = () => {
    console.log("🚀 Start Dominating button clicked!");
    // Add your navigation logic here - could be window.location.href = "/signup" or custom routing
    alert("Redirecting to signup page...");
  };

  const handleDemo = () => {
    console.log("💻 Demo Terminal button clicked!");
    // Add your navigation logic here - could be window.location.href = "/demo" or custom routing  
    alert("Opening demo terminal...");
  };

  // Dynamic profit updates
  useEffect(() => {
    const interval = setInterval(() => {
      setProfit(prev => prev + (Math.random() - 0.5) * 50);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#ff6b35] rounded-full animate-pulse"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`
            }}
          />
        ))}
      </div>

      {/* Market Alert */}
      <div className="absolute top-6 right-6 bg-black/80 border border-[#ff6b35] rounded-lg p-4 backdrop-blur-md animate-slide-in">
        <div className="text-[#ff6b35] text-xs font-bold mb-1">MARKET ALERT</div>
        <div className="text-white text-sm mb-1">NFP Release</div>
        <div className="text-white text-sm mb-1">High Impact Event</div>
        <div className="text-gray-400 text-xs">15:30 GMT Today</div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Header Section */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md mb-6 md:mb-0 animate-pulse-glow w-[200px]">
    <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">
      PROFITABLE TRADE
    </div>
    <div className="text-[#00ff88] text-2xl font-bold mb-1">
      +${profit.toFixed(2)}
    </div>
    <div className="text-gray-500 text-xs">
      EUR/USD Long Position<br />
      Closed: +247 pips
    </div>
  </div>
        <div className="flex flex-col md:flex-row justify-center items-center mb-16 gap-8">
  {/* Profit Card */}


  {/* Top CTA Button */}
  <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ff6b35] to-[#ff8e53] text-white text-sm font-bold uppercase shadow-lg shadow-[#ff6b35]/30 hover:shadow-[#ff6b35]/50 hover:-translate-y-1 transition-all duration-300">
    ⚡ UNLEASH YOUR TRADING POWER
  </button>
</div>


        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6">
            <span className="text-white block animate-glow">DOMINATE</span>
            <span className="bg-gradient-to-r from-[#ff6b35] to-[#ff8e53] bg-clip-text text-transparent block">
              THE MARKETS
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-2">
            Where <span className="text-[#ff6b35] font-semibold">Elite Traders</span> Execute
          </p>
          <p className="text-xl text-gray-300">
            Institutional-Grade Strategies
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 lg:px-18">
          <div className="bg-white/5 border border-white/10 rounded-xl text-center backdrop-blur-md hover:border-[#ff6b35] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden p-[20px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <h2 className="text-4xl font-bold text-[#00ff88] mb-3">0.0</h2>
            <p className="text-gray-300 text-sm font-semibold uppercase tracking-wider mb-1">SPREADS</p>
            <p className="text-gray-500 text-xs">From zero pips</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl text-center backdrop-blur-md hover:border-[#ff6b35] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden p-[20px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <h2 className="text-4xl font-bold text-white mb-3">12ms</h2>
            <p className="text-gray-300 text-sm font-semibold uppercase tracking-wider mb-1">EXECUTION</p>
            <p className="text-gray-500 text-xs">Lightning speed</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl text-center backdrop-blur-md hover:border-[#ff6b35] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden p-[20px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <h2 className="text-4xl font-bold text-[#ff6b35] mb-3">500+</h2>
            <p className="text-gray-300 text-sm font-semibold uppercase tracking-wider mb-1">INSTRUMENTS</p>
            <p className="text-gray-500 text-xs">Global markets</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl text-center backdrop-blur-md hover:border-[#ff6b35] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden p-[20px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <h2 className="text-4xl font-bold text-[#4a9eff] mb-3">1:500</h2>
            <p className="text-gray-300 text-sm font-semibold uppercase tracking-wider mb-1">LEVERAGE</p>
            <p className="text-gray-500 text-xs">Maximum power</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-16">
          <button
            onClick={handleStart}
            className="px-10 py-5 bg-gradient-to-r from-[#ff6b35] to-[#ff8e53] rounded-full text-white text-lg font-bold uppercase tracking-wider shadow-xl shadow-[#ff6b35]/40 hover:shadow-[#ff6b35]/60 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">START DOMINATING →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff8e53] to-[#ff6b35] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={handleDemo}
            className="px-10 py-5 bg-transparent border-2 border-[#4a9eff] rounded-full text-[#4a9eff] text-lg font-bold uppercase tracking-wider hover:bg-[#4a9eff] hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            DEMO TERMINAL 💻
          </button>
        </div>

        {/* Footer */}
        <div className="text-center border-t border-white/10 pt-8">
          <p className="text-gray-300 text-lg font-semibold mb-6">
            JOIN 50,000+ ELITE TRADERS
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#ff6b35] rounded-full animate-pulse"></div>
              <span className="uppercase tracking-wider">MARKETS OPEN</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#4a9eff] rounded-full animate-pulse"></div>
              <span className="uppercase tracking-wider">REAL-TIME DATA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#ff6b35] rounded-full animate-pulse"></div>
              <span className="uppercase tracking-wider">INSTANT EXECUTION</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(255, 107, 53, 0.5);
          }
          50% {
            text-shadow: 0 0 30px rgba(255, 107, 53, 0.8), 0 0 40px rgba(255, 107, 53, 0.3);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 255, 136, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(0, 255, 136, 0.4);
          }
        }
        
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-slide-in {
          animation: slide-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}