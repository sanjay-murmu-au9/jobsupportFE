import React from 'react';
import Navbar from '../components/Navbar';

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
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '8rem 1rem 4rem 1rem' }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center' 
          }}>
            <h1 style={{ marginBottom: '1.5rem' }}>
              Making Employment a National Priority for India
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '800px', lineHeight: '1.6' }}>
              The unemployment crisis in India has reached critical levels. Over <strong>5.2 million</strong> workers 
              have lost their jobs in recent years, with <strong>78%</strong> struggling to meet basic needs. 
              We're building a coalition to petition the Indian government for meaningful support and new job opportunities.
            </p>
            <div className="responsive-grid" style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: '2rem',
              marginBottom: '2rem',
              width: '100%',
              maxWidth: '900px'
            }}>
              <div style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                padding: '1.5rem', 
                borderRadius: '0.5rem',
                flex: '1',
                minWidth: '200px'
              }}>
                <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>56%</p>
                <p style={{ fontSize: '1rem' }}>youth unemployment rate in certain sectors</p>
              </div>
              <div style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                padding: '1.5rem', 
                borderRadius: '0.5rem',
                flex: '1',
                minWidth: '200px'
              }}>
                <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>83%</p>
                <p style={{ fontSize: '1rem' }}>faced salary cuts or delayed payments</p>
              </div>
              <div style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                padding: '1.5rem', 
                borderRadius: '0.5rem',
                flex: '1',
                minWidth: '200px'
              }}>
                <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>72%</p>
                <p style={{ fontSize: '1rem' }}>unable to pay EMIs and loan installments</p>
              </div>
            </div>
            <button
              onClick={onNavigateRegister}
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#ffffff',
                color: '#1e3a8a',
                borderRadius: '0.375rem',
                fontWeight: '600',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.125rem'
              }}
            >
              Join Our Initiative
            </button>
          </div>
        </div>
      </section>

      {/* Campaign Registration Section */}
      <section style={{ backgroundColor: '#f7f9fc', padding: '4rem 1rem' }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '700px' }}>
              <h2 style={{ marginBottom: '1rem', color: '#1e3a8a' }}>
                Register to Strengthen Our Collective Voice
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#4b5563' }}>
                By registering with us, you help strengthen our petition to the Indian government 
                for unemployment benefits, skill development programs, and new job creation initiatives. 
                Together, we can make the government take action on this critical issue.
              </p>
            </div>
            
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '0.5rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
              padding: '2rem',
              width: '100%',
              maxWidth: '600px',
              textAlign: 'center'
            }}>
              <h3 style={{ marginBottom: '1.5rem', color: '#1e3a8a' }}>Join thousands of Indians fighting for change</h3>
              <p style={{ marginBottom: '2rem' }}>
                Our registration form collects essential information to strengthen our petition.
                Your details will be kept secure and only used for campaign purposes.
              </p>
              <button
                onClick={onNavigateRegister}
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  borderRadius: '0.375rem',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                Sign the Petition
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Campaign Works (Features) */}
      <section style={{ padding: '4rem 1rem' }}>
        <div className="container">
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '3rem'
          }}>
            <h2 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>
              How Our Campaign Works
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#4b5563', maxWidth: '700px', margin: '0 auto' }}>
              Our three-step approach to advocate for government action on unemployment
            </p>
          </div>
          
          <div className="responsive-grid" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '2rem',
            margin: '0 auto',
            maxWidth: '1000px'
          }}>
            <div style={{ 
              flex: '1', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              backgroundColor: '#f9fafb'
            }}>
              <div style={{ 
                backgroundColor: '#dbeafe',
                borderRadius: '50%',
                width: '4rem',
                height: '4rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb' }}>1</span>
              </div>
              <h3 style={{ marginBottom: '0.75rem' }}>Collect Data & Signatures</h3>
              <p>We gather information from affected individuals across India to understand the full impact of unemployment.</p>
            </div>
            
            <div style={{ 
              flex: '1', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              backgroundColor: '#f9fafb'
            }}>
              <div style={{ 
                backgroundColor: '#dbeafe',
                borderRadius: '50%',
                width: '4rem',
                height: '4rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb' }}>2</span>
              </div>
              <h3 style={{ marginBottom: '0.75rem' }}>Present Evidence to Government</h3>
              <p>We compile the data and stories into a comprehensive report for submission to government officials.</p>
            </div>
            
            <div style={{ 
              flex: '1', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              backgroundColor: '#f9fafb'
            }}>
              <div style={{ 
                backgroundColor: '#dbeafe',
                borderRadius: '50%',
                width: '4rem',
                height: '4rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb' }}>3</span>
              </div>
              <h3 style={{ marginBottom: '0.75rem' }}>Advocate for Change</h3>
              <p>We engage with policymakers to push for concrete action: job creation programs, unemployment benefits, and skill development initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ backgroundColor: '#2563eb', color: 'white', padding: '4rem 1rem' }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '2rem',
            textAlign: 'center'
          }} className="responsive-grid md:flex-row md:text-left">
            <div style={{ flex: '1' }}>
              <p style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>85k+</p>
              <p>Petition Signatures</p>
            </div>
            <div style={{ flex: '1' }}>
              <p style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>27+</p>
              <p>Districts Represented</p>
            </div>
            <div style={{ flex: '1' }}>
              <p style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>8+</p>
              <p>MP Meetings Conducted</p>
            </div>
            <div style={{ flex: '1' }}>
              <p style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>15k+</p>
              <p>Personal Stories Shared</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: '4rem 1rem' }}>
        <div className="container">
          <div style={{ 
            backgroundColor: '#f9fafb', 
            borderRadius: '0.5rem', 
            padding: '2rem', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '1.875rem', marginBottom: '1rem' }}>Join the Movement for Change</h2>
            <p style={{ marginBottom: '2rem', maxWidth: '600px' }}>
              Your voice matters. Sign our petition and help us show the Indian government that urgent action is needed to address the unemployment crisis.
            </p>
            <button
              onClick={onNavigateRegister}
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#2563eb',
                color: 'white',
                borderRadius: '0.375rem',
                fontWeight: '500',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Sign The Petition
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#1e3a8a', 
        color: 'white', 
        padding: '3rem 1rem',
        boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '2rem',
            flexWrap: 'wrap'
          }} className="footer-columns md:flex-row">
            <div style={{ flex: '1.5' }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '1rem',
                fontWeight: '600',
                color: '#fff',
                borderBottom: '2px solid #4f84e8',
                paddingBottom: '0.5rem',
                display: 'inline-block'
              }}>JobPriorityIndia</h3>
              <p style={{ 
                maxWidth: '400px',
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                Advocating for government action to address India's unemployment crisis. We gather data and stories to push for concrete policy changes and support for those affected.
              </p>
            </div>
            <div style={{ flex: '1' }}>
              <h4 style={{ 
                marginBottom: '1rem',
                fontWeight: '600',
                fontSize: '1.125rem',
                color: '#fff',
                borderBottom: '2px solid #4f84e8',
                paddingBottom: '0.5rem',
                display: 'inline-block'
              }}>Campaign</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      if (onNavigateHome) onNavigateHome(); 
                    }} 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <span style={{ marginRight: '0.5rem' }}>›</span> Home
                  </a>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      if (onNavigateAbout) onNavigateAbout(); 
                    }}
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <span style={{ marginRight: '0.5rem' }}>›</span> About Our Initiative
                  </a>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      if (onNavigateStories) onNavigateStories(); 
                    }}
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <span style={{ marginRight: '0.5rem' }}>›</span> Impact Stories
                  </a>
                </li>
                <li>
                  <a href="#" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      if (onNavigateResources) onNavigateResources(); 
                    }}
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <span style={{ marginRight: '0.5rem' }}>›</span> Resources
                  </a>
                </li>
              </ul>
            </div>
            <div style={{ flex: '1' }}>
              <h4 style={{ 
                marginBottom: '1rem',
                fontWeight: '600',
                fontSize: '1.125rem',
                color: '#fff',
                borderBottom: '2px solid #4f84e8',
                paddingBottom: '0.5rem',
                display: 'inline-block'
              }}>Contact</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ 
                  marginBottom: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'flex-start'
                }}>
                  <span style={{ marginRight: '0.75rem', marginTop: '0.25rem' }}>📍</span>
                  <span>123 Advocacy Street, New Delhi, India, 110001</span>
                </li>
                <li style={{ 
                  marginBottom: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ marginRight: '0.75rem' }}>📞</span>
                  <span>+91 98765 43210</span>
                </li>
                <li style={{ 
                  marginBottom: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ marginRight: '0.75rem' }}>✉️</span>
                  <span>contact@jobsupportfe.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ 
            textAlign: 'center', 
            marginTop: '3rem', 
            borderTop: '1px solid rgba(255,255,255,0.2)', 
            paddingTop: '1.5rem',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '0.875rem'
          }}>
            <p>&copy; {new Date().getFullYear()} JobPriorityIndia - Advocating for India's Unemployed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 