import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  disabled,
  style,
  ...props
}) => {
  // Base styles for all button variants
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.375rem',
    fontWeight: '500',
    transition: 'background-color 150ms ease',
    outline: 'none',
    cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
    opacity: disabled || isLoading ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
  };
  
  // Variant-specific styles
  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: '#2563eb',
      color: 'white',
      border: 'none',
    },
    secondary: {
      backgroundColor: '#e5e7eb',
      color: '#111827',
      border: 'none',
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#4b5563',
      border: '1px solid #d1d5db',
    },
    danger: {
      backgroundColor: '#dc2626',
      color: 'white',
      border: 'none',
    },
  };

  // Size-specific styles
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      padding: '0.375rem 0.75rem',
      fontSize: '0.875rem',
    },
    md: {
      padding: '0.5rem 1rem',
      fontSize: '1rem',
    },
    lg: {
      padding: '0.75rem 1.5rem',
      fontSize: '1.125rem',
    },
  };

  // Combine styles
  const combinedStyle = {
    ...baseStyle,
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style,
  };

  // Hover effects will be handled with inline event handlers
  const getHoverStyle = () => {
    if (disabled || isLoading) return {};
    
    switch (variant) {
      case 'primary':
        return { backgroundColor: '#1d4ed8' };
      case 'secondary':
        return { backgroundColor: '#d1d5db' };
      case 'outline':
        return { backgroundColor: '#f3f4f6' };
      case 'danger':
        return { backgroundColor: '#b91c1c' };
      default:
        return {};
    }
  };

  return (
    <button
      style={combinedStyle}
      disabled={disabled || isLoading}
      onMouseOver={(e) => {
        if (!disabled && !isLoading) {
          const hoverStyle = getHoverStyle();
          Object.entries(hoverStyle).forEach(([key, value]) => {
            (e.currentTarget.style as CSSStyleDeclaration)[key as any] = value as string;
          });
        }
      }}
      onMouseOut={(e) => {
        if (!disabled && !isLoading) {
          const originalStyle = variantStyles[variant];
          Object.entries(originalStyle).forEach(([key, value]) => {
            (e.currentTarget.style as CSSStyleDeclaration)[key as any] = value as string;
          });
        }
      }}
      {...props}
    >
      {isLoading && (
        <span style={{ marginRight: '0.5rem', display: 'inline-block', animation: 'spin 1s linear infinite' }}>
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
            <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        </span>
      )}
      {children}
    </button>
  );
};

export default Button; 