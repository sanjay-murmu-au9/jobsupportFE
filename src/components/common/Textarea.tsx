import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, ...props }, ref) => {
    return (
      <div style={{ width: '100%', marginBottom: '1rem' }}>
        {label && (
          <label style={{ 
            display: 'block', 
            fontSize: '0.875rem', 
            fontWeight: '500', 
            color: '#374151', 
            marginBottom: '0.25rem'
          }}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          style={{ 
            display: 'block',
            width: '100%',
            padding: '0.5rem 0.75rem',
            borderRadius: '0.375rem',
            border: `1px solid ${error ? '#f87171' : '#d1d5db'}`,
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
            fontSize: '0.875rem',
            color: error ? '#b91c1c' : '#1f2937',
            backgroundColor: 'white',
            minHeight: '6rem'
          }}
          {...props}
        />
        {error && (
          <p style={{ marginTop: '0.25rem', fontSize: '0.75rem', color: '#dc2626' }}>{error}</p>
        )}
        {helperText && !error && (
          <p style={{ marginTop: '0.25rem', fontSize: '0.75rem', color: '#6b7280' }}>{helperText}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea; 