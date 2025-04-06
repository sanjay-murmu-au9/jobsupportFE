import React from 'react';
import Navbar from '../components/Navbar';
import RegistrationForm from '../components/RegistrationForm';

interface RegisterPageProps {
  onNavigateHome?: () => void;
  onNavigateRegister?: () => void;
  // Login removed as not relevant for campaign platform
}

const RegisterPage: React.FC<RegisterPageProps> = ({
  onNavigateHome,
  onNavigateRegister
}) => {
  return (
    <div>
      <Navbar 
        onNavigateHome={onNavigateHome}
        onNavigateRegister={onNavigateRegister}
      />
      <div style={{ padding: '2rem 0', backgroundColor: '#f7f9fc', minHeight: 'calc(100vh - 4rem)' }}>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegisterPage; 