"use client";
import React, { useEffect, useState } from "react";

export default function ServerTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Format HH:MM:SS
  const formatTime = (date) =>
    date.toLocaleTimeString("en-GB", { hour12: false });

  // Market status (Sunday 22:00 - Friday 22:00 GMT)
  const getMarketStatus = () => {
    const day = time.getUTCDay();
    const hours = time.getUTCHours();
    const minutes = time.getUTCMinutes();

    // Market opens Sunday 22:00 GMT
    if (day === 0 && (hours > 22 || (hours === 22 && minutes >= 0))) {
      return "OPEN";
    }
    // Market open Monday - Thursday
    if (day >= 1 && day <= 4) {
      return "OPEN";
    }
    // Friday before 22:00
    if (day === 5 && hours < 22) {
      return "OPEN";
    }
    return "CLOSED";
  };

  const marketStatus = getMarketStatus();

  return (
    <div className="min-h-screen bg-white py-12 px-4 flex flex-col items-center">
      {/* Server Time Card */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl shadow-lg p-10 text-center w-full max-w-3xl">
        <h1 className="text-2xl font-bold">Current Server Time</h1>
        <p className="mt-4 text-5xl font-mono">{formatTime(time)}</p>
        <p className="mt-2 text-lg">GMT+0 (Server Time)</p>

        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="font-semibold">
            Market Status:{" "}
            <span
              className={`${
                marketStatus === "OPEN" ? "text-green-400" : "text-red-400"
              }`}
            >
              {marketStatus}
            </span>
          </span>
        </div>
      </div>

      {/* Info Boxes */}
      <div className="grid md:grid-cols-3 gap-6 mt-12 w-full max-w-5xl">
        <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
          <h2 className="font-semibold text-lg">24/5 Trading</h2>
          <p className="text-gray-600 mt-2">Sunday 22:00 - Friday 22:00 GMT</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
          <h2 className="font-semibold text-lg">Multiple Sessions</h2>
          <p className="text-gray-600 mt-2">Asia, Europe, America & Pacific</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
          <h2 className="font-semibold text-lg">Extended Hours</h2>
          <p className="text-gray-600 mt-2">
            Some instruments trade beyond standard hours
          </p>
        </div>
      </div>
    </div>
  );
}
