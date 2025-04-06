import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <div id="how-it-works" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Process</h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
            Three Simple Steps
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Getting started with our platform is easy. Follow these simple steps and connect with job opportunities.
          </p>
        </div>

        <div className="mt-12">
          <div className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
            {/* Step 1 */}
            <div className="relative">
              {/* Circle with number */}
              <div className="absolute h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              {/* Content */}
              <div className="ml-16">
                <h3 className="text-xl font-medium text-gray-900">Create Your Profile</h3>
                <p className="mt-2 text-base text-gray-500">
                  Register and build your profile showcasing your skills, education, and experience to stand out to potential employers.
                </p>
                <div className="mt-4">
                  <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="h-12 w-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              {/* Circle with number */}
              <div className="absolute h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              {/* Content */}
              <div className="ml-16">
                <h3 className="text-xl font-medium text-gray-900">Upload Your Documents</h3>
                <p className="mt-2 text-base text-gray-500">
                  Upload your CV, certificates, and other relevant documents to enhance your profile and improve your chances.
                </p>
                <div className="mt-4">
                  <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="h-12 w-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative sm:col-span-2 lg:col-span-1">
              {/* Circle with number */}
              <div className="absolute h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              {/* Content */}
              <div className="ml-16">
                <h3 className="text-xl font-medium text-gray-900">Get Matched & Connected</h3>
                <p className="mt-2 text-base text-gray-500">
                  Our matching algorithm connects you with employers seeking your specific skills and qualifications.
                </p>
                <div className="mt-4">
                  <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="h-12 w-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/register"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 