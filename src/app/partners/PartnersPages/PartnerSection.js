import { FaDollarSign, FaBullhorn, FaLifeRing } from 'react-icons/fa';

export default function PartnerSection() {
  return (
    <section className="py-16 px-6 text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Why Partner with <span className="text-orange-600">Qorva Markets</span>
      </h2>
      <p className="max-w-3xl mx-auto text-gray-600 mb-12 text-base md:text-lg">
        Access industry-leading commission structures, comprehensive support, and powerful marketing tools to grow your business.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Card 1 */}
        <div className="bg-gray-50 rounded-xl shadow-md p-8 flex-1 max-w-sm mx-auto">
          <div className="bg-orange-100 text-orange-600 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 text-2xl">
            <FaDollarSign />
          </div>
          <h3 className="text-xl font-semibold mb-2">High Commissions</h3>
          <p className="text-gray-600">
            Earn up to $15 per lot with our competitive commission structure and performance bonuses.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 rounded-xl shadow-md p-8 flex-1 max-w-sm mx-auto">
          <div className="bg-blue-100 text-blue-600 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 text-2xl">
            <FaBullhorn />
          </div>
          <h3 className="text-xl font-semibold mb-2">Marketing Support</h3>
          <p className="text-gray-600">
            Access professional marketing materials, banners, and promotional content to boost your conversions.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-50 rounded-xl shadow-md p-8 flex-1 max-w-sm mx-auto">
          <div className="bg-green-100 text-green-600 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 text-2xl">
            <FaLifeRing />
          </div>
          <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
          <p className="text-gray-600">
            Get personalized support from our dedicated partner success team to maximize your earning potential.
          </p>
        </div>
      </div>
    </section>
  );
}
