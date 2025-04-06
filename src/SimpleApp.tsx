import React, { useState } from 'react';
import Navbar from './components/Navbar';
import RegisterPage from './pages/RegisterPage';

// Login Form Component
const LoginForm: React.FC<{ onNavigateRegister?: () => void }> = ({ onNavigateRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    
    // Clear login error when any field changes
    if (loginError) {
      setLoginError('');
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes - simulating credential check
      if (formData.email === 'test@example.com' && formData.password === 'password123') {
        // Success - would typically set auth token or similar
        console.log('Login successful');
        // Redirect or other post-login actions would go here
      } else {
        // Authentication failed
        setLoginError('Invalid email or password. Please try again.');
      }
    } catch {
      setLoginError('Login failed. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {loginError && (
        <div style={{ 
          backgroundColor: '#fee2e2',
          borderRadius: '0.375rem',
          padding: '0.75rem',
          marginBottom: '1.5rem',
          color: '#b91c1c',
          fontSize: '0.875rem'
        }}>
          {loginError}
        </div>
      )}
    
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '0.5rem', 
          fontWeight: '500', 
          fontSize: '0.875rem' 
        }}>
          Email
        </label>
        <input 
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ 
            width: '100%', 
            padding: '0.5rem 0.75rem', 
            border: `1px solid ${errors.email ? '#f87171' : '#d1d5db'}`, 
            borderRadius: '0.375rem',
            outline: 'none'
          }} 
          placeholder="Enter your email"
        />
        {errors.email && (
          <p style={{ 
            marginTop: '0.25rem', 
            fontSize: '0.75rem', 
            color: '#dc2626' 
          }}>
            {errors.email}
          </p>
        )}
      </div>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '0.5rem', 
          fontWeight: '500', 
          fontSize: '0.875rem' 
        }}>
          Password
        </label>
        <input 
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={{ 
            width: '100%', 
            padding: '0.5rem 0.75rem', 
            border: `1px solid ${errors.password ? '#f87171' : '#d1d5db'}`, 
            borderRadius: '0.375rem',
            outline: 'none'
          }} 
          placeholder="Enter your password"
        />
        {errors.password && (
          <p style={{ 
            marginTop: '0.25rem', 
            fontSize: '0.75rem', 
            color: '#dc2626' 
          }}>
            {errors.password}
          </p>
        )}
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            id="rememberMe"
            style={{ marginRight: '0.5rem' }}
          />
          <label htmlFor="rememberMe" style={{ fontSize: '0.875rem' }}>Remember me</label>
        </div>
        <a href="#" style={{ fontSize: '0.875rem', color: '#2563eb' }}>Forgot password?</a>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          width: '100%',
          backgroundColor: '#2563eb',
          color: 'white',
          fontWeight: '500',
          padding: '0.75rem 1rem',
          borderRadius: '0.375rem',
          border: 'none',
          cursor: isSubmitting ? 'not-allowed' : 'pointer',
          opacity: isSubmitting ? 0.7 : 1,
          marginBottom: '1.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {isSubmitting ? (
          <>
            <span style={{ 
              display: 'inline-block', 
              width: '1rem', 
              height: '1rem', 
              borderRadius: '50%', 
              border: '2px solid white', 
              borderTopColor: 'transparent', 
              marginRight: '0.5rem',
              animation: 'spin 1s linear infinite'
            }}></span>
            Logging in...
          </>
        ) : 'Log in'}
      </button>
      
      <p style={{ textAlign: 'center', fontSize: '0.875rem' }}>
        Don't have an account?{' '}
        <a 
          href="#" 
          onClick={(e) => { 
            e.preventDefault(); 
            if (onNavigateRegister) onNavigateRegister(); 
          }}
          style={{ 
            color: '#2563eb', 
            fontWeight: '500',
            textDecoration: 'none'
          }}
        >
          Register now
        </a>
      </p>
    </form>
  );
};

const SimpleApp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'register' | 'login'>('home');

  // Simple navigation functions
  const navigateToHome = () => setCurrentPage('home');
  const navigateToRegister = () => setCurrentPage('register');
  const navigateToLogin = () => setCurrentPage('login');

  // Basic router
  if (currentPage === 'register') {
    return (
      <RegisterPage 
        onNavigateHome={navigateToHome}
        onNavigateRegister={navigateToRegister}
        onNavigateLogin={navigateToLogin}
      />
    );
  }

  if (currentPage === 'login') {
    return (
      <div>
        <Navbar 
          onNavigateHome={navigateToHome}
          onNavigateRegister={navigateToRegister}
          onNavigateLogin={navigateToLogin}
        />
        <div style={{ 
          minHeight: 'calc(100vh - 4rem)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          backgroundColor: '#f7f9fc',
          padding: '2rem'
        }}>
          <div style={{ 
            backgroundColor: 'white', 
            padding: '2rem', 
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            width: '100%',
            maxWidth: '28rem'
          }}>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
              Log in to your account
            </h1>
            <LoginForm onNavigateRegister={navigateToRegister} />
          </div>
        </div>
      </div>
    );
  }

  // Home page
  return (
    <div>
      <Navbar 
        onNavigateHome={navigateToHome}
        onNavigateRegister={navigateToRegister}
        onNavigateLogin={navigateToLogin}
      />

      {/* Hero Section */}
      <section style={{ backgroundColor: '#f7f9fc', padding: '4rem 1rem' }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center' 
          }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
              Supporting Job Seekers Worldwide
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '800px' }}>
              Connect with opportunities that match your skills and aspirations. 
              Our platform is designed to help students and unemployed individuals 
              find their perfect career path.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={navigateToRegister}
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
                Register Now
              </button>
              <a
                href="#how-it-works"
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 1.5rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.375rem',
                  fontWeight: '500',
                  color: '#4b5563',
                  textDecoration: 'none'
                }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" style={{ padding: '4rem 1rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem' }}>How It Works</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Our simple three-step process to help you find and secure the job you deserve.
            </p>
          </div>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '2rem',
            margin: '0 auto',
            maxWidth: '1000px'
          }} className="md:flex-row">
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
              <h3 style={{ marginBottom: '0.75rem' }}>Create Your Profile</h3>
              <p>Register and build your professional profile highlighting your skills and experience.</p>
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
              <h3 style={{ marginBottom: '0.75rem' }}>Explore Opportunities</h3>
              <p>Browse through our extensive list of job openings across various industries.</p>
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
              <h3 style={{ marginBottom: '0.75rem' }}>Apply and Succeed</h3>
              <p>Submit applications with ease and track your progress as you move toward your dream job.</p>
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
          }} className="md:flex-row md:text-left">
            <div style={{ flex: '1' }}>
              <p style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>10k+</p>
              <p>Job Seekers</p>
            </div>
            <div style={{ flex: '1' }}>
              <p style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>5k+</p>
              <p>Job Listings</p>
            </div>
            <div style={{ flex: '1' }}>
              <p style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>2k+</p>
              <p>Successful Placements</p>
            </div>
            <div style={{ flex: '1' }}>
              <p style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>500+</p>
              <p>Partner Companies</p>
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
            <h2 style={{ fontSize: '1.875rem', marginBottom: '1rem' }}>Ready to Start Your Journey?</h2>
            <p style={{ marginBottom: '2rem', maxWidth: '600px' }}>
              Join thousands of job seekers who have found their ideal positions through our platform.
            </p>
            <button
              onClick={navigateToRegister}
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
              Register Today
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
              }}>JobSupportFE</h3>
              <p style={{ 
                maxWidth: '400px',
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                Helping students and unemployed individuals navigate the global job market and find meaningful employment.
              </p>
              <div style={{ 
                display: 'flex', 
                gap: '1rem', 
                marginTop: '1.5rem'
              }}>
                <a href="#" style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  fontSize: '1.25rem',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#4267B2';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                }}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  fontSize: '1.25rem',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#1DA1F2';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                }}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  fontSize: '1.25rem',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#0077B5';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                }}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  fontSize: '1.25rem',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#E4405F';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                }}>
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
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
              }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#" 
                    onClick={(e) => { e.preventDefault(); navigateToHome(); }} 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    <span style={{ marginRight: '0.5rem' }}>›</span> Home
                  </a>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#" 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    <span style={{ marginRight: '0.5rem' }}>›</span> Jobs
                  </a>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#" 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    <span style={{ marginRight: '0.5rem' }}>›</span> Resources
                  </a>
                </li>
                <li>
                  <a href="#" 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    <span style={{ marginRight: '0.5rem' }}>›</span> About Us
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
              }}>Support</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#" 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    <span style={{ marginRight: '0.5rem' }}>›</span> FAQ
                  </a>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#" 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    <span style={{ marginRight: '0.5rem' }}>›</span> Contact Us
                  </a>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#" 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    <span style={{ marginRight: '0.5rem' }}>›</span> Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    <span style={{ marginRight: '0.5rem' }}>›</span> Terms of Service
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
              }}>Contact Us</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ 
                  marginBottom: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'flex-start'
                }}>
                  <i className="fas fa-map-marker-alt" style={{ marginRight: '0.75rem', marginTop: '0.25rem' }}></i>
                  <span>123 Job Street, Career City, Employment State, 12345</span>
                </li>
                <li style={{ 
                  marginBottom: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <i className="fas fa-phone-alt" style={{ marginRight: '0.75rem' }}></i>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li style={{ 
                  marginBottom: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <i className="fas fa-envelope" style={{ marginRight: '0.75rem' }}></i>
                  <span>info@jobsupportfe.com</span>
                </li>
                <li style={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <i className="fas fa-clock" style={{ marginRight: '0.75rem' }}></i>
                  <span>Mon-Fri: 9AM - 5PM</span>
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
            <p>&copy; {new Date().getFullYear()} JobSupportFE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SimpleApp; 