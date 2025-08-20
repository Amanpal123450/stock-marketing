// src/app/security/page.js

import React from "react";
import { CheckCircle, ShieldCheck } from "lucide-react";

export default function SecurityPageinsec() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Advanced <span className="text-orange-500">Security Features</span>
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Comprehensive security measures designed to protect every aspect of
            your trading experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left - Data Protection */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Data Protection</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold">End-to-End Encryption</p>
                  <p className="text-gray-600 text-sm">
                    All sensitive data is encrypted both in transit and at rest
                    using AES-256 encryption standards.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold">GDPR Compliance</p>
                  <p className="text-gray-600 text-sm">
                    Full compliance with European data protection regulations
                    ensuring your privacy rights.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold">Secure Data Storage</p>
                  <p className="text-gray-600 text-sm">
                    Personal and financial data stored in geographically
                    distributed, secured data centers.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold">Regular Backups</p>
                  <p className="text-gray-600 text-sm">
                    Frequent backups to ensure data integrity and disaster
                    recovery capability.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right - Access Control */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Access Control</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <ShieldCheck className="text-blue-500 w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold">Multi-Factor Authentication</p>
                  <p className="text-gray-600 text-sm">
                    Mandatory 2FA for account access with support for SMS, email,
                    and authenticator apps.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="text-blue-500 w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold">IP Whitelisting</p>
                  <p className="text-gray-600 text-sm">
                    Restrict account access to specific IP addresses for enhanced
                    security control.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="text-blue-500 w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold">Session Management</p>
                  <p className="text-gray-600 text-sm">
                    Automatic session timeouts and concurrent session limits to
                    prevent unauthorized access.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="text-blue-500 w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold">Device Recognition</p>
                  <p className="text-gray-600 text-sm">
                    Detects new or unrecognized devices and prompts for
                    additional verification.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
