export default function SupportSection() {
  return (
    <section className="bg-gray-50 rounded-lg py-12 px-6 max-w-3xl mx-auto text-center m-12">
      <h2 className="text-2xl font-semibold mb-3 text-gray-900">
        Still have questions?
      </h2>
      <p className="text-gray-600 mb-8">
        Our support team is available 24/7 to help you with any questions or concerns you may have.
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md inline-flex items-center gap-2 transition">
          Contact Support
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
        <button className="border border-orange-500 text-orange-500 font-semibold py-3 px-6 rounded-md hover:bg-orange-50 transition">
          Open Live Account
        </button>
      </div>
    </section>
  );
}
