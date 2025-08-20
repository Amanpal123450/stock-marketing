export default function CommissionTable() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Commission <span className="text-orange-600">Structure</span>
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Transparent and competitive commission rates with performance-based bonuses.
      </p>

      <div className="overflow-x-auto max-w-5xl mx-auto">
        <table className="min-w-full border-collapse rounded-xl overflow-hidden">
          <thead className="bg-white text-left text-sm font-semibold text-gray-800">
            <tr>
              <th className="py-4 px-6">Partner Level</th>
              <th className="py-4 px-6">Monthly Volume</th>
              <th className="py-4 px-6">Commission per Lot</th>
              <th className="py-4 px-6">Bonus</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            <tr className="bg-white">
              <td className="py-4 px-6 font-medium">Bronze</td>
              <td className="py-4 px-6">0 - 50 lots</td>
              <td className="py-4 px-6 text-orange-600 font-semibold">$8</td>
              <td className="py-4 px-6">-</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-4 px-6 font-medium">Silver</td>
              <td className="py-4 px-6">51 - 200 lots</td>
              <td className="py-4 px-6 text-orange-600 font-semibold">$10</td>
              <td className="py-4 px-6 text-green-600 font-semibold">5%</td>
            </tr>
            <tr className="bg-white">
              <td className="py-4 px-6 font-medium">Gold</td>
              <td className="py-4 px-6">201 - 500 lots</td>
              <td className="py-4 px-6 text-orange-600 font-semibold">$12</td>
              <td className="py-4 px-6 text-green-600 font-semibold">10%</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-4 px-6 font-medium">Platinum</td>
              <td className="py-4 px-6">500+ lots</td>
              <td className="py-4 px-6 text-orange-600 font-semibold">$15</td>
              <td className="py-4 px-6 text-green-600 font-semibold">15%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
