import React from 'react';

const TestComponent: React.FC = () => {
  return (
    <div style={{ 
      backgroundColor: 'red', 
      padding: '20px', 
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      margin: '20px'
    }}>
      This is a test component with inline styles
    </div>
  );
};

export default TestComponent; 