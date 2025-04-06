import React from 'react';

const Stats: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-indigo-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Trusted by thousands around the world
          </h2>
          <p className="mt-3 text-xl text-blue-200 sm:mt-4">
            Our platform has helped countless individuals find their dream jobs and advance their careers.
          </p>
        </div>
        <div className="mt-10 pb-12 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gradient-to-r from-blue-700 to-indigo-900" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Job Seekers</dt>
                    <dd className="order-1 text-5xl font-extrabold text-blue-600">5,000+</dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Job Openings</dt>
                    <dd className="order-1 text-5xl font-extrabold text-blue-600">1,200+</dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Success Rate</dt>
                    <dd className="order-1 text-5xl font-extrabold text-blue-600">89%</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="mt-8 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <div className="relative rounded-lg shadow-lg overflow-hidden bg-white/10 backdrop-blur-sm p-5">
              <div className="flex-shrink-0 relative w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <blockquote className="mt-3">
                <p className="text-base font-medium text-white">
                  "This platform helped me find a job within 2 months after being laid off. The process was smooth and the team was very supportive."
                </p>
                <footer className="mt-3">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-blue-300"></div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-white">Sarah Johnson</p>
                      <p className="text-sm text-blue-200">Software Developer</p>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
            
            <div className="relative rounded-lg shadow-lg overflow-hidden bg-white/10 backdrop-blur-sm p-5">
              <div className="flex-shrink-0 relative w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <blockquote className="mt-3">
                <p className="text-base font-medium text-white">
                  "As a recent graduate, I was struggling to find relevant positions. Thanks to this platform, I secured an entry-level role that matched my skills perfectly."
                </p>
                <footer className="mt-3">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-blue-300"></div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-white">Michael Chen</p>
                      <p className="text-sm text-blue-200">Marketing Associate</p>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
            
            <div className="relative rounded-lg shadow-lg overflow-hidden bg-white/10 backdrop-blur-sm p-5">
              <div className="flex-shrink-0 relative w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <blockquote className="mt-3">
                <p className="text-base font-medium text-white">
                  "The quality of job matches was impressive. I was connected with companies that aligned perfectly with my experience and career goals."
                </p>
                <footer className="mt-3">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-blue-300"></div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-white">Alex Rodriguez</p>
                      <p className="text-sm text-blue-200">Project Manager</p>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats; 