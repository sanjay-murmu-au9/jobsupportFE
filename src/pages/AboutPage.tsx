import React from 'react';
import Navbar from '../components/Navbar';
import './AboutPage.css';

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
    <div className="about-page">
      <Navbar
        onNavigateHome={onNavigateHome}
        onNavigateRegister={onNavigateRegister}
        onNavigateStories={onNavigateStories}
        onNavigateResources={onNavigateResources}
        onNavigateAbout={onNavigateAbout}
        onNavigateLogin={onNavigateLogin}
        currentPage="about"
      />
      <div className="about-content">
        <div className="about-header">
          <div className="about-icon-container">
            <div className="about-icon-bg">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="about-development-badge">
              <span className="about-badge-dot"></span>
              Under Development
            </span>
          </div>
          <h1 className="about-title">
            About Our Initiative
          </h1>
          <p className="about-description">
            Wake Up India is a grassroots movement advocating for better unemployment support and job creation policies in India.
          </p>
          <div className="about-divider"></div>
          <div className="about-button-group">
            <button
              onClick={onNavigateRegister}
              className="about-primary-button"
            >
              Join Our Growing Movement
            </button>
            <button
              onClick={onNavigateHome}
              className="about-secondary-button"
            >
              Return to Home
            </button>
          </div>
        </div>

        <div className="about-card">
          <div className="about-card-header">
            <svg className="about-header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 className="about-header-title">
              Our Mission & Vision <span className="about-header-badge">Coming Soon</span>
            </h3>
          </div>
          <p className="about-card-subtitle">
            Our full mission statement and team details will be available soon.
          </p>
          <div className="about-card-content">
            <div>
              <p className="about-text-paragraph">
                <strong className="about-text-strong">Our mission</strong> is to advocate for the millions of unemployed Indians who are struggling to find meaningful work during these challenging economic times. We believe that by uniting our voices, we can compel the government to prioritize job creation and support for those in need.
              </p>
              <p className="about-text-paragraph-mt">
                <strong className="about-text-strong">Our team</strong> is currently under development. We're assembling a diverse group of passionate advocates, policy experts, data analysts, and community organizers who believe in making a difference.
              </p>
              <p className="about-text-paragraph-mt">
                <strong className="about-text-strong">Our approach</strong> combines data collection, storytelling, and direct advocacy to create a compelling case for policy change. By registering with us, you're becoming part of the founding community that will help shape the future of employment policy in India.
              </p>
              <div className="about-cta-box">
                <h4 className="about-cta-heading">
                  <svg className="about-cta-icon" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.2"/>
                    <path d="M8 4v8M4 8h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Be a Founding Member
                </h4>
                <p className="about-cta-text">
                  Join now to be recognized as a founding member of our initiative. Early supporters will receive special recognition and opportunities to shape our advocacy approach.
                </p>
                <div className="about-progress-container">
                  <div className="about-progress-header">
                    <span className="about-progress-label">Development progress</span>
                    <span className="about-progress-value">25% complete</span>
                  </div>
                  <div className="about-progress-bar-bg">
                    <div className="about-progress-bar" style={{ width: '25%' }}></div>
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