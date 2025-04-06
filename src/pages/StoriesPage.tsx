import React from 'react';
import Navbar from '../components/Navbar';

interface StoriesPageProps {
  onNavigateHome?: () => void;
  onNavigateRegister?: () => void;
  onNavigateStories?: () => void;
  onNavigateResources?: () => void;
  onNavigateAbout?: () => void;
  onNavigateLogin?: () => void;
}

const StoriesPage: React.FC<StoriesPageProps> = ({
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
        currentPage="stories"
      />
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center mb-4">
            <div className="inline-block p-3 rounded-full bg-blue-100 mr-3">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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
            Stories Coming Soon
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We're collecting powerful stories from unemployed individuals across India. Be one of the first to share your journey and inspire others.
          </p>
          <div className="mt-6 mb-8 w-24 h-1 rounded-full bg-blue-500 mx-auto"></div>
          <div className="mt-8 inline-flex flex-col sm:flex-row gap-4 sm:gap-3">
            <button 
              onClick={onNavigateRegister}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Be an Early Contributor
            </button>
            <button 
              onClick={onNavigateHome}
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              Return to Home
            </button>
          </div>
        </div>
        
        <div className="mt-16 bg-white shadow overflow-hidden sm:rounded-lg border border-yellow-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center mb-4">
              <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                In Development: We're Building Something Special
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              The Stories section is currently under active development. This feature will allow unemployed individuals to share their personal experiences, creating a powerful collective voice.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Expected launch: Coming soon. Register now to be notified when this feature is available.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 border-t border-gray-200">
              <dl className="divide-y divide-gray-200">
                <div className="py-4 sm:py-5">
                  <dt className="text-base font-medium text-blue-700">Personal Impact</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    Stories humanize statistics. Your personal struggles with unemployment help policymakers understand the real impact of the job crisis.
                  </dd>
                </div>
                <div className="py-4 sm:py-5">
                  <dt className="text-base font-medium text-blue-700">Build Community</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    When others read your story, they realize they're not alone. Together, we form a stronger community for change.
                  </dd>
                </div>
                <div className="py-4 sm:py-5">
                  <dt className="text-base font-medium text-blue-700">Drive Policy Change</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    Compelling stories are powerful tools for advocacy. They can influence government officials to implement better unemployment policies.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-blue-600">
                Development progress
              </span>
              <span className="text-sm text-gray-500">40% complete</span>
            </div>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesPage; 