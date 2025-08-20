import { Zap, DollarSign, ShieldCheck, LifeBuoy } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-7 h-7 text-white" />,
    title: "Lightning Fast Execution",
    desc: "Orders executed in milliseconds with no requotes or rejections.",
  },
  {
    icon: <DollarSign className="w-7 h-7 text-white" />,
    title: "Competitive Spreads",
    desc: "Industry-leading spreads across all asset classes and account types.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-white" />,
    title: "Regulated & Secure",
    desc: "Your funds are protected with segregated accounts and regulatory oversight.",
  },
  {
    icon: <LifeBuoy className="w-7 h-7 text-white" />,
    title: "24/7 Support",
    desc: "Professional multilingual support available around the clock.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose Qorva Markets?
        </h2>
        <p className="mt-4 text-gray-600">
          Professional trading conditions designed to help you succeed across all asset classes.
        </p>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>

              {/* Desc */}
              <p className="mt-2 text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
