// src/app/security/page.js
import React from "react";

const certifications = [
  {
    title: "ISO 27001",
    subtitle: "ISO",
    desc: "Information security management system certification ensuring systematic approach to data protection.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "PCI DSS",
    subtitle: "PCI",
    desc: "Payment Card Industry Data Security Standard compliance for secure payment processing.",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "SOC 2 Type II",
    subtitle: "SOC",
    desc: "Service Organization Control 2 certification for security, availability, and confidentiality.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Extended Validation SSL",
    subtitle: "SSL",
    desc: "Highest level SSL certificate providing maximum trust and encryption strength.",
    color: "bg-red-100 text-red-600",
  },
];

export default function CertificationsSecurityPage() {
  return (
    <div className="py-16 px-6 md:px-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Security <span className="text-orange-500">Certifications</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Our commitment to security is validated by industry-leading certifications and
          compliance standards.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {certifications.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition"
          >
            {/* Circle */}
            <div
              className={`w-20 h-20 flex items-center justify-center rounded-full text-lg font-bold ${item.color}`}
            >
              {item.subtitle}
            </div>

            {/* Title */}
            <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>

            {/* Description */}
            <p className="text-gray-600 mt-3 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
