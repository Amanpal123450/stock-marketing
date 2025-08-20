"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agreedToPolicy: false
  });
  
  const [focusedField, setFocusedField] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      // Reset form
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', subject: '', message: '', agreedToPolicy: false
      });
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Registered Office",
      content: ["Qorva Markets LTD", "Bonovo Road – Fomboni", "Island of Mohéli – Comoros Union", "Reg#: HT00324027"],
      gradient: "from-orange-400 to-red-400"
    },
    {
      icon: "🏢",
      title: "Physical Office", 
      content: ["Office #210 Al-Nasar Sports Club", "Dubai, UAE"],
      gradient: "from-blue-400 to-purple-400"
    },
    {
      icon: "📧",
      title: "Email Addresses",
      content: ["General: info@qorvamarkets.com", "Support: info@qorvamarkets.com", "Partnerships: info@qorvamarkets.com"],
      gradient: "from-green-400 to-teal-400"
    },
    {
      icon: "📞",
      title: "Phone Number",
      content: ["+971-50-8596-279", "WhatsApp Available"],
      gradient: "from-purple-400 to-pink-400"
    },
    {
      icon: "🕒",
      title: "Support Hours",
      content: ["Mon–Fri: 24 hours", "Saturday: 9:00 AM – 5:00 PM GMT", "Sunday: Closed"],
      gradient: "from-yellow-400 to-orange-400"
    }
  ];

  const socialLinks = [
    { icon: "🐦", name: "Twitter", color: "hover:bg-blue-400" },
    { icon: "🐘", name: "Mastodon", color: "hover:bg-purple-400" },
    { icon: "💼", name: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: "📸", name: "Instagram", color: "hover:bg-pink-400" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full text-orange-600 text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            Get In Touch
          </div>
          <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-gray-900 via-orange-500 to-gray-900 bg-clip-text text-transparent">
            Send Us a <span className="text-orange-500">Message</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and we'll get back to you as soon as possible. Our team is here to help with any questions or concerns.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/70 backdrop-blur-lg p-8 md:p-12 rounded-2xl shadow-2xl border border-white/20">
              <div className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('firstName')}
                      onBlur={() => setFocusedField('')}
                      placeholder="First Name *"
                      required
                      className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                        focusedField === 'firstName' 
                          ? 'border-orange-500 shadow-lg shadow-orange-500/25 scale-105' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    />
                    {focusedField === 'firstName' && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('lastName')}
                      onBlur={() => setFocusedField('')}
                      placeholder="Last Name *"
                      required
                      className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                        focusedField === 'lastName' 
                          ? 'border-orange-500 shadow-lg shadow-orange-500/25 scale-105' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    />
                    {focusedField === 'lastName' && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      placeholder="Email Address *"
                      required
                      className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                        focusedField === 'email' 
                          ? 'border-orange-500 shadow-lg shadow-orange-500/25 scale-105' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    />
                    {focusedField === 'email' && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField('')}
                      placeholder="Phone Number"
                      className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                        focusedField === 'phone' 
                          ? 'border-orange-500 shadow-lg shadow-orange-500/25 scale-105' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    />
                    {focusedField === 'phone' && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="relative">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField('')}
                    required
                    className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                      focusedField === 'subject' 
                        ? 'border-orange-500 shadow-lg shadow-orange-500/25 scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
                    } ${formData.subject ? 'text-gray-900' : 'text-gray-500'}`}
                  >
                    <option value="">Select a subject *</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="complaint">Complaint</option>
                  </select>
                  {focusedField === 'subject' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  )}
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Please describe your inquiry in detail..."
                    required
                    rows={6}
                    className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none ${
                      focusedField === 'message' 
                        ? 'border-orange-500 shadow-lg shadow-orange-500/25 scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  />
                  {focusedField === 'message' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  )}
                </div>

                {/* Privacy Policy */}
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    name="agreedToPolicy"
                    checked={formData.agreedToPolicy}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-4 h-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500"
                  />
                  <label className="leading-relaxed">
                    I agree to the <span className="text-orange-500 underline cursor-pointer hover:text-orange-600">Privacy Policy</span> and consent to the processing of my personal data.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-1'
                  } text-white relative overflow-hidden group`}
                >
                  <span className={`${isSubmitting ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                    Send Message
                  </span>
                  {isSubmitting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="ml-2">Sending...</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center text-white text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.content.map((line, lineIndex) => (
                    <p key={lineIndex} className="text-gray-600 text-sm leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-xl transition-all duration-300 ${social.color} hover:text-white hover:scale-110 hover:shadow-lg`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}