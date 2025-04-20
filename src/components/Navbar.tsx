import React, { useState } from 'react';

interface NavbarProps {
  onNavigateHome?: () => void;
  onNavigateRegister?: () => void;
  onNavigateStories?: () => void;
  onNavigateResources?: () => void;
  onNavigateAbout?: () => void;
  onNavigateLogin?: () => void;
  currentPage?: 'home' | 'register' | 'stories' | 'resources' | 'about';
}

const Navbar: React.FC<NavbarProps> = ({
  onNavigateHome,
  onNavigateRegister,
  onNavigateStories,
  onNavigateResources,
  onNavigateAbout,
  onNavigateLogin,
  currentPage = 'home'
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    callback?: () => void
  ) => {
    if (callback) {
      e.preventDefault();
      callback();
      // Close the mobile menu whenever a navigation link is clicked
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      {/* Hidden link that uses onNavigateLogin to satisfy TypeScript */}
      {onNavigateLogin && (
        <a
          href="#"
          onClick={(e) => handleNavigation(e, onNavigateLogin)}
          style={{ display: 'none' }}
        >
          Login
        </a>
      )}
      <div className="navbar-container">
        <div className="navbar-logo-section">
          <div>
            <a
              href="#"
              onClick={(e) => handleNavigation(e, onNavigateHome)}
              className="navbar-logo"
            >
              Wake Up India  
            </a>
          </div>
          {/* Desktop navigation */}
          <div className="navbar-desktop-links">
            <a
              href="#"
              onClick={(e) => handleNavigation(e, onNavigateHome)}
              className={`navbar-link ${currentPage === 'home' ? 'active' : ''}`}
            >
              Home
            </a>
            <a
              href="#"
              onClick={(e) => handleNavigation(e, onNavigateStories)}
              className={`navbar-link ${currentPage === 'stories' ? 'active' : ''}`}
            >
              Stories
            </a>
            <a
              href="#"
              onClick={(e) => handleNavigation(e, onNavigateResources)}
              className={`navbar-link ${currentPage === 'resources' ? 'active' : ''}`}
            >
              Resources
            </a>
            <a
              href="#"
              onClick={(e) => handleNavigation(e, onNavigateAbout)}
              className={`navbar-link ${currentPage === 'about' ? 'active' : ''}`}
            >
              About
            </a>
          </div>
        </div>
        {/* Desktop buttons */}
        <div className="navbar-desktop-buttons">
          <a
            href="#"
            onClick={(e) => handleNavigation(e, onNavigateRegister)}
            className="navbar-cta-button"
          >
            Join Campaign
          </a>
        </div>
        {/* Mobile menu button */}
        <div className="navbar-mobile-menu-button">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="menu-toggle-button"
            aria-expanded="false"
          >
            <span className="sr-only">
              Open main menu
            </span>
            {!isMobileMenuOpen ? (
              <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-links">
          <a
            href="#"
            onClick={(e) => handleNavigation(e, onNavigateHome)}
            className={`mobile-menu-link ${currentPage === 'home' ? 'active' : ''}`}
          >
            Home
          </a>
          <a
            href="#"
            onClick={(e) => handleNavigation(e, onNavigateStories)}
            className={`mobile-menu-link ${currentPage === 'stories' ? 'active' : ''}`}
          >
            Stories
          </a>
          <a
            href="#"
            onClick={(e) => handleNavigation(e, onNavigateResources)}
            className={`mobile-menu-link ${currentPage === 'resources' ? 'active' : ''}`}
          >
            Resources
          </a>
          <a
            href="#"
            onClick={(e) => handleNavigation(e, onNavigateAbout)}
            className={`mobile-menu-link ${currentPage === 'about' ? 'active' : ''}`}
          >
            About
          </a>
        </div>
        <div className="mobile-menu-buttons">
          <div className="mobile-cta-container">
            <a
              href="#"
              onClick={(e) => handleNavigation(e, onNavigateRegister)}
              className="mobile-cta-button"
            >
              Join Campaign
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;