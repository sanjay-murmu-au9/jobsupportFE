import React from 'react';
import Navbar from '../components/Navbar';

interface AboutPageProps {
  onNavigateHome?: () => void;
  onNavigateRegister?: () => void;
  onNavigateStories?: () => void;
  onNavigateResources?: () => void;
  onNavigateAbout?: () => void;
  onNavigateLogin?: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({
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
        currentPage="about"
      />
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center mb-4">
            <div className="inline-block p-3 rounded-full bg-blue-100 mr-3">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            About Our Initiative
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            JobPriorityIndia is a grassroots movement advocating for better unemployment support and job creation policies in India.
          </p>
          <div className="mt-6 mb-8 w-24 h-1 rounded-full bg-blue-500 mx-auto"></div>
          <div className="mt-8 inline-flex flex-col sm:flex-row gap-4 sm:gap-3">
            <button 
              onClick={onNavigateRegister}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Join Our Growing Movement
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
          <div className="border-b border-gray-200">
            <div className="px-4 py-5 sm:px-6 flex items-center">
              <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Our Mission & Vision <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-800">Coming Soon</span>
              </h3>
            </div>
            <p className="mt-1 max-w-2xl text-sm text-gray-500 px-4 py-2">
              Our full mission statement and team details will be available soon.
            </p>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="prose max-w-none">
              <p>
                <strong className="text-blue-700">Our mission</strong> is to advocate for the millions of unemployed Indians who are struggling to find meaningful work during these challenging economic times. We believe that by uniting our voices, we can compel the government to prioritize job creation and support for those in need.
              </p>
              <p className="mt-4">
                <strong className="text-blue-700">Our team</strong> is currently under development. We're assembling a diverse group of passionate advocates, policy experts, data analysts, and community organizers who believe in making a difference.
              </p>
              <p className="mt-4">
                <strong className="text-blue-700">Our approach</strong> combines data collection, storytelling, and direct advocacy to create a compelling case for policy change. By registering with us, you're becoming part of the founding community that will help shape the future of employment policy in India.
              </p>
              <div className="mt-8 p-4 bg-blue-50 rounded-md border border-blue-100">
                <h4 className="text-blue-700 font-medium flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Be a Founding Member
                </h4>
                <p className="mt-2 text-sm text-gray-600">
                  Join now to be recognized as a founding member of our initiative. Early supporters will receive special recognition and opportunities to shape our advocacy approach.
                </p>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-blue-600">Development progress</span>
                    <span className="text-xs text-gray-500">25% complete</span>
                  </div>
                  <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 