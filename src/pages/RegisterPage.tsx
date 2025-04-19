import React from 'react';
import Navbar from '../components/Navbar';
import RegistrationForm from '../components/RegistrationForm';
import './RegisterPage.css';

interface RegisterPageProps {
  onNavigateHome?: () => void;
  onNavigateRegister?: () => void;
  onNavigateStories?: () => void;
  onNavigateResources?: () => void;
  onNavigateAbout?: () => void;
  onNavigateLogin?: () => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({
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
        currentPage="register"
      />
      <div className="register-page-container">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegisterPage;