import React from 'react';
import Navbar from '../components/Navbar';
import './ResourcesPage.css';

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
    <div className="resources-page">
      <Navbar 
        onNavigateHome={onNavigateHome}
        onNavigateRegister={onNavigateRegister}
        onNavigateStories={onNavigateStories}
        onNavigateResources={onNavigateResources}
        onNavigateAbout={onNavigateAbout}
        onNavigateLogin={onNavigateLogin}
        currentPage="resources"
      />
      <div className="resources-content">
        <div className="resources-header">
          <div className="resources-icon-container">
            <div className="resources-icon-bg">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <span className="resources-development-badge">
              <span className="resources-badge-dot"></span>
              Under Development
            </span>
          </div>
          <h1 className="resources-title">
            Resources Hub Under Construction
          </h1>
          <p className="resources-description">
            We're building a comprehensive resource center with unemployment statistics, government policies, and job-seeking tools to help the Indian workforce.
          </p>
          <div className="resources-divider"></div>
          <div className="resources-button-group">
            <button 
              onClick={onNavigateRegister}
              className="resources-primary-button"
            >
              Join to Get Early Access
            </button>
            <button 
              onClick={onNavigateHome}
              className="resources-secondary-button"
            >
              Return to Home
            </button>
          </div>
        </div>
        
        <div className="resources-grid">
          <div className="resource-card">
            <div className="resource-card-content">
              <div className="resource-icon-container">
                <div className="resource-icon-bg">
                  <svg className="resource-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="resource-title-container">
                  <h3 className="resource-title">Employment Data</h3>
                </div>
              </div>
              <div className="resource-description">
                <p>Coming soon: Accurate unemployment statistics across different sectors and regions in India</p>
              </div>
            </div>
            <div className="resource-footer">
              <div className="resource-progress-container">
                <span className="resource-progress-label">Progress</span>
                <span className="resource-progress-value">65% complete</span>
              </div>
              <div className="resource-progress-bar-bg">
                <div className="resource-progress-bar" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="resource-card">
            <div className="resource-card-content">
              <div className="resource-icon-container">
                <div className="resource-icon-bg">
                  <svg className="resource-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="resource-title-container">
                  <h3 className="resource-title">Policy Documents</h3>
                </div>
              </div>
              <div className="resource-description">
                <p>Coming soon: Analysis of current government policies and proposals for better unemployment support</p>
              </div>
            </div>
            <div className="resource-footer">
              <div className="resource-progress-container">
                <span className="resource-progress-label">Progress</span>
                <span className="resource-progress-value">30% complete</span>
              </div>
              <div className="resource-progress-bar-bg">
                <div className="resource-progress-bar" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="resource-card">
            <div className="resource-card-content">
              <div className="resource-icon-container">
                <div className="resource-icon-bg">
                  <svg className="resource-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="resource-title-container">
                  <h3 className="resource-title">Job-Seeking Tools</h3>
                </div>
              </div>
              <div className="resource-description">
                <p>Coming soon: Resume templates, interview preparation guides, and skill development resources</p>
              </div>
            </div>
            <div className="resource-footer">
              <div className="resource-progress-container">
                <span className="resource-progress-label">Progress</span>
                <span className="resource-progress-value">15% complete</span>
              </div>
              <div className="resource-progress-bar-bg">
                <div className="resource-progress-bar" style={{ width: '15%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="resources-info-card">
          <div className="resources-info-content">
            <div className="resources-info-header">
              <svg className="resources-info-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="resources-info-title">
                Help Us Build Our Resource Hub
              </h3>
            </div>
            <p className="resources-info-text">
              We're actively developing the Resources section to provide valuable information and tools for unemployed individuals in India. Your participation and feedback can help us build a more robust platform.
            </p>
            <div className="resources-alert">
              <div className="resources-alert-content">
                <div className="resources-alert-icon-container">
                  <svg className="resources-alert-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="resources-alert-message">
                  <p className="resources-alert-text">
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