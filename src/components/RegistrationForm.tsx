import React, { useState } from 'react';
import Button from './common/Button';
import Input from './common/Input';
import Select from './common/Select';
import Textarea from './common/Textarea';

// Campaign-focused registration form component with no login navigation
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
    employmentStatus: '',
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
    { value: 'diploma', label: 'Diploma/Certificate' },
    { value: 'student', label: 'Currently Studying' },
    { value: 'other', label: 'Other' }
  ];

  const employmentStatusOptions = [
    { value: 'unemployed', label: 'Currently Unemployed' },
    { value: 'laid_off', label: 'Recently Laid Off' },
    { value: 'underemployed', label: 'Underemployed' },
    { value: 'student', label: 'Student Seeking Employment' },
    { value: 'graduate', label: 'Recent Graduate' },
    { value: 'employed', label: 'Employed but Supporting Campaign' },
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
    
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must consent to join the campaign';
    
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
        employmentStatus: '',
        skills: '',
        experience: '',
        resume: null,
        agreeToTerms: false
      });
      
      setSuccessMessage('Thank you for joining our campaign! Your voice will help make employment a national priority.');
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    } catch {
      // Handle any errors that might occur
      setErrors({ submit: 'Registration failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>
        Add Your Voice to the Campaign
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
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <Select
              label="Education Level"
              name="education"
              value={formData.education}
              onChange={handleChange}
              options={educationOptions}
              helperText="Optional"
            />
            
            <Select
              label="Employment Status"
              name="employmentStatus"
              value={formData.employmentStatus}
              onChange={handleChange}
              options={employmentStatusOptions}
              helperText="Select your current status"
            />
          </div>
          
          <Textarea
            label="Skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            error={errors.skills}
            placeholder="Enter your skills separated by commas (e.g., Communication, Leadership, Programming)"
            helperText="Skills that could contribute to the campaign"
            rows={3}
          />
          
          <Textarea
            label="Tell Us Your Story"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Share your personal experience with unemployment or why you support this campaign. Your story can help make a difference."
            helperText="This will help strengthen our message to policymakers"
            rows={4}
          />
          
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              fontWeight: '500', 
              fontSize: '0.875rem' 
            }}>
              Upload Supporting Documents (Optional)
            </label>
            <div style={{ 
              border: '1px dashed #d1d5db', 
              borderRadius: '0.375rem', 
              padding: '1.5rem', 
              textAlign: 'center',
              backgroundColor: '#f9fafb'
            }}>
              <p style={{ marginBottom: '0.5rem', color: '#4b5563' }}>
                Attach your resume or any relevant documents
              </p>
              <p style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '1rem' }}>
                You can upload your resume, degree certificates, or other documents that support your campaign participation.
              </p>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <label
                htmlFor="resume"
                style={{
                  backgroundColor: '#e5e7eb',
                  color: '#374151',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  display: 'inline-block',
                  fontWeight: '500',
                  fontSize: '0.875rem'
                }}
              >
                Choose File
              </label>
              {formData.resume && (
                <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#4b5563' }}>
                  Selected file: {formData.resume.name}
                </p>
              )}
            </div>
          </div>
          
          <div style={{ marginTop: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleCheckboxChange}
                style={{ marginTop: '0.25rem' }}
              />
              <label 
                htmlFor="agreeToTerms" 
                style={{ 
                  fontSize: '0.875rem', 
                  color: errors.agreeToTerms ? '#dc2626' : '#4b5563' 
                }}
              >
                I consent to my information being included in the petition to make employment a national priority. I understand my data may be shared with relevant government bodies and officials as part of this advocacy campaign.
              </label>
            </div>
            {errors.agreeToTerms && (
              <p style={{ 
                marginTop: '0.25rem', 
                fontSize: '0.75rem', 
                color: '#dc2626',
                marginLeft: '1.5rem'
              }}>
                {errors.agreeToTerms}
              </p>
            )}
          </div>
          
          <Button
            type="submit"
            variant="primary"
            isLoading={isSubmitting}
            fullWidth
            style={{ marginTop: '1.5rem' }}
          >
            {isSubmitting ? 'Submitting...' : 'Join the Campaign'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm; 