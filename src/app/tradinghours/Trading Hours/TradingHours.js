"use client";
import React, { useEffect, useState } from "react";

const sessions = [
  {
    name: "Sydney Session",
    open: { hour: 22, day: 0 }, // Sunday 22:00 GMT
    close: { hour: 7, day: 1 }, // Monday 07:00 GMT
  },
  {
    name: "Tokyo Session",
    open: { hour: 0, day: null }, // Daily 00:00 GMT
    close: { hour: 9, day: null }, // Daily 09:00 GMT
  },
  {
    name: "London Session",
    open: { hour: 8, day: null }, // Daily 08:00 GMT
    close: { hour: 17, day: null }, // Daily 17:00 GMT
  },
  {
    name: "New York Session",
    open: { hour: 13, day: null }, // Daily 13:00 GMT
    close: { hour: 22, day: 5 }, // Friday 22:00 GMT
  },
];

export default function TradingHours() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const getStatus = (session) => {
    const day = time.getUTCDay();
    const hour = time.getUTCHours();
    const minutes = time.getUTCMinutes();

    // Sydney special case: opens Sunday 22:00 -> closes Monday 07:00
    if (session.name === "Sydney Session") {
      if (day === 0 && hour >= 22) return "Active";
      if (day === 1 && (hour < 7 || (hour === 7 && minutes === 0))) return "Active";
      return "Inactive";
    }

    // New York session ends Friday 22:00
    if (session.name === "New York Session") {
      if (day === 5 && hour >= 22) return "Inactive";
    }

    // Generic check for open-close range
    if (hour >= session.open.hour && hour < session.close.hour) {
      return "Active";
    }
    return "Inactive";
  };

  return (<>
    <div className="m bg-gray-50 py-12 px-4 flex justify-center">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center">
          Trading Hours by Market
        </h1>
        <p className="text-gray-600 text-center mt-2">
          All times are shown in GMT+0 (Greenwich Mean Time). Please note that
          trading hours may vary during holidays and daylight saving time
          changes.
        </p>

        {/* Card */}
        <div className="mt-10 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white px-6 py-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              💲 Forex Markets
            </h2>
            <p className="text-sm">Major currency pairs available 24/5</p>
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4">Session</th>
                <th className="p-4">Open Time (GMT)</th>
                <th className="p-4">Close Time (GMT)</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session, idx) => {
                const status = getStatus(session);
                return (
                  <tr
                    key={idx}
                    className="border-b last:border-none hover:bg-gray-50"
                  >
                    <td className="p-4 font-medium">{session.name}</td>
                    <td className="p-4">
                      {session.open.hour.toString().padStart(2, "0")}:00{" "}
                      {session.open.day === 0
                        ? "Sunday"
                        : session.open.day === 5
                        ? "Friday"
                        : ""}
                    </td>
                    <td className="p-4">
                      {session.close.hour.toString().padStart(2, "0")}:00{" "}
                      {session.close.day === 1
                        ? "Monday"
                        : session.close.day === 5
                        ? "Friday"
                        : ""}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>

     <div className=" bg-gray-50 py-12 px-4 flex justify-center">
      <div className="max-w-5xl w-full">
        {/* Header */}

        {/* Card */}
        <div className="mt-10 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              💲 Forex Markets
            </h2>
            <p className="text-sm">Major currency pairs available 24/5</p>
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4">Session</th>
                <th className="p-4">Open Time (GMT)</th>
                <th className="p-4">Close Time (GMT)</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session, idx) => {
                const status = getStatus(session);
                return (
                  <tr
                    key={idx}
                    className="border-b last:border-none hover:bg-gray-50"
                  >
                    <td className="p-4 font-medium">{session.name}</td>
                    <td className="p-4">
                      {session.open.hour.toString().padStart(2, "0")}:00{" "}
                      {session.open.day === 0
                        ? "Sunday"
                        : session.open.day === 5
                        ? "Friday"
                        : ""}
                    </td>
                    <td className="p-4">
                      {session.close.hour.toString().padStart(2, "0")}:00{" "}
                      {session.close.day === 1
                        ? "Monday"
                        : session.close.day === 5
                        ? "Friday"
                        : ""}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>


     <div className=" bg-gray-50 py-12 px-4 flex justify-center">
      <div className="max-w-5xl w-full">
        {/* Header */}

        {/* Card */}
        <div className="mt-10 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              💲 Forex Markets
            </h2>
            <p className="text-sm">Major currency pairs available 24/5</p>
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4">Session</th>
                <th className="p-4">Open Time (GMT)</th>
                <th className="p-4">Close Time (GMT)</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session, idx) => {
                const status = getStatus(session);
                return (
                  <tr
                    key={idx}
                    className="border-b last:border-none hover:bg-gray-50"
                  >
                    <td className="p-4 font-medium">{session.name}</td>
                    <td className="p-4">
                      {session.open.hour.toString().padStart(2, "0")}:00{" "}
                      {session.open.day === 0
                        ? "Sunday"
                        : session.open.day === 5
                        ? "Friday"
                        : ""}
                    </td>
                    <td className="p-4">
                      {session.close.hour.toString().padStart(2, "0")}:00{" "}
                      {session.close.day === 1
                        ? "Monday"
                        : session.close.day === 5
                        ? "Friday"
                        : ""}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>



     




   
    </>
  );
}
