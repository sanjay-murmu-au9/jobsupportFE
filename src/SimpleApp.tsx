import React, { useState } from 'react';
import Navbar from './components/Navbar';
import RegisterPage from './pages/RegisterPage';
import AnimatedStatCard from './components/common/AnimatedStatCard';
import './SimpleApp.css';
import './styles.css';

const SimpleApp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'register' | 'stories' | 'resources' | 'about'>('home');

  const navigateToHome = () => setCurrentPage('home');
  const navigateToRegister = () => setCurrentPage('register');
  const navigateToStories = () => setCurrentPage('stories');
  const navigateToResources = () => setCurrentPage('resources');
  const navigateToAbout = () => {
    console.log('Navigating to About');
    setCurrentPage('about');
  };
  const navigateToLogin = () => {
    alert("Login functionality is not available in the campaign platform.");
    setCurrentPage('home');
  };

  if (currentPage === 'register') {
    return (
      <RegisterPage
        onNavigateHome={navigateToHome}
        onNavigateRegister={navigateToRegister}
        onNavigateStories={navigateToStories}
        onNavigateResources={navigateToResources}
        onNavigateAbout={navigateToAbout}
        onNavigateLogin={navigateToLogin}
      />
    );
  }

  if (currentPage === 'stories') {
    return (
      <div className="placeholder-page">
        <Navbar
          onNavigateHome={navigateToHome}
          onNavigateRegister={navigateToRegister}
          onNavigateStories={navigateToStories}
          onNavigateResources={navigateToResources}
          onNavigateAbout={navigateToAbout}
          onNavigateLogin={navigateToLogin}
          currentPage="stories"
        />
        <div className="page-content">
          <div className="page-header">
            <div className="icon-container">
              <div className="icon-bg">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="development-badge">
                <span className="badge-dot"></span>
                Under Development
              </span>
            </div>
            <h1 className="page-title">
              Stories Coming Soon
            </h1>
            <p className="page-description">
              We're collecting powerful stories from unemployed individuals across India. Be one of the first to share your journey and inspire others.
            </p>
            <div className="divider"></div>
            <div className="button-group">
              <button
                onClick={navigateToRegister}
                className="primary-button"
              >
                Be an Early Contributor
              </button>
              <button
                onClick={navigateToHome}
                className="secondary-button"
              >
                Return to Home
              </button>
            </div>
          </div>

          <div className="info-card">
            <div className="card-header">
              <svg className="header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="header-title">
                In Development: We're Building Something Special
              </h3>
            </div>
            <div className="card-content">
              <p className="content-text">
                The Stories section is currently under active development. This feature will allow unemployed individuals to share their personal experiences, creating a powerful collective voice.
              </p>
              <div className="alert">
                <div className="alert-content">
                  <svg className="alert-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <div className="alert-message">
                    Expected launch: Coming soon. Register now to be notified when this feature is available.
                  </div>
                </div>
              </div>
              <div className="feature-list">
                <div className="feature-item">
                  <dt className="feature-title">Personal Impact</dt>
                  <dd className="feature-description">
                    Stories humanize statistics. Your personal struggles with unemployment help policymakers understand the real impact of the job crisis.
                  </dd>
                </div>
                <div className="feature-item">
                  <dt className="feature-title">Build Community</dt>
                  <dd className="feature-description">
                    When others read your story, they realize they're not alone. Together, we form a stronger community for change.
                  </dd>
                </div>
                <div className="feature-item">
                  <dt className="feature-title">Drive Policy Change</dt>
                  <dd className="feature-description">
                    Compelling stories are powerful tools for advocacy. They can influence government officials to implement better unemployment policies.
                  </dd>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="progress-header">
                <span className="progress-label">
                  Development progress
                </span>
                <span className="progress-value">40% complete</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'resources') {
    return (
      <div className="placeholder-page">
        <Navbar
          onNavigateHome={navigateToHome}
          onNavigateRegister={navigateToRegister}
          onNavigateStories={navigateToStories}
          onNavigateResources={navigateToResources}
          onNavigateAbout={navigateToAbout}
          onNavigateLogin={navigateToLogin}
          currentPage="resources"
        />
        <div className="page-content">
          <div className="page-header">
            <div className="icon-container">
              <div className="icon-bg">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span className="development-badge">
                <span className="badge-dot"></span>
                Under Development
              </span>
            </div>
            <h1 className="page-title">
              Resources Hub Under Construction
            </h1>
            <p className="page-description">
              We're building a comprehensive resource center with unemployment statistics, government policies, and job-seeking tools to help the Indian workforce.
            </p>
            <div className="divider"></div>
            <div className="button-group">
              <button
                onClick={navigateToRegister}
                className="primary-button"
              >
                Join to Get Early Access
              </button>
              <button
                onClick={navigateToHome}
                className="secondary-button"
              >
                Return to Home
              </button>
            </div>
          </div>

          <div className="resource-grid">
            <div className="resource-card">
              <div className="resource-content">
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
                <div className="progress-header">
                  <span className="progress-label">Progress</span>
                  <span className="progress-value">65% complete</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>

            <div className="resource-card">
              <div className="resource-content">
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
                <div className="progress-header">
                  <span className="progress-label">Progress</span>
                  <span className="progress-value">30% complete</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>

            <div className="resource-card">
              <div className="resource-content">
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
                <div className="progress-header">
                  <span className="progress-label">Progress</span>
                  <span className="progress-value">15% complete</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="info-card">
            <div className="card-header">
              <svg className="header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="header-title">
                Help Us Build Our Resource Hub
              </h3>
            </div>
            <div className="card-content">
              <p className="content-text">
                We're actively developing the Resources section to provide valuable information and tools for unemployed individuals in India. Your participation and feedback can help us build a more robust platform.
              </p>
              <div className="alert">
                <div className="alert-content">
                  <svg className="alert-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <div className="alert-message">
                    Register now to be among the first to access our resources when they are released.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'about') {
    return (
      <div className="placeholder-page">
        <Navbar
          onNavigateHome={navigateToHome}
          onNavigateRegister={navigateToRegister}
          onNavigateStories={navigateToStories}
          onNavigateResources={navigateToResources}
          onNavigateAbout={navigateToAbout}
          onNavigateLogin={navigateToLogin}
          currentPage="about"
        />
        <div className="page-content">
          <div className="page-header">
            <div className="icon-container">
              <div className="icon-bg">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="development-badge">
                <span className="badge-dot"></span>
                Under Development
              </span>
            </div>
            <h1 className="page-title">
              About Our Initiative
            </h1>
            <p className="page-description">
              JobPriorityIndia is a grassroots movement advocating for better unemployment support and job creation policies in India.
            </p>
            <div className="divider"></div>
            <div className="button-group">
              <button
                onClick={navigateToRegister}
                className="primary-button"
              >
                Join Our Growing Movement
              </button>
              <button
                onClick={navigateToHome}
                className="secondary-button"
              >
                Return to Home
              </button>
            </div>
          </div>

          <div className="info-card">
            <div className="card-header">
              <svg className="header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="header-title">
                Our Mission & Vision <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-800">Coming Soon</span>
              </h3>
            </div>
            <div className="card-content">
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
                    <div className="progress-header">
                      <span className="progress-label">Development progress</span>
                      <span className="progress-value">25% complete</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar" style={{ width: '25%' }}></div>
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

  return (
    <div>
      <Navbar
        onNavigateHome={navigateToHome}
        onNavigateRegister={navigateToRegister}
        onNavigateStories={navigateToStories}
        onNavigateResources={navigateToResources}
        onNavigateAbout={navigateToAbout}
        onNavigateLogin={navigateToLogin}
        currentPage="home"
      />

      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              {/* Making Employment a National Priority for India */}
              India’s Jobs Market Is Collapsing—5.2 Million Lives at Danger!
            </h1>
            <p className="hero-description">
              The unemployment crisis in India has reached critical levels. Over <strong>5.2 million</strong> workers
              have lost their jobs in recent years, with <strong>78%</strong> struggling to meet basic needs.
              We're building a coalition to petition the Indian government for meaningful support and new job opportunities.
            </p>
            <div className="stats-grid">
              <AnimatedStatCard
                value={56}
                label="youth unemployment rate in certain sectors"
              />
              <AnimatedStatCard
                value={83}
                label="faced salary cuts or delayed payments"
              />
              <AnimatedStatCard
                value={72}
                label="unable to pay EMIs and loan installments"
              />
            </div>
            <button
              onClick={navigateToRegister}
              className="hero-button"
            >
              Join Our Initiative
            </button>
          </div>
        </div>
      </section>

      <section className="campaign-section">
        <div className="container campaign-container">
          <div className="campaign-header">
            <h2 className="campaign-title">
              Register to Strengthen Our Collective Voice
            </h2>
            <p className="campaign-description">
              By registering with us, you help strengthen our petition to the Indian government
              for unemployment benefits, skill development programs, and new job creation initiatives.
              Together, we can make the government take action on this critical issue.
            </p>
          </div>

          <div className="registration-card">
            <h3 className="registration-title">Join thousands of Indians fighting for change</h3>
            <p className="registration-description">
              Our registration form collects essential information to strengthen our petition.
              Your details will be kept secure and only used for campaign purposes.
            </p>
            <button
              onClick={navigateToRegister}
              className="register-button"
            >
              Sign the Petition
            </button>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="features-header">
            <h2 className="features-title">
              How Our Campaign Works
            </h2>
            <p className="features-description">
              Our three-step approach to advocate for government action on unemployment
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <span className="feature-number">1</span>
              </div>
              <h3 className="feature-title">Collect Data & Signatures</h3>
              <p className="feature-description">We gather information from affected individuals across India to understand the full impact of unemployment.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <span className="feature-number">2</span>
              </div>
              <h3 className="feature-title">Present Evidence to Government</h3>
              <p className="feature-description">We compile the data and stories into a comprehensive report for submission to government officials.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <span className="feature-number">3</span>
              </div>
              <h3 className="feature-title">Advocate for Change</h3>
              <p className="feature-description">We engage with policymakers to push for concrete action: job creation programs, unemployment benefits, and skill development initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-container">
          <div className="stats-item">
            <p className="stats-value">85k+</p>
            <p className="stats-label">Petition Signatures</p>
          </div>
          <div className="stats-item">
            <p className="stats-value">27+</p>
            <p className="stats-label">Districts Represented</p>
          </div>
          <div className="stats-item">
            <p className="stats-value">8+</p>
            <p className="stats-label">MP Meetings Conducted</p>
          </div>
          <div className="stats-item">
            <p className="stats-value">15k+</p>
            <p className="stats-label">Personal Stories Shared</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-container">
            <h2 className="cta-title">Join the Movement for Change</h2>
            <p className="cta-description">
              Your voice matters. Sign our petition and help us show the Indian government that urgent action is needed to address the unemployment crisis.
            </p>
            <button
              onClick={navigateToRegister}
              className="cta-button"
            >
              Sign The Petition
            </button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-columns">
            <div className="footer-brand">
              <h3 className="footer-title">JobPriorityIndia</h3>
              <p className="footer-description">
                Advocating for government action to address India's unemployment crisis. We gather data and stories to push for concrete policy changes and support for those affected.
              </p>
              <div className="social-icons">
                <a href="#" className="social-icon facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon linkedin">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="social-icon instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Campaign</h4>
              <ul className="footer-links">
                <li className="footer-link-item">
                  <a href="#"
                    onClick={(e) => { e.preventDefault(); navigateToHome(); }}
                    className="footer-link"
                  >
                    <span className="footer-link-arrow">›</span> Home
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#" className="footer-link">
                    <span className="footer-link-arrow">›</span> About Our Initiative
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#" className="footer-link">
                    <span className="footer-link-arrow">›</span> Impact Stories
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#" className="footer-link">
                    <span className="footer-link-arrow">›</span> Progress Updates
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Resources</h4>
              <ul className="footer-links">
                <li className="footer-link-item">
                  <a href="#" className="footer-link">
                    <span className="footer-link-arrow">›</span> Unemployment Statistics
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#" className="footer-link">
                    <span className="footer-link-arrow">›</span> Government Policies
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#" className="footer-link">
                    <span className="footer-link-arrow">›</span> Economic Reports
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#" className="footer-link">
                    <span className="footer-link-arrow">›</span> Media Articles
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Contact Us</h4>
              <ul className="footer-links">
                <li className="contact-item">
                  <i className="fas fa-map-marker-alt contact-icon"></i>
                  <span>123 Advocacy Street, New Delhi, India, 110001</span>
                </li>
                <li className="contact-item">
                  <i className="fas fa-phone-alt contact-icon"></i>
                  <span>+91 98765 43210</span>
                </li>
                <li className="contact-item">
                  <i className="fas fa-envelope contact-icon"></i>
                  <span>contact@jobsupportfe.com</span>
                </li>
                <li className="contact-item">
                  <i className="fas fa-clock contact-icon"></i>
                  <span>Mon-Fri: 9AM - 6PM</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} JobPriorityIndia - Advocating for India's Unemployed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SimpleApp;