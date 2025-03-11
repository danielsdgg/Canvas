import React from 'react';
import SideNav from './SideNav';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  { question: 'How do I submit assignments?', answer: 'Not all days have assignments however; students are expected to keep track of their learning progress. For days with assignments/projects; there is always going to be an input field where students can submit their github url for their work after uploading it on github and clicking "Submit".' },
  { question: 'How can I contact my lecturer?', answer: 'The Inbox feature is under development. For now use the Google Meet, Slack & WhatsApp for communication.' },
  { question: 'What should I do if I forget my password?', answer: 'Click on "Forgot Password" on the login page and follow the instructions.' },
];

const Help: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <SideNav />
      <div className="flex-1 p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center md:text-left mb-6 text-indigo-700">Help & Support</h2>

        {/* FAQ Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition-shadow duration-200"
              >
                <h4 className="font-bold text-lg text-gray-800">{faq.question}</h4>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Contact Support</h3>
          <p className="text-gray-700 mb-4">
            If you need further assistance, feel free to reach out to our support team. We’re here to help you.
          </p>
          <a
            href="mailto:gathigidg26@gmail.com"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Help;
