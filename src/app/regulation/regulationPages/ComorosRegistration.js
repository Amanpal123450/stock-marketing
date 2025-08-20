// src/app/comoros-registration/page.js
import React from "react";
import { Check } from "lucide-react";

export default function ComorosRegistration() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
      <div className="bg-white shadow-md rounded-2xl max-w-2xl w-full p-8">
        {/* Circle Badge */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-100">
            <span className="text-blue-600 font-bold text-xl">KM</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900">
            Comoros Union Registration
          </h2>
          <p className="text-gray-500">Island of Mohéli - Comoros Union</p>
        </div>

        {/* Details */}
        <div className="mt-8 space-y-4">
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Company Name:</span>
            <span className="text-gray-900">Qorva Markets LTD</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-700">
              Registration Number:
            </span>
            <span className="text-gray-900">HT00324027</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Status:</span>
            <span className="text-green-600 font-semibold">Active</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Registered Office:</span>
            <span className="text-gray-900">Bonovo Road – Fomboni</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Jurisdiction:</span>
            <span className="text-gray-900">Island of Mohéli</span>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-200"></div>

        {/* Features */}
        <div className="space-y-2 text-gray-700">
          <div className="flex items-center gap-2">
            <Check className="text-green-500 w-4 h-4" />
            <span>Registered Company</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-green-500 w-4 h-4" />
            <span>Client Fund Segregation</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-green-500 w-4 h-4" />
            <span>Transparent Operations</span>
          </div>
        </div>
      </div>
    </div>
  );
}
