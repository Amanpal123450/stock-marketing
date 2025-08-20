// src/app/security-support/page.js
import React from "react";
import { Mail, MessageCircle, AlertTriangle } from "lucide-react";

const supportOptions = [
  {
    title: "Email Support",
    desc: "info@qorvamarkets.com",
    icon: <Mail className="w-6 h-6 text-orange-500" />,
    bg: "bg-orange-50",
  },
  {
    title: "Live Chat",
    desc: "Available 24/7 in client portal",
    icon: <MessageCircle className="w-6 h-6 text-blue-500" />,
    bg: "bg-blue-50",
  },
  {
    title: "Emergency Hotline",
    desc: "+971-50-8596-279",
    icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
    bg: "bg-red-50",
  },
];

export default function SecuritySupport() {
  return (
    <div className="py-16 px-6 md:px-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Security <span className="text-orange-500">Support</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Our security team is available 24/7 to assist with any security-related
          concerns or incidents.
        </p>
      </div>

      {/* Support Options */}
      <div className="grid gap-10 md:grid-cols-3 max-w-5xl mx-auto text-center">
        {supportOptions.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Icon Circle */}
            <div
              className={`w-20 h-20 flex items-center justify-center rounded-full ${item.bg}`}
            >
              {item.icon}
            </div>
            <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Security Alert */}
      <div className="max-w-3xl mx-auto mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6 flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
        <div>
          <h4 className="font-semibold text-yellow-700">Security Alert</h4>
          <p className="text-gray-700 mt-1 text-sm">
            Qorva Markets will never ask for your password, PIN, or 2FA codes via
            email or phone. If you receive such requests, please contact our
            security team immediately.
          </p>
        </div>
      </div>
    </div>
  );
}
