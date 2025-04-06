import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: SelectOption[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, helperText, options, ...props }, ref) => {
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
        <select
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
            appearance: 'none',
            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
            backgroundPosition: 'right 0.5rem center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1.5em 1.5em',
            paddingRight: '2.5rem'
          }}
          {...props}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
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

Select.displayName = 'Select';

export default Select; 