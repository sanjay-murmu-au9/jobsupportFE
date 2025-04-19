import React from 'react';
import Navbar from '../components/Navbar';
import './StoriesPage.css';

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
    <div className="stories-page">
      <Navbar 
        onNavigateHome={onNavigateHome}
        onNavigateRegister={onNavigateRegister}
        onNavigateStories={onNavigateStories}
        onNavigateResources={onNavigateResources}
        onNavigateAbout={onNavigateAbout}
        onNavigateLogin={onNavigateLogin}
        currentPage="stories"
      />
      <div className="stories-content">
        <div className="stories-header">
          <div className="stories-icon-container">
            <div className="stories-icon-bg">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <span className="stories-development-badge">
              <span className="stories-badge-dot"></span>
              Under Development
            </span>
          </div>
          <h1 className="stories-title">
            Impact Stories Coming Soon
          </h1>
          <p className="stories-description">
            We're collecting real stories from Indians affected by unemployment to share the human impact of the crisis.
          </p>
          <div className="stories-divider"></div>
          <div className="stories-button-group">
            <button 
              onClick={onNavigateRegister}
              className="stories-primary-button"
            >
              Share Your Story
            </button>
            <button 
              onClick={onNavigateHome}
              className="stories-secondary-button"
            >
              Return to Home
            </button>
          </div>
        </div>
        
        <div className="stories-info-card">
          <div className="stories-card-header">
            <svg className="stories-header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
            <h3 className="stories-header-title">
              Stories of Impact
            </h3>
          </div>
          <div className="stories-card-content">
            <p className="stories-content-text">
              Sharing real stories from real people helps policymakers understand the human cost of the unemployment crisis. We're building a platform to amplify these voices.
            </p>
            <div className="stories-alert">
              <div className="stories-alert-content">
                <svg className="stories-alert-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div className="stories-alert-message">
                  Register now to be notified when the Stories platform launches. You'll be among the first to share your experience.
                </div>
              </div>
            </div>
            
            <div className="stories-feature-list">
              <div className="stories-feature-item">
                <h4 className="stories-feature-title">Anonymous Sharing</h4>
                <p className="stories-feature-description">Share your experience without revealing personal details. Your story helps, even if you prefer privacy.</p>
              </div>
              <div className="stories-feature-item">
                <h4 className="stories-feature-title">Data Analysis</h4>
                <p className="stories-feature-description">We analyze stories to identify patterns and propose targeted policy solutions.</p>
              </div>
              <div className="stories-feature-item">
                <h4 className="stories-feature-title">Direct Advocacy</h4>
                <p className="stories-feature-description">With permission, select stories will be presented to policymakers to illustrate the need for change.</p>
              </div>
            </div>
          </div>
          <div className="stories-card-footer">
            <div className="stories-progress-header">
              <span className="stories-progress-label">Development progress</span>
              <span className="stories-progress-value">45% complete</span>
            </div>
            <div className="stories-progress-bar-bg">
              <div className="stories-progress-bar" style={{ width: '45%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesPage;