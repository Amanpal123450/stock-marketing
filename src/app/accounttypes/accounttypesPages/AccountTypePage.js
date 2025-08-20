"use client";

export default function AccountTypePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start py-16 px-6">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
        Find Your Perfect{" "}
        <span className="text-orange-600">Account Type</span>
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-gray-600 text-center max-w-2xl text-lg">
        Compare our three account types and choose the one that best suits your
        trading goals and experience level.
      </p>

      {/* Notice Box */}
      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-4xl text-center shadow-sm">
        <p className="text-sm text-yellow-900 leading-relaxed">
          <span className="font-bold">Important Notice:</span> All spreads,
          commissions, and leverage ratios shown are typical/indicative values
          for illustration purposes only. Actual trading conditions may vary
          based on market conditions, account equity, and regulatory
          requirements. Minimum deposits are subject to change. Trading
          conditions are subject to modification without prior notice.
        </p>
      </div>
    </div>
  );
}
