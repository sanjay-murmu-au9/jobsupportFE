import React, { useState } from 'react';
import Button from './common/Button';
import Input from './common/Input';
import Select from './common/Select';
import Textarea from './common/Textarea';
import './RegistrationForm.css';

interface CampaignFormData {
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

// Get API URL from environment variables with fallback
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// API endpoints - use relative URLs in development (for proxy) and full URLs in production
const isDevelopment = window.location.hostname === 'localhost';
const API_ENDPOINT = isDevelopment ? "/api/campaigns" : `${API_BASE}/api/campaigns`;
const UPLOAD_ENDPOINT = isDevelopment ? "/api/files/upload" : `${API_BASE}/api/files/upload`;
const PARSE_RESUME_ENDPOINT = isDevelopment ? "/api/campaign/parse-resume" : `${API_BASE}/api/campaign/parse-resume`;

// Backend is available and running
const IS_BACKEND_AVAILABLE = true;

const sendToApi = async (data: Record<string, any>, useCorsProxy: boolean = false): Promise<Response> => {
  // Create FormData object
  const formData = new FormData();
  
  // Append all form fields
  Object.entries(data).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      formData.append(key, String(value));
    }
  });

  // Log what we're about to send
  console.log(`Sending to ${API_ENDPOINT} with form data`);
  console.log('Form data entries:');
  for (const pair of formData.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`);
  }
  
  try {
    return await fetch(API_ENDPOINT, {
      method: "POST",
      body: formData, // Send as FormData
      // No need for CORS headers when using proxy
    });
  } catch (error) {
    console.error("Fetch error in sendToApi:", error);
    throw error;
  };
}
// Campaign-focused registration form component with no login navigation
const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<CampaignFormData>({
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
  const [isFileUploading, setIsFileUploading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Function to parse resume and fill form fields
  const parseResumeAndFillForm = async (resumeUrl: string): Promise<void> => {
    try {
      console.log('Attempting to parse resume:', resumeUrl);
      
      // Create request to parse resume
      const parseResponse = await fetch(PARSE_RESUME_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resumeUrl })
      });
      
      if (!parseResponse.ok) {
        throw new Error(`Resume parsing failed with status ${parseResponse.status}`);
      }
      
      // Get parsed data
      const parsedData = await parseResponse.json();
      console.log('Resume parsed successfully:', parsedData);
      
      // Update form with parsed data
      if (parsedData && parsedData.success && parsedData.data) {
        // Access the nested data structure
        const resumeData = parsedData.data;
        console.log('Updating form with resume data:', resumeData);
        
        setFormData(prev => ({
          ...prev,
          firstName: resumeData.firstName || prev.firstName,
          lastName: resumeData.lastName || prev.lastName,
          email: resumeData.email || prev.email,
          phone: resumeData.phone || prev.phone,
          city: resumeData.city || prev.city,
          education: resumeData.education || prev.education,
          skills: resumeData.skills || prev.skills,
          experience: resumeData.experience || prev.experience,
        }));
      }
    } catch (error) {
      console.error('Error parsing resume:', error);
      throw error;
    }
  };

  const countryOptions = [
    { value: 'in', label: 'India' },
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

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        // Only use local fallback if backend is not available
        if (!IS_BACKEND_AVAILABLE) {
          // Just store the file name for now as a fallback
          const fileName = file.name;
          setFormData(prev => ({
            ...prev,
            resume: fileName
          }));
          console.log('Development mode: File name stored without uploading');
          return;
        }

        // Create FormData object for file upload
        const uploadFormData = new FormData();
        uploadFormData.append('file', file);
        
        // Set a loading state
        setIsFileUploading(true);
        
        try {
          // Upload the file to the separate upload endpoint with timeout
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout
          
          console.log('Attempting to upload file to:', UPLOAD_ENDPOINT);
          const uploadResponse = await fetch(UPLOAD_ENDPOINT, {
            method: 'POST',
            body: uploadFormData,
            signal: controller.signal
          });
          
          clearTimeout(timeoutId);
          
          if (!uploadResponse.ok) {
            throw new Error(`Upload failed with status ${uploadResponse.status}`);
          }
          
          // Parse the response to get the file URL
          const uploadResult = await uploadResponse.json();
          console.log('Upload response:', uploadResult);
          
          // Check if we have a file URL in the response
          if (uploadResult.fileUrl) {
            // Store the file URL in the form state
            setFormData(prev => ({
              ...prev,
              resume: uploadResult.fileUrl
            }));
            console.log('File uploaded successfully, URL stored for form submission');
            
            // Try to parse resume and autofill form fields
            try {
              await parseResumeAndFillForm(uploadResult.fileUrl);
            } catch (parseError) {
              console.error('Error parsing resume:', parseError);
            }
          } else {
            throw new Error('No file URL in response');
          }
        } catch (error: any) {
          console.error('Error uploading file:', error);
          console.error('Error details:', {
            message: error.message,
            name: error.name,
            stack: error.stack,
            endpoint: UPLOAD_ENDPOINT
          });
          
          let errorMessage = 'Failed to upload file. Please try again.';
          if (error.name === 'AbortError') {
            errorMessage = 'Upload timed out. Please try again or use a smaller file.';
          } else if (error.message.includes('Failed to fetch')) {
            errorMessage = `Cannot connect to server at ${UPLOAD_ENDPOINT}. Please check your connection and server status.`;
          } else if (error.message.includes('NetworkError')) {
            errorMessage = 'Network error occurred. This might be due to CORS restrictions.';
          }
          
          setErrors(prev => ({
            ...prev,
            resume: errorMessage
          }));
          
          setFormData(prev => ({
            ...prev,
            resume: file.name + ' (local only)'
          }));
        } finally {
          setIsFileUploading(false);
        }
      } catch (mainError) {
        console.error('Main error in file handling:', mainError);
        setFormData(prev => ({
          ...prev,
          resume: file.name + ' (local only)'
        }));
      }
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(formData.email.toLowerCase())) {
        newErrors.email = 'Please enter a valid email address';
      } else {
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

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else {
      const cleanPhone = formData.phone.replace(/[\s-]/g, '');
      if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
        newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';
      }
    }

    if (!formData.country) {
      newErrors.country = 'Please select your country';
    }

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
        resume: formData.resume || '',
        agreeToTerms: formData.agreeToTerms
      };

      console.log('Sending form data:', requestData);
      console.log('Resume URL:', formData.resume);

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
        resume: '',
        agreeToTerms: false
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });

      setSuccessMessage('Thank you for joining our campaign! Your voice will help make employment a national priority.');

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

      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="registration-form-container">
      <h1 className="registration-form-title">
        Add Your Voice to the Campaign
      </h1>

      {successMessage && (
        <div className="form-alert form-alert--success">
          {successMessage}
        </div>
      )}

      {errors.submit && (
        <div className="form-alert form-alert--error">
          {errors.submit}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-row">
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

          <div className="form-row">
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

          <div className="form-row">
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
            <label className="file-upload-label">
              Upload Supporting Documents (Optional)
            </label>
            <div className="file-upload-container">
              <p className="mb-2 text-gray-600">
                Attach your resume or any relevant documents
              </p>
              <p className="text-xs text-gray-500 mb-4">
                You can upload your resume, degree certificates, or other documents that support your campaign participation.
              </p>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="resume"
                className="file-upload-button"
              >
                Choose File
              </label>
              {formData.resume && (
                <p className="file-name">
                  {formData.resume.startsWith('http') ? (
                    <>
                      File uploaded: <a href={formData.resume} target="_blank" rel="noopener noreferrer" className="file-link">View File</a>
                    </>
                  ) : (
                    <>Selected file: {formData.resume}</>
                  )}
                </p>
              )}
              {isFileUploading && (
                <p className="file-upload-loading">Uploading file, please wait...</p>
              )}
              {errors.resume && (
                <p className="file-upload-error">{errors.resume}</p>
              )}
            </div>
          </div>

          <div>
            <div className="terms-container">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleCheckboxChange}
                className="terms-checkbox"
              />
              <label
                htmlFor="agreeToTerms"
                className={`terms-label ${errors.agreeToTerms ? 'terms-label--error' : ''}`}
              >
                I consent to my information being included in the petition to make employment a national priority. I understand my data may be shared with relevant government bodies and officials as part of this advocacy campaign.
              </label>
            </div>
            {errors.agreeToTerms && (
              <p className="terms-error">
                {errors.agreeToTerms}
              </p>
            )}
          </div>

          <div className="submit-button-container">
            <Button
              type="submit"
              variant="primary"
              isLoading={isSubmitting}
              fullWidth
            >
              {isSubmitting ? 'Submitting...' : 'Join the Campaign'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;