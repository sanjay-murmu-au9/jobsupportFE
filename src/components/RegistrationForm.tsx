import React, { useState } from 'react';
import Button from './common/Button';
import Input from './common/Input';
import Select from './common/Select';
import Textarea from './common/Textarea';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    country: '',
    city: '',
    education: '',
    skills: '',
    experience: '',
    resume: null as File | null,
    agreeToTerms: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'au', label: 'Australia' },
    { value: 'in', label: 'India' },
    { value: 'other', label: 'Other' }
  ];

  const educationOptions = [
    { value: 'high_school', label: 'High School' },
    { value: 'associate', label: 'Associate Degree' },
    { value: 'bachelor', label: 'Bachelor\'s Degree' },
    { value: 'master', label: 'Master\'s Degree' },
    { value: 'doctorate', label: 'Doctorate' },
    { value: 'other', label: 'Other' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    // Required fields
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    
    if (!formData.skills.trim()) newErrors.skills = 'Please enter at least one skill';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form on success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        country: '',
        city: '',
        education: '',
        skills: '',
        experience: '',
        resume: null,
        agreeToTerms: false
      });
      
      setSuccessMessage('Registration successful! You can now log in to your account.');
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    } catch (error) {
      setErrors({ submit: 'Registration failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>
        Register as a Job Seeker
      </h1>
      
      {successMessage && (
        <div style={{
          backgroundColor: '#d1fae5',
          borderRadius: '0.375rem',
          padding: '1rem',
          marginBottom: '1.5rem',
          color: '#065f46'
        }}>
          {successMessage}
        </div>
      )}
      
      {errors.submit && (
        <div style={{
          backgroundColor: '#fee2e2',
          borderRadius: '0.375rem',
          padding: '1rem',
          marginBottom: '1.5rem',
          color: '#b91c1c'
        }}>
          {errors.submit}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <Input
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
              required
            />
            
            <Input
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
              required
            />
          </div>
          
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              helperText="At least 8 characters"
              required
            />
            
            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              required
            />
          </div>
          
          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            helperText="Optional"
          />
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <Select
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              options={countryOptions}
              helperText="Select your country"
            />
            
            <Input
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              helperText="Optional"
            />
          </div>
          
          <Select
            label="Highest Education Level"
            name="education"
            value={formData.education}
            onChange={handleChange}
            options={educationOptions}
            helperText="Select your highest education level"
          />
          
          <Textarea
            label="Skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            error={errors.skills}
            helperText="Enter your skills separated by commas (e.g., JavaScript, React, Node.js)"
            rows={3}
            required
          />
          
          <Textarea
            label="Experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            helperText="Briefly describe your work experience (optional)"
            rows={4}
          />
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Resume / CV (Optional)
            </label>
            <input
              type="file"
              name="resume"
              onChange={handleFileChange}
              style={{
                border: '1px solid #d1d5db',
                borderRadius: '0.375rem',
                padding: '0.5rem',
                width: '100%'
              }}
              accept=".pdf,.doc,.docx"
            />
            <p className="mt-1 text-sm text-gray-500">
              Upload your resume (PDF, DOC, or DOCX format)
            </p>
          </div>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleCheckboxChange}
                style={{
                  marginRight: '0.5rem',
                  width: '1rem',
                  height: '1rem'
                }}
              />
              <label htmlFor="agreeToTerms" style={{ fontSize: '0.875rem' }}>
                I agree to the <a href="/terms" style={{ color: '#2563eb' }}>Terms and Conditions</a> and <a href="/privacy" style={{ color: '#2563eb' }}>Privacy Policy</a>
              </label>
            </div>
            {errors.agreeToTerms && (
              <p style={{ marginTop: '0.25rem', fontSize: '0.875rem', color: '#b91c1c' }}>
                {errors.agreeToTerms}
              </p>
            )}
          </div>
          
          <Button
            type="submit"
            variant="primary"
            isLoading={isSubmitting}
            fullWidth
          >
            {isSubmitting ? 'Registering...' : 'Register Now'}
          </Button>
          
          <p style={{ textAlign: 'center', fontSize: '0.875rem', marginTop: '1rem' }}>
            Already have an account? <a href="/login" style={{ color: '#2563eb' }}>Log In</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm; 