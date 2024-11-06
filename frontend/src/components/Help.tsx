// src/components/Help.tsx
import React from 'react';
import SideNav from './SideNav';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  { question: 'How do I submit assignments?', answer: 'Navigate to the Assignments section, select your assignment, and click "Submit".' },
  { question: 'How can I contact my lecturer?', answer: 'Use the Inbox feature to send a message directly to your lecturer.' },
  { question: 'What should I do if I forget my password?', answer: 'Click on "Forgot Password" on the login page and follow the instructions.' },
  // Add more FAQs as needed
];

const Help: React.FC = () => {
  return (
    <>
    <SideNav/>
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6">Help & Support</h2>

      {/* FAQ Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition-shadow duration-200">
              <h4 className="font-bold">{faq.question}</h4>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Contact Support</h3>
        <p className="text-gray-700 mb-4">
          If you need further assistance, feel free to reach out to our support team. We’re here to help you.
        </p>
        <a
          href="mailto:support@yourdomain.com"
          className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
        >
          Contact Support
        </a>
      </div>
    </div>
    </>

  );
};

export default Help;
