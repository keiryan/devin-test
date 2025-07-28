'use client';

import React from 'react';

export default function ContactPage() {
  const handleSendRequest = () => {
    const subject = encodeURIComponent('New Request');
    const body = encodeURIComponent('Hello Ivan,\n\nI would like to get in touch with you regarding...\n\nBest regards');
    window.location.href = `mailto:keiryanwilson@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 tracking-wider">CONTACT ME</p>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get in touch with me
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Fill out the form below or schedule a meeting with me at your convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - Form */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  MESSAGE
                </label>
                <textarea
                  placeholder="Enter Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-300">
                  I agree with Terms and Conditions
                </label>
              </div>

              <button
                onClick={handleSendRequest}
                className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Send Your Request
              </button>
            </div>

            {/* Right side - Services and Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  With my services you can
                </h3>
                <div className="space-y-3">
                  {[
                    'Improve usability of your product',
                    'Engage users at a higher level and superform your competition',
                    'Reduce the onboarding time and improve sales',
                    'Become one needs with your business goal'
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{service}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                    <span className="font-semibold text-gray-900 dark:text-white">USA</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    1234 First Street<br />
                    Los Angeles, CA 90210<br />
                    United States
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                    <span className="font-semibold text-gray-900 dark:text-white">India</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    567 Second Avenue<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  You can also Contact me via
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      keiryanwilson@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      +1 (555) 123-4567
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
