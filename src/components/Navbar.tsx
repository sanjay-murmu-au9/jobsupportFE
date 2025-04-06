import React, { useState } from 'react';

interface NavbarProps {
  onNavigateHome?: () => void;
  onNavigateRegister?: () => void;
  onNavigateLogin?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onNavigateHome, 
  onNavigateRegister, 
  onNavigateLogin 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>, 
    callback?: () => void
  ) => {
    if (callback) {
      e.preventDefault();
      callback();
    }
  };

  return (
    <nav style={{
      backgroundColor: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      padding: '0.5rem 1rem'
    }}>
      <div style={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '4rem'
      }}>
        <div style={{ 
          display: 'flex',
          alignItems: 'center'
        }}>
          <div>
            <a 
              href="#" 
              onClick={(e) => handleNavigation(e, onNavigateHome)} 
              style={{ 
                color: '#2563eb',
                fontWeight: 'bold',
                fontSize: '1.25rem',
                textDecoration: 'none'
              }}
            >
              JobSupportFE
            </a>
          </div>
          {/* Desktop navigation */}
          <div style={{ marginLeft: '1.5rem' }} className="hidden md:flex md:space-x-8">
            <a 
              href="#" 
              onClick={(e) => handleNavigation(e, onNavigateHome)}
              style={{ 
                color: '#111827',
                paddingBottom: '0.25rem',
                borderBottom: '2px solid #2563eb',
                fontSize: '0.875rem',
                fontWeight: '500',
                textDecoration: 'none'
              }}
            >
              Home
            </a>
            <a href="#" style={{ 
              color: '#6b7280',
              paddingBottom: '0.25rem',
              borderBottom: '2px solid transparent',
              fontSize: '0.875rem',
              fontWeight: '500',
              textDecoration: 'none'
            }}>
              Jobs
            </a>
            <a href="#" style={{ 
              color: '#6b7280',
              paddingBottom: '0.25rem',
              borderBottom: '2px solid transparent',
              fontSize: '0.875rem',
              fontWeight: '500',
              textDecoration: 'none'
            }}>
              Resources
            </a>
            <a href="#" style={{ 
              color: '#6b7280',
              paddingBottom: '0.25rem',
              borderBottom: '2px solid transparent',
              fontSize: '0.875rem',
              fontWeight: '500',
              textDecoration: 'none'
            }}>
              About
            </a>
          </div>
        </div>
        {/* Desktop buttons */}
        <div className="hidden md:flex items-center">
          <a
            href="#"
            onClick={(e) => handleNavigation(e, onNavigateRegister)}
            style={{
              marginLeft: '2rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '0.375rem',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: 'white',
              backgroundColor: '#2563eb',
              textDecoration: 'none'
            }}
          >
            Register
          </a>
          <a
            href="#"
            onClick={(e) => handleNavigation(e, onNavigateLogin)}
            style={{
              marginLeft: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem 1rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#4b5563',
              backgroundColor: 'white',
              textDecoration: 'none'
            }}
          >
            Log in
          </a>
        </div>
        {/* Mobile menu button */}
        <div style={{ marginRight: '-0.5rem' }} className="flex items-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              borderRadius: '0.375rem',
              color: '#9ca3af',
              backgroundColor: 'transparent'
            }}
            aria-expanded="false"
          >
            <span style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>
              Open main menu
            </span>
            {!isMobileMenuOpen ? (
              <svg style={{ height: '1.5rem', width: '1.5rem' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg style={{ height: '1.5rem', width: '1.5rem' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div style={{ 
            paddingTop: '0.5rem', 
            paddingBottom: '0.75rem', 
            paddingLeft: '0.75rem', 
            paddingRight: '0.75rem', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.25rem' 
          }}>
            <a
              href="#"
              onClick={(e) => handleNavigation(e, onNavigateHome)}
              style={{
                display: 'block',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                paddingLeft: '0.75rem',
                paddingRight: '1rem',
                borderLeftWidth: '4px',
                borderColor: '#2563eb',
                backgroundColor: '#eff6ff',
                color: '#1e40af',
                fontSize: '1rem',
                fontWeight: '500',
                textDecoration: 'none'
              }}
            >
              Home
            </a>
            <a
              href="#"
              style={{
                display: 'block',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                paddingLeft: '0.75rem',
                paddingRight: '1rem',
                borderLeftWidth: '4px',
                borderColor: 'transparent',
                color: '#6b7280',
                fontSize: '1rem',
                fontWeight: '500',
                textDecoration: 'none'
              }}
            >
              Jobs
            </a>
            <a
              href="#"
              style={{
                display: 'block',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                paddingLeft: '0.75rem',
                paddingRight: '1rem',
                borderLeftWidth: '4px',
                borderColor: 'transparent',
                color: '#6b7280',
                fontSize: '1rem',
                fontWeight: '500',
                textDecoration: 'none'
              }}
            >
              Resources
            </a>
            <a
              href="#"
              style={{
                display: 'block',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                paddingLeft: '0.75rem',
                paddingRight: '1rem',
                borderLeftWidth: '4px',
                borderColor: 'transparent',
                color: '#6b7280',
                fontSize: '1rem',
                fontWeight: '500',
                textDecoration: 'none'
              }}
            >
              About
            </a>
          </div>
          <div style={{ 
            paddingTop: '1rem', 
            paddingBottom: '0.75rem', 
            borderTopWidth: '1px', 
            borderColor: '#e5e7eb' 
          }}>
            <div style={{ 
              display: 'flex', 
              paddingLeft: '1rem', 
              paddingRight: '1rem', 
              gap: '1rem' 
            }}>
              <a
                href="#"
                onClick={(e) => handleNavigation(e, onNavigateRegister)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '0.375rem',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: 'white',
                  backgroundColor: '#2563eb',
                  textDecoration: 'none'
                }}
              >
                Register
              </a>
              <a
                href="#"
                onClick={(e) => handleNavigation(e, onNavigateLogin)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.5rem 1rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.375rem',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#4b5563',
                  backgroundColor: 'white',
                  textDecoration: 'none'
                }}
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 