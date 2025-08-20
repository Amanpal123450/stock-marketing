"use client";
export default function ContactOptions() {
const options = [
    {
      title: "Live Chat",
      description: "Instant support for urgent questions",
      availability: "Available 24/5",
      cta: "Start Chat",
      icon: "💬",
      bg: "bg-gradient-to-b from-orange-400 to-orange-600 text-white",
      buttonStyle: "bg-white text-orange-600 font-semibold hover:bg-gray-100 transition",
    },
    {
      title: "Email Support",
      description: "Detailed assistance for complex queries",
      availability: "Response within 24 hours",
      cta: "Send Email Directly",
      icon: "✉️",
      bg: "bg-gray-50",
      buttonStyle: "bg-orange-500 text-white font-semibold hover:bg-orange-600 transition",
    },
    {
      title: "Phone Support",
      description: "Direct conversation with our experts",
      availability: "Mon-Fri 8AM-8PM GMT",
      cta: "Call Now",
      icon: "📞",
      bg: "bg-gray-50",
      buttonStyle: "bg-orange-500 text-white font-semibold hover:bg-orange-600 transition",
    },
    {
      title: "WhatsApp",
      description: "Quick messaging support",
      availability: "Available 24/5",
      cta: "Message Us",
      icon: "📱",
      bg: "bg-gray-50",
      buttonStyle: "bg-orange-500 text-white font-semibold hover:bg-orange-600 transition",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold">
          Multiple Ways to <span className="text-orange-500">Reach Us</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Choose the contact method that works best for you. Our team is available 24/5 to assist with your trading needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {options.map((option, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-6 flex flex-col items-center text-center shadow-md ${option.bg} 
                          hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out
                          animate-fadeIn`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="text-4xl mb-4">{option.icon}</div>
              <h3 className="text-lg font-bold mb-2">{option.title}</h3>
              <p className="text-sm mb-1">{option.description}</p>
              <p className="text-sm text-gray-500 mb-4">{option.availability}</p>
              <button className={`w-full py-2 px-4 rounded-md mt-auto ${option.buttonStyle}`}>
                {option.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s forwards;
        }
      `}</style>
    </section>
  );
}
