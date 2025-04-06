import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RegistrationForm from './components/forms/RegistrationForm';
import { ROUTES } from './constants';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ color: '#3b82f6', fontSize: '24px', fontWeight: 'bold' }}>
          Job Support Initiative
        </h1>
      </header>
      
      <main>
        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          marginBottom: '20px'
        }}>
          <h2 style={{ marginBottom: '10px', fontSize: '20px' }}>Welcome to Job Support</h2>
          <p style={{ color: '#4b5563' }}>
            A platform to help unemployed individuals and students showcase their skills.
          </p>
          <div style={{ marginTop: '20px' }}>
            <a 
              href="/register" 
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '4px',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Register Now
            </a>
          </div>
        </div>
      </main>
      
      <footer style={{ marginTop: '20px', textAlign: 'center', color: '#6b7280', fontSize: '14px' }}>
        © {new Date().getFullYear()} Job Support Initiative
      </footer>
    </div>
  );
}

export default App;
