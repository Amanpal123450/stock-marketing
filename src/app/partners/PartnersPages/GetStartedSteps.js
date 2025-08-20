export default function GetStartedSteps() {
  const steps = [
    {
      number: 1,
      title: 'Apply',
      description: 'Submit your partner application with basic business information and requirements.',
      color: 'bg-orange-500',
    },
    {
      number: 2,
      title: 'Review',
      description: 'Our team reviews your application and contacts you within 24 hours for approval.',
      color: 'bg-blue-600',
    },
    {
      number: 3,
      title: 'Setup',
      description: 'Access your partner dashboard and receive marketing materials and tracking links.',
      color: 'bg-green-600',
    },
    {
      number: 4,
      title: 'Earn',
      description: 'Start referring clients and earning commissions with real-time tracking and reporting.',
      color: 'bg-purple-600',
    },
  ];

  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Get Started in <span className="text-orange-500">4 Steps</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Join our partner program and start earning commissions in just a few simple steps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className={`text-white text-xl font-bold w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${step.color}`}>
              {step.number}
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
