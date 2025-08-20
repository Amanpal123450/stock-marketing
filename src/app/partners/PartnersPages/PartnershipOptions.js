import { FaUsers, FaBuilding, FaGlobeAmericas } from 'react-icons/fa';

export default function PartnershipOptions() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Partnership <span className="text-orange-600">Options</span>
      </h2>
      <p className="text-gray-600 mb-12">
        Choose the partnership model that best fits your business needs and goals.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Introducing Broker */}
        <div className="bg-gray-50 rounded-xl shadow p-8 w-full max-w-sm mx-auto">
          <div className="bg-orange-100 text-orange-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4 text-2xl">
            <FaUsers />
          </div>
          <h3 className="text-xl font-semibold mb-4">Introducing Broker</h3>
          <ul className="text-left text-gray-700 space-y-2 mb-6">
            <li>✔ Commission per lot traded</li>
            <li>✔ Marketing materials provided</li>
            <li>✔ Real-time reporting</li>
            <li>✔ Dedicated support</li>
          </ul>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded w-full">
            Apply Now
          </button>
        </div>

        {/* White Label */}
        <div className="bg-white rounded-xl shadow p-8 w-full max-w-sm mx-auto border-2 border-orange-500">
          <div className="bg-blue-100 text-blue-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4 text-2xl">
            <FaBuilding />
          </div>
          <h3 className="text-xl font-semibold mb-2">White Label</h3>
          <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full inline-block mb-4">POPULAR</span>
          <ul className="text-left text-gray-700 space-y-2 mb-6">
            <li>✔ Your own branded platform</li>
            <li>✔ Complete back-office solution</li>
            <li>✔ Risk management tools</li>
            <li>✔ Technical support</li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded w-full">
            Learn More
          </button>
        </div>

        {/* Regional Representative */}
        <div className="bg-gray-50 rounded-xl shadow p-8 w-full max-w-sm mx-auto">
          <div className="bg-green-100 text-green-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4 text-2xl">
            <FaGlobeAmericas />
          </div>
          <h3 className="text-xl font-semibold mb-4">Regional Representative</h3>
          <ul className="text-left text-gray-700 space-y-2 mb-6">
            <li>✔ Exclusive territory rights</li>
            <li>✔ Higher commission rates</li>
            <li>✔ Local marketing support</li>
            <li>✔ Training programs</li>
          </ul>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded w-full">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
