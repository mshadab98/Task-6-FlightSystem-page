import React from 'react';
import { HelpCircle, FileText, MessageCircle, Phone } from 'lucide-react';

export default function Support() {
  const faqs = [
    {
      question: 'How do I change or cancel my flight?',
      answer: 'You can change or cancel your flight through your account dashboard. Go to "My Bookings" and select the flight you wish to modify. Please note that fees may apply depending on your ticket type and how close to departure you make the change.',
    },
    {
      question: 'What is your baggage policy?',
      answer: 'Our baggage policy varies by ticket class and route. Generally, economy tickets include one carry-on bag and one personal item. Business and First Class tickets include additional checked baggage. Specific allowances will be displayed during booking.',
    },
    {
      question: 'How early should I arrive at the airport?',
      answer: 'We recommend arriving 2 hours before departure for domestic flights and 3 hours for international flights. This allows time for check-in, security screening, and reaching your gate comfortably.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Customer Support</h1>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <MessageCircle className="h-8 w-8 text-blue-600" />
              <h2 className="ml-3 text-xl font-semibold">Live Chat</h2>
            </div>
            <p className="text-gray-600 mb-4">Get instant help from our support team through live chat.</p>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Start Chat
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <Phone className="h-8 w-8 text-blue-600" />
              <h2 className="ml-3 text-xl font-semibold">Phone Support</h2>
            </div>
            <p className="text-gray-600 mb-4">Call us directly for immediate assistance with your booking.</p>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              +1 (555) 123-4567
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-blue-600" />
              <h2 className="ml-3 text-xl font-semibold">Email Support</h2>
            </div>
            <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours.</p>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Send Email
            </button>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-8">
            <HelpCircle className="h-8 w-8 text-blue-600" />
            <h2 className="ml-3 text-2xl font-semibold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}