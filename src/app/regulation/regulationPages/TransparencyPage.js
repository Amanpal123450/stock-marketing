// src/app/transparency/page.js
import React from "react";
import { FileBarChart, FileText, AlertTriangle } from "lucide-react";

export default function TransparencyPage() {
  const items = [
    {
      icon: <FileBarChart className="w-8 h-8 text-orange-500" />,
      title: "Financial Reports",
      description:
        "Annual audited financial statements published by independent auditors",
      link: "View Reports →",
      linkColor: "text-orange-500",
      bg: "bg-orange-100",
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: "Regulatory Filings",
      description:
        "Regular submissions to regulatory authorities demonstrating compliance",
      link: "View Filings →",
      linkColor: "text-orange-500",
      bg: "bg-blue-100",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-yellow-500" />,
      title: "Risk Disclosures",
      description:
        "Comprehensive risk warnings and disclosures for informed trading decisions",
      link: "View Disclosures →",
      linkColor: "text-orange-500",
      bg: "bg-yellow-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Transparency <span className="text-orange-500">& Reporting</span>
        </h2>
        <p className="text-gray-600 mt-4">
          We maintain the highest standards of transparency through regular
          reporting and independent audits.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <div
              className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${item.bg} mb-4`}
            >
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <a href="#" className={`font-medium ${item.linkColor}`}>
              {item.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
