import React from 'react';
import Navbar from '../components/Navbar';
import './HomePage.css';

interface HomePageProps {
  onNavigateHome?: () => void;
  onNavigateRegister?: () => void;
  onNavigateStories?: () => void;
  onNavigateResources?: () => void;
  onNavigateAbout?: () => void;
  onNavigateLogin?: () => void;
}

const HomePage: React.FC<HomePageProps> = ({
  onNavigateHome,
  onNavigateRegister,
  onNavigateStories,
  onNavigateResources,
  onNavigateAbout,
  onNavigateLogin
}) => {
  return (
    <div>
      <Navbar 
        onNavigateHome={onNavigateHome}
        onNavigateRegister={onNavigateRegister}
        onNavigateStories={onNavigateStories}
        onNavigateResources={onNavigateResources}
        onNavigateAbout={onNavigateAbout}
        onNavigateLogin={onNavigateLogin}
        currentPage="home"
      />

      {/* Hero Section - Updated for Job Market Advocacy */}
      <section className="home-hero-section">
        <div className="container">
          <div className="home-hero-content">
            <h1 className="home-hero-title">
              Making Employment a National Priority for India
            </h1>
            <p className="home-hero-description">
              The unemployment crisis in India has reached critical levels. Over <strong>5.2 million</strong> workers 
              have lost their jobs in recent years, with <strong>78%</strong> struggling to meet basic needs. 
              We're building a coalition to petition the Indian government for meaningful support and new job opportunities.
            </p>
            <div className="home-stats-grid">
              <div className="home-stat-card">
                <p className="home-stat-value">56%</p>
                <p className="home-stat-label">youth unemployment rate in certain sectors</p>
              </div>
              <div className="home-stat-card">
                <p className="home-stat-value">83%</p>
                <p className="home-stat-label">faced salary cuts or delayed payments</p>
              </div>
              <div className="home-stat-card">
                <p className="home-stat-value">72%</p>
                <p className="home-stat-label">unable to pay EMIs and loan installments</p>
              </div>
            </div>
            <button
              onClick={onNavigateRegister}
              className="home-hero-button"
            >
              Join Our Initiative
            </button>
          </div>
        </div>
      </section>

      {/* Campaign Registration Section */}
      <section className="home-campaign-section">
        <div className="container">
          <div className="home-campaign-container">
            <div className="home-campaign-header">
              <h2 className="home-campaign-title">
                Register to Strengthen Our Collective Voice
              </h2>
              <p className="home-campaign-description">
                By registering with us, you help strengthen our petition to the Indian government 
                for unemployment benefits, skill development programs, and new job creation initiatives. 
                Together, we can make the government take action on this critical issue.
              </p>
            </div>
            
            <div className="home-registration-card">
              <h3 className="home-registration-title">Join thousands of Indians fighting for change</h3>
              <p className="home-registration-description">
                Our registration form collects essential information to strengthen our petition.
                Your details will be kept secure and only used for campaign purposes.
              </p>
              <button
                onClick={onNavigateRegister}
                className="home-register-button"
              >
                Sign the Petition
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Campaign Works (Features) */}
      <section className="home-features-section">
        <div className="container">
          <div className="home-features-header">
            <h2 className="home-features-title">
              How Our Campaign Works
            </h2>
            <p className="home-features-description">
              Our three-step approach to advocate for government action on unemployment
            </p>
          </div>
          
          <div className="home-features-grid">
            <div className="home-feature-card">
              <div className="home-feature-icon">
                <span className="home-feature-number">1</span>
              </div>
              <h3 className="home-feature-title">Collect Data & Signatures</h3>
              <p>We gather information from affected individuals across India to understand the full impact of unemployment.</p>
            </div>
            
            <div className="home-feature-card">
              <div className="home-feature-icon">
                <span className="home-feature-number">2</span>
              </div>
              <h3 className="home-feature-title">Present Evidence to Government</h3>
              <p>We compile the data and stories into a comprehensive report for submission to government officials.</p>
            </div>
            
            <div className="home-feature-card">
              <div className="home-feature-icon">
                <span className="home-feature-number">3</span>
              </div>
              <h3 className="home-feature-title">Advocate for Change</h3>
              <p>We engage with policymakers to push for concrete action: job creation programs, unemployment benefits, and skill development initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="home-stats-section">
        <div className="container">
          <div className="home-stats-container">
            <div className="home-stats-item">
              <p className="home-stats-value">85k+</p>
              <p>Petition Signatures</p>
            </div>
            <div className="home-stats-item">
              <p className="home-stats-value">27+</p>
              <p>Districts Represented</p>
            </div>
            <div className="home-stats-item">
              <p className="home-stats-value">8+</p>
              <p>MP Meetings Conducted</p>
            </div>
            <div className="home-stats-item">
              <p className="home-stats-value">15k+</p>
              <p>Personal Stories Shared</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="home-cta-section">
        <div className="container">
          <div className="home-cta-container">
            <h2 className="home-cta-title">Join the Movement for Change</h2>
            <p className="home-cta-description">
              Your voice matters. Sign our petition and help us show the Indian government that urgent action is needed to address the unemployment crisis.
            </p>
            <button
              onClick={onNavigateRegister}
              className="home-cta-button"
            >
              Sign The Petition
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="container">
          <div className="home-footer-columns">
            <div className="home-footer-brand">
              <h3 className="home-footer-title">JobPriorityIndia</h3>
              <p className="home-footer-description">
                Advocating for government action to address India's unemployment crisis. We gather data and stories to push for concrete policy changes and support for those affected.
              </p>
            </div>
            <div className="home-footer-column">
              <h4 className="home-footer-heading">Campaign</h4>
              <ul className="home-footer-links">
                <li className="home-footer-link-item">
                  <a href="#" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      if (onNavigateHome) onNavigateHome(); 
                    }} 
                    className="home-footer-link"
                  >
                    <span className="home-footer-link-arrow">›</span> Home
                  </a>
                </li>
                <li className="home-footer-link-item">
                  <a href="#" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      if (onNavigateAbout) onNavigateAbout(); 
                    }}
                    className="home-footer-link"
                  >
                    <span className="home-footer-link-arrow">›</span> About Our Initiative
                  </a>
                </li>
                <li className="home-footer-link-item">
                  <a href="#" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      if (onNavigateStories) onNavigateStories(); 
                    }}
                    className="home-footer-link"
                  >
                    <span className="home-footer-link-arrow">›</span> Impact Stories
                  </a>
                </li>
                <li className="home-footer-link-item">
                  <a href="#" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      if (onNavigateResources) onNavigateResources(); 
                    }}
                    className="home-footer-link"
                  >
                    <span className="home-footer-link-arrow">›</span> Resources
                  </a>
                </li>
              </ul>
            </div>
            <div className="home-footer-column">
              <h4 className="home-footer-heading">Contact</h4>
              <ul className="home-footer-links">
                <li className="home-contact-item">
                  <span className="home-contact-icon">📍</span>
                  <span>123 Advocacy Street, New Delhi, India, 110001</span>
                </li>
                <li className="home-contact-item">
                  <span className="home-contact-icon">📞</span>
                  <span>+91 98765 43210</span>
                </li>
                <li className="home-contact-item">
                  <span className="home-contact-icon">✉️</span>
                  <span>contact@jobsupportfe.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="home-footer-copyright">
            <p>&copy; {new Date().getFullYear()} JobPriorityIndia - Advocating for India's Unemployed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;