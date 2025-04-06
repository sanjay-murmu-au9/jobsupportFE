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

      {/* Hero Section - Updated for Job Market Advocacy */}
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '4rem 1rem' }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center' 
          }}>
            <h1 style={{ marginBottom: '1.5rem' }}>
              Advocate for Unemployment Support in India
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
              onClick={navigateToRegister}
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
              maxWidth: '600px'
            }}>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontWeight: '500', 
                    fontSize: '0.875rem',
                    color: '#374151' 
                  }}>
                    Full Name*
                  </label>
                  <input 
                    type="text" 
                    style={{ 
                      width: '100%', 
                      padding: '0.5rem 0.75rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.375rem',
                      fontSize: '1rem'
                    }} 
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontWeight: '500', 
                    fontSize: '0.875rem',
                    color: '#374151' 
                  }}>
                    Email Address*
                  </label>
                  <input 
                    type="email" 
                    style={{ 
                      width: '100%', 
                      padding: '0.5rem 0.75rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.375rem',
                      fontSize: '1rem'
                    }} 
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontWeight: '500', 
                    fontSize: '0.875rem',
                    color: '#374151' 
                  }}>
                    State/Region in India*
                  </label>
                  <select
                    style={{ 
                      width: '100%', 
                      padding: '0.5rem 0.75rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.375rem',
                      fontSize: '1rem',
                      backgroundColor: 'white'
                    }}
                  >
                    <option value="">Select your state</option>
                    <option value="AN">Andaman and Nicobar Islands</option>
                    <option value="AP">Andhra Pradesh</option>
                    <option value="AR">Arunachal Pradesh</option>
                    <option value="AS">Assam</option>
                    <option value="BR">Bihar</option>
                    <option value="CH">Chandigarh</option>
                    <option value="CT">Chhattisgarh</option>
                    <option value="DN">Dadra and Nagar Haveli</option>
                    <option value="DD">Daman and Diu</option>
                    <option value="DL">Delhi</option>
                    <option value="GA">Goa</option>
                    <option value="GJ">Gujarat</option>
                    <option value="HR">Haryana</option>
                    <option value="HP">Himachal Pradesh</option>
                    <option value="JK">Jammu and Kashmir</option>
                    <option value="JH">Jharkhand</option>
                    <option value="KA">Karnataka</option>
                    <option value="KL">Kerala</option>
                    <option value="LA">Ladakh</option>
                    <option value="LD">Lakshadweep</option>
                    <option value="MP">Madhya Pradesh</option>
                    <option value="MH">Maharashtra</option>
                    <option value="MN">Manipur</option>
                    <option value="ML">Meghalaya</option>
                    <option value="MZ">Mizoram</option>
                    <option value="NL">Nagaland</option>
                    <option value="OR">Odisha</option>
                    <option value="PY">Puducherry</option>
                    <option value="PB">Punjab</option>
                    <option value="RJ">Rajasthan</option>
                    <option value="SK">Sikkim</option>
                    <option value="TN">Tamil Nadu</option>
                    <option value="TG">Telangana</option>
                    <option value="TR">Tripura</option>
                    <option value="UP">Uttar Pradesh</option>
                    <option value="UT">Uttarakhand</option>
                    <option value="WB">West Bengal</option>
                  </select>
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontWeight: '500', 
                    fontSize: '0.875rem',
                    color: '#374151' 
                  }}>
                    Employment Status*
                  </label>
                  <select
                    style={{ 
                      width: '100%', 
                      padding: '0.5rem 0.75rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.375rem',
                      fontSize: '1rem',
                      backgroundColor: 'white'
                    }}
                  >
                    <option value="">Select your status</option>
                    <option value="unemployed">Recently laid off/unemployed</option>
                    <option value="searching">Employed but searching</option>
                    <option value="student">Student</option>
                    <option value="graduate">Fresh graduate</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontWeight: '500', 
                    fontSize: '0.875rem',
                    color: '#374151' 
                  }}>
                    Upload Resume/CV (PDF)
                  </label>
                  <div style={{ 
                    border: '2px dashed #d1d5db', 
                    borderRadius: '0.375rem', 
                    padding: '1.5rem', 
                    textAlign: 'center',
                    cursor: 'pointer',
                    backgroundColor: '#f9fafb'
                  }}>
                    <p style={{ marginBottom: '0.5rem', color: '#4b5563' }}>
                      Drag & drop your resume here or click to browse
                    </p>
                    <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                      Max file size: 5MB, Accepted: PDF
                    </p>
                    <input 
                      type="file" 
                      accept=".pdf" 
                      style={{ display: 'none' }} 
                      id="resume-upload" 
                    />
                    <label 
                      htmlFor="resume-upload"
                      style={{
                        display: 'inline-block',
                        marginTop: '1rem',
                        padding: '0.5rem 1rem',
                        backgroundColor: '#e5e7eb',
                        color: '#374151',
                        borderRadius: '0.25rem',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        cursor: 'pointer'
                      }}
                    >
                      Select File
                    </label>
                  </div>
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontWeight: '500', 
                    fontSize: '0.875rem',
                    color: '#374151' 
                  }}>
                    Your Message to the Government (Optional)
                  </label>
                  <textarea
                    style={{ 
                      width: '100%', 
                      padding: '0.5rem 0.75rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.375rem',
                      fontSize: '1rem',
                      minHeight: '100px',
                      resize: 'vertical'
                    }}
                    placeholder="Share your personal experience with unemployment or how government action could help you..."
                  />
                </div>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <input 
                    type="checkbox" 
                    id="consent" 
                    style={{ marginTop: '0.25rem' }}
                  />
                  <label htmlFor="consent" style={{ fontSize: '0.875rem', color: '#4b5563' }}>
                    I consent to my information being included in the petition to the Indian government for unemployment support and job creation initiatives.
                  </label>
                </div>
                
                <button
                  type="button"
                  style={{
                    marginTop: '1rem',
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
              </form>
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
              }}>JobSupportFE</h3>
              <p style={{ 
                maxWidth: '400px',
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                Advocating for government action to address India's unemployment crisis. We gather data and stories to push for concrete policy changes and support for those affected.
              </p>
              <div className="social-icons" style={{ 
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
              }}>Campaign</h4>
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
                    <span style={{ marginRight: '0.5rem' }}>›</span> About Our Initiative
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
                    <span style={{ marginRight: '0.5rem' }}>›</span> Impact Stories
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
                    <span style={{ marginRight: '0.5rem' }}>›</span> Progress Updates
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
              }}>Resources</h4>
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
                    <span style={{ marginRight: '0.5rem' }}>›</span> Unemployment Statistics
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
                    <span style={{ marginRight: '0.5rem' }}>›</span> Government Policies
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
                    <span style={{ marginRight: '0.5rem' }}>›</span> Economic Reports
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
                    <span style={{ marginRight: '0.5rem' }}>›</span> Media Articles
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
                  <span>123 Advocacy Street, New Delhi, India, 110001</span>
                </li>
                <li style={{ 
                  marginBottom: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <i className="fas fa-phone-alt" style={{ marginRight: '0.75rem' }}></i>
                  <span>+91 98765 43210</span>
                </li>
                <li style={{ 
                  marginBottom: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <i className="fas fa-envelope" style={{ marginRight: '0.75rem' }}></i>
                  <span>contact@jobsupportfe.com</span>
                </li>
                <li style={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <i className="fas fa-clock" style={{ marginRight: '0.75rem' }}></i>
                  <span>Mon-Fri: 9AM - 6PM</span>
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
            <p>&copy; {new Date().getFullYear()} JobSupportFE - Advocating for India's Unemployed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SimpleApp; 