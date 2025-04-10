import React, { useState } from 'react';
import Button from './common/Button';
import Input from './common/Input';
import Select from './common/Select';
import Textarea from './common/Textarea';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  education: string;
  employmentStatus: string;
  skills: string;
  experience: string;
  resume: string | null;
  agreeToTerms: boolean;
}

// API endpoint with fallback for CORS issues
const API_ENDPOINT = "https://property-management-fu5c.onrender.com/api/campaigns";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const sendToApi = async (data: FormData, useCorsProxy: boolean = false): Promise<Response> => {
  const endpoint = useCorsProxy ? `${CORS_PROXY}${API_ENDPOINT}` : API_ENDPOINT;

  // Log what we're about to send
  console.log(`Sending to ${endpoint} with payload:`, data);

  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      ...(useCorsProxy ? { "X-Requested-With": "XMLHttpRequest" } : {})
    },
    body: JSON.stringify(data),
  });
};

// Campaign-focused registration form component with no login navigation
const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
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

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const countryOptions = [
    { value: 'in', label: 'India' },
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'au', label: 'Australia' },
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
      setFormData(prev => ({ ...prev, resume: e.target.files![0].name }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    // Required fields
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      // More comprehensive email validation regex
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(formData.email.toLowerCase())) {
        newErrors.email = 'Please enter a valid email address';
      } else {
        // Check if email domain is from the top 10 most popular domains
        const allowedDomains = [
          'gmail.com',
          'yahoo.com',
          'hotmail.com',
          'outlook.com',
          'aol.com',
          'protonmail.com',
          'icloud.com',
          'zoho.com',
          'rediffmail.com',
          'yandex.com'
        ];
        
        const emailDomain = formData.email.toLowerCase().split('@')[1];
        if (!allowedDomains.includes(emailDomain)) {
          newErrors.email = 'Please use an email from one of the popular providers: ' + allowedDomains.join(', ');
        }
      }
    }
    
    // Phone validation for Indian numbers
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else {
      // Remove spaces and dashes for validation
      const cleanPhone = formData.phone.replace(/[\s-]/g, '');
      
      // Check if it's a valid Indian mobile number
      // Should be 10 digits and start with 6, 7, 8, or 9
      if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
        newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';
      }
    }
    
    // Country is required
    if (!formData.country) {
      newErrors.country = 'Please select your country';
    }
    
    // Employment status is required
    if (!formData.employmentStatus) {
      newErrors.employmentStatus = 'Please select your employment status';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must consent to join the campaign';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Prepare the data in exact format as required by API
      const requestData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        city: formData.city,
        education: formData.education,
        employmentStatus: formData.employmentStatus,
        skills: formData.skills,
        experience: formData.experience,
        resume: formData.resume || "test",
        agreeToTerms: formData.agreeToTerms
      };

      console.log('Sending form data:', requestData);

      // Try direct API call first
      let response;
      try {
        response = await sendToApi(requestData);
      } catch (error) {
        console.log('Direct API call failed:', error);
        console.log('Trying with CORS proxy...');
        response = await sendToApi(requestData, true);
      }

      let responseData;
      try {
        responseData = await response.json();
        console.log('Response data:', responseData);
      } catch (error) {
        console.error('Error parsing response:', error);
        throw new Error('Invalid response from server');
      }

      if (!response.ok) {
        throw new Error(responseData.message || `Registration failed with status ${response.status}`);
      }

      // Reset form on success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
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
      
      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      setSuccessMessage('Thank you for joining our campaign! Your voice will help make employment a national priority.');
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    } catch (error) {
      console.error("Registration error:", error);
      let errorMessage = 'Failed to register. Please try again.';
      
      if (error instanceof Error) {
        if (error.message.includes('Unable to connect')) {
          errorMessage = 'Unable to connect to the server. Please check if the backend is running.';
        } else if (error.message.includes('Failed to fetch')) {
          errorMessage = 'Unable to connect to the server. Please check your internet connection or try again later.';
        } else if (error.message.includes('Invalid response')) {
          errorMessage = 'Server returned an invalid response. Please try again later.';
        } else if (error.message.includes('CORS')) {
          errorMessage = 'Cross-Origin Request Blocked. Please check if the backend is running and CORS is configured correctly.';
        } else {
          errorMessage = error.message;
        }
      }
      
      setErrors({ 
        submit: errorMessage
      });
      
      // Scroll to top to show error message
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
            placeholder="example@gmail.com"
            helperText="Use email from popular providers like Gmail, Yahoo, Hotmail, etc."
            required
          />
          
          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            placeholder="e.g., 9876543210"
            helperText="10-digit Indian mobile number starting with 6, 7, 8, or 9"
            required
          />
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <Select
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              options={countryOptions}
              error={errors.country}
              helperText="Select your country"
              required
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
              error={errors.employmentStatus}
              helperText="Select your current status"
              required
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
                  Selected file: {formData.resume}
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