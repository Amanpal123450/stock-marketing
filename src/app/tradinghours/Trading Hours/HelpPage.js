import { Clock, Phone, BookOpen } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Need Help with Trading Hours?
          </h1>
          <p className="text-gray-600 mb-8">
            Our support team is available <strong>24/5</strong> to help you understand market hours, 
            trading sessions, and optimal trading times for your strategy.
          </p>

          {/* Support Features */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="bg-orange-500 text-white p-3 rounded-lg">
                <Clock className="w-6 h-6" />
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">24/5 Support</h3>
                <p className="text-gray-600 text-sm">
                  Get assistance whenever markets are open, across all time zones.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-orange-500 text-white p-3 rounded-lg">
                <Phone className="w-6 h-6" />
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Live Chat & Phone</h3>
                <p className="text-gray-600 text-sm">
                  Multiple contact options for quick resolution of your queries.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-orange-500 text-white p-3 rounded-lg">
                <BookOpen className="w-6 h-6" />
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Trading Guides</h3>
                <p className="text-gray-600 text-sm">
                  Access comprehensive guides on optimal trading times and market sessions.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md transition">
            Contact Support
          </button>
        </div>

        {/* Right Section */}
        <div className="bg-gray-100 rounded-xl p-10 flex flex-col items-center justify-center text-center">
          <div className="text-orange-500 text-7xl">⌖</div>
          <h3 className="mt-4 font-semibold text-gray-900 text-lg">Global Market Access</h3>
          <p className="text-gray-600 text-sm mt-2">
            Trade across multiple time zones with extended market hours
          </p>
        </div>
      </div>
    </div>
  );
}
