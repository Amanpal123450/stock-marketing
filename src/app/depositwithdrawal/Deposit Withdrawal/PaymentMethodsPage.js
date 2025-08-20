"use client";

export default function PaymentMethodsPage() {
  const cards = [
    { code: "VISA", name: "Visa", color: "bg-blue-600" },
    { code: "MC", name: "Mastercard", color: "bg-red-600" },
    { code: "AMEX", name: "American Express", color: "bg-blue-400" },
    { code: "DISC", name: "Discover", color: "bg-orange-500" },
    { code: "JCB", name: "JCB", color: "bg-purple-500" },
    { code: "UPI", name: "UnionPay", color: "bg-gray-700" },
  ];

  const wallets = [
    { code: "PP", name: "PayPal", color: "bg-blue-500" },
    { code: "SK", name: "Skrill", color: "bg-pink-500" },
    { code: "NT", name: "Neteller", color: "bg-green-600" },
    { code: "PM", name: "Perfect Money", color: "bg-yellow-500" },
    { code: "AP", name: "Apple Pay", color: "bg-black" },
    { code: "GP", name: "Google Pay", color: "bg-green-500" },
  ];

  const cryptocurrencies = [
    { code: "BTC", name: "Bitcoin", color: "bg-yellow-500" },
    { code: "ETH", name: "Ethereum", color: "bg-purple-600" },
    { code: "USDT", name: "Tether (USDT)", color: "bg-green-600" },
    { code: "LTC", name: "Litecoin", color: "bg-gray-500" },
    { code: "BNB", name: "Binance Coin", color: "bg-yellow-400" },
    { code: "XRP", name: "Ripple (XRP)", color: "bg-blue-500" },
  ];

  const transfers = [
    { code: "WIRE", name: "Wire Transfer", color: "bg-green-600" },
    { code: "SWIFT", name: "SWIFT Transfer", color: "bg-blue-500" },
    { code: "SEPA", name: "SEPA Transfer", color: "bg-purple-500" },
    { code: "ACH", name: "ACH Transfer", color: "bg-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">
        Payment <span className="text-orange-500">Methods</span>
      </h1>
      <p className="text-gray-600 text-center max-w-2xl mb-12">
        Choose from our wide range of secure payment methods. All major credit
        cards, bank transfers, e-wallets, and cryptocurrencies accepted.
      </p>

      {/* Credit & Debit Cards */}
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Credit & Debit Cards
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-16">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div
              className={`px-4 py-2 rounded-md text-white font-bold text-sm ${card.color}`}
            >
              {card.code}
            </div>
            <p className="mt-3 text-gray-700">{card.name}</p>
          </div>
        ))}
      </div>

      {/* E-Wallets */}
      <h2 className="text-2xl font-semibold mb-6 text-center">E-Wallets</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-16">
        {wallets.map((wallet, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div
              className={`px-4 py-2 rounded-md text-white font-bold text-sm ${wallet.color}`}
            >
              {wallet.code}
            </div>
            <p className="mt-3 text-gray-700">{wallet.name}</p>
          </div>
        ))}
      </div>

      {/* Bank Transfers */}
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Bank Transfers
      </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {transfers.map((transfer, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div
                className={`px-6 py-3 rounded-md text-white font-bold text-base ${transfer.color}`}
              >
                {transfer.code}
              </div>
              <p className="mt-4 text-gray-700 font-medium">{transfer.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cryptocurrencies */}
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Cryptocurrencies
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {cryptocurrencies.map((crypto, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div
              className={`px-4 py-2 rounded-md text-white font-bold text-sm ${crypto.color}`}
            >
              {crypto.code}
            </div>
            <p className="mt-3 text-gray-700">{crypto.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
