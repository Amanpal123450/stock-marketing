export default function ContactForm() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">
          Send Us a <span className="text-orange-500">Message</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Fill out the form below and we ll get back to you as soon as possible.
        </p>
      </div>

      <div className="mt-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-6 shadow-lg rounded-xl overflow-hidden">
        {/* Form */}
        <div className="bg-white p-8">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name *"
                required
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Last Name *"
                required
                className="border p-2 rounded w-full"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address *"
              required
              className="border p-2 rounded w-full"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border p-2 rounded w-full"
            />
            <select required className="border p-2 rounded w-full text-gray-500">
              <option value="">Select a subject *</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="partnership">Partnership</option>
            </select>
            <textarea
              placeholder="Please describe your inquiry in detail..."
              required
              className="border p-2 rounded w-full min-h-[120px]"
            />
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" required />
              <label>
                I agree to the <span className="text-orange-500 underline">Privacy Policy</span> and consent to the processing of my personal data.
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-bold py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-orange-500 text-white p-8 space-y-6">
          <h3 className="text-xl font-bold">Get in Touch</h3>
          <div>
            <p className="font-semibold">📍 Registered Office</p>
            <p>Qorva Markets LTD<br />Bonovo Road – Fomboni<br />Island of Mohéli – Comoros Union<br />Reg#: HT00324027</p>
          </div>
          <div>
            <p className="font-semibold">🏢 Physical Office</p>
            <p>Office #210 Al-Nasar Sports Club<br />Dubai, UAE</p>
          </div>
          <div>
            <p className="font-semibold">📧 Email Addresses</p>
            <p>General: info@qorvamarkets.com<br />
              Support: info@qorvamarkets.com<br />
              Partnerships: info@qorvamarkets.com</p>
          </div>
          <div>
            <p className="font-semibold">📞 Phone Number</p>
            <p>+971-50-8596-279<br />WhatsApp Available</p>
          </div>
          <div>
            <p className="font-semibold">🕒 Support Hours</p>
            <p>
              Mon–Fri: 24 hours<br />
              Saturday: 9:00 AM – 5:00 PM GMT<br />
              Sunday: Closed
            </p>
          </div>
          <div className="pt-4">
            <p className="font-semibold mb-2">Follow Us</p>
            <div className="flex gap-4 text-2xl">
              <a href="#"><span>🐦</span></a>
              <a href="#"><span>🐘</span></a>
              <a href="#"><span>💼</span></a>
              <a href="#"><span>📸</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
