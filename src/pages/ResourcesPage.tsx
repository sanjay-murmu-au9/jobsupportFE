import React from 'react';
import Navbar from '../components/Navbar';

interface ResourcesPageProps {
  onNavigateHome?: () => void;
  onNavigateRegister?: () => void;
  onNavigateStories?: () => void;
  onNavigateResources?: () => void;
  onNavigateAbout?: () => void;
  onNavigateLogin?: () => void;
}

const ResourcesPage: React.FC<ResourcesPageProps> = ({
  onNavigateHome,
  onNavigateRegister,
  onNavigateStories,
  onNavigateResources,
  onNavigateAbout,
  onNavigateLogin
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        onNavigateHome={onNavigateHome}
        onNavigateRegister={onNavigateRegister}
        onNavigateStories={onNavigateStories}
        onNavigateResources={onNavigateResources}
        onNavigateAbout={onNavigateAbout}
        onNavigateLogin={onNavigateLogin}
        currentPage="resources"
      />
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center mb-4">
            <div className="inline-block p-3 rounded-full bg-blue-100 mr-3">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 animate-pulse">
              <svg className="-ml-1 mr-1.5 h-2 w-2 text-yellow-400" fill="currentColor" viewBox="0 0 8 8">
                <circle cx="4" cy="4" r="3" />
              </svg>
              Under Development
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Resources Hub Under Construction
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We're building a comprehensive resource center with unemployment statistics, government policies, and job-seeking tools to help the Indian workforce.
          </p>
          <div className="mt-6 mb-8 w-24 h-1 rounded-full bg-blue-500 mx-auto"></div>
          <div className="mt-8 inline-flex flex-col sm:flex-row gap-4 sm:gap-3">
            <button 
              onClick={onNavigateRegister}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Join to Get Early Access
            </button>
            <button 
              onClick={onNavigateHome}
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              Return to Home
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg border border-yellow-100">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Employment Data</h3>
                </div>
              </div>
              <div className="mt-4 text-gray-500 text-sm">
                <p>Coming soon: Accurate unemployment statistics across different sectors and regions in India</p>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-blue-600">Progress</span>
                <span className="text-xs text-gray-500">65% complete</span>
              </div>
              <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow rounded-lg border border-yellow-100">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Policy Documents</h3>
                </div>
              </div>
              <div className="mt-4 text-gray-500 text-sm">
                <p>Coming soon: Analysis of current government policies and proposals for better unemployment support</p>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-blue-600">Progress</span>
                <span className="text-xs text-gray-500">30% complete</span>
              </div>
              <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow rounded-lg border border-yellow-100">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Job-Seeking Tools</h3>
                </div>
              </div>
              <div className="mt-4 text-gray-500 text-sm">
                <p>Coming soon: Resume templates, interview preparation guides, and skill development resources</p>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-blue-600">Progress</span>
                <span className="text-xs text-gray-500">15% complete</span>
              </div>
              <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 bg-white shadow overflow-hidden sm:rounded-lg border border-yellow-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center mb-4">
              <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Help Us Build Our Resource Hub
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              We're actively developing the Resources section to provide valuable information and tools for unemployed individuals in India. Your participation and feedback can help us build a more robust platform.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Register now to be among the first to access our resources when they are released.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage; 