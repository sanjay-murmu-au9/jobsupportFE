import React, { useState } from 'react';
import Navbar from './components/Navbar';
import RegisterPage from './pages/RegisterPage';
import './styles.css';

// Login Form Component - Commented out as not relevant for campaign platform
// const LoginForm: React.FC<{ onNavigateRegister?: () => void }> = ({ onNavigateRegister }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [loginError, setLoginError] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     
//     // Clear error when field is edited
//     if (errors[name]) {
//       setErrors(prev => {
//         const newErrors = { ...prev };
//         delete newErrors[name];
//         return newErrors;
//       });
//     }
//     
//     // Clear login error when any field changes
//     if (loginError) {
//       setLoginError('');
//     }
//   };

//   const validateForm = (): boolean => {
//     const newErrors: Record<string, string> = {};
//     
//     // Email validation
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
//     
//     // Password validation
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     }
//     
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     
//     if (!validateForm()) return;
//     
//     setIsSubmitting(true);
//     
//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       
//       // For demo purposes - simulating credential check
//       if (formData.email === 'test@example.com' && formData.password === 'password123') {
//         // Success - would typically set auth token or similar
//         console.log('Login successful');
//         // Redirect or other post-login actions would go here
//       } else {
//         // Authentication failed
//         setLoginError('Invalid email or password. Please try again.');
//       }
//     } catch {
//       setLoginError('Login failed. Please try again later.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {loginError && (
//         <div style={{ 
//           backgroundColor: '#fee2e2',
//           borderRadius: '0.375rem',
//           padding: '0.75rem',
//           marginBottom: '1.5rem',
//           color: '#b91c1c',
//           fontSize: '0.875rem'
//         }}>
//           {loginError}
//         </div>
//       )}
//     
//       <div style={{ marginBottom: '1.5rem' }}>
//         <label style={{ 
//           display: 'block', 
//           marginBottom: '0.5rem', 
//           fontWeight: '500', 
//           fontSize: '0.875rem' 
//         }}>
//           Email
//         </label>
//         <input 
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           style={{ 
//             width: '100%', 
//             padding: '0.5rem 0.75rem', 
//             border: `1px solid ${errors.email ? '#f87171' : '#d1d5db'}`, 
//             borderRadius: '0.375rem',
//             outline: 'none'
//           }} 
//           placeholder="Enter your email"
//         />
//         {errors.email && (
//           <p style={{ 
//             marginTop: '0.25rem', 
//             fontSize: '0.75rem', 
//             color: '#dc2626' 
//           }}>
//             {errors.email}
//           </p>
//         )}
//       </div>
//       
//       <div style={{ marginBottom: '1.5rem' }}>
//         <label style={{ 
//           display: 'block', 
//           marginBottom: '0.5rem', 
//           fontWeight: '500', 
//           fontSize: '0.875rem' 
//         }}>
//           Password
//         </label>
//         <input 
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           style={{ 
//             width: '100%', 
//             padding: '0.5rem 0.75rem', 
//             border: `1px solid ${errors.password ? '#f87171' : '#d1d5db'}`, 
//             borderRadius: '0.375rem',
//             outline: 'none'
//           }} 
//           placeholder="Enter your password"
//         />
//         {errors.password && (
//           <p style={{ 
//             marginTop: '0.25rem', 
//             fontSize: '0.75rem', 
//             color: '#dc2626' 
//           }}>
//             {errors.password}
//           </p>
//         )}
//       </div>
//       
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <input
//             type="checkbox"
//             id="rememberMe"
//             style={{ marginRight: '0.5rem' }}
//           />
//           <label htmlFor="rememberMe" style={{ fontSize: '0.875rem' }}>Remember me</label>
//         </div>
//         <a href="#" style={{ fontSize: '0.875rem', color: '#2563eb' }}>Forgot password?</a>
//       </div>
//       
//       <button
//         type="submit"
//         disabled={isSubmitting}
//         style={{
//           width: '100%',
//           backgroundColor: '#2563eb',
//           color: 'white',
//           fontWeight: '500',
//           padding: '0.75rem 1rem',
//           borderRadius: '0.375rem',
//           border: 'none',
//           cursor: isSubmitting ? 'not-allowed' : 'pointer',
//           opacity: isSubmitting ? 0.7 : 1,
//           marginBottom: '1.5rem',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}
//       >
//         {isSubmitting ? (
//           <>
//             <span style={{ 
//               display: 'inline-block', 
//               width: '1rem', 
//               height: '1rem', 
//               borderRadius: '50%', 
//               border: '2px solid white', 
//               borderTopColor: 'transparent', 
//               marginRight: '0.5rem',
//               animation: 'spin 1s linear infinite'
//             }}></span>
//             Logging in...
//           </>
//         ) : 'Log in'}
//       </button>
//       
//       <p style={{ textAlign: 'center', fontSize: '0.875rem' }}>
//         Don't have an account?{' '}
//         <a 
//           href="#" 
//           onClick={(e) => { 
//             e.preventDefault(); 
//             if (onNavigateRegister) onNavigateRegister(); 
//           }}
//           style={{ 
//             color: '#2563eb', 
//             fontWeight: '500',
//             textDecoration: 'none'
//           }}
//         >
//           Register now
//         </a>
//       </p>
//     </form>
//   );
// };

const SimpleApp: React.FC = () => {
  // Login option removed as not relevant for campaign platform
  const [currentPage, setCurrentPage] = useState<'home' | 'register' | 'stories' | 'resources' | 'about'>('home');

  // Simple navigation functions
  const navigateToHome = () => setCurrentPage('home');
  const navigateToRegister = () => setCurrentPage('register');
  const navigateToStories = () => setCurrentPage('stories');
  const navigateToResources = () => setCurrentPage('resources');
  const navigateToAbout = () => {
    console.log('Navigating to About');
    setCurrentPage('about');
  };
  // Simple placeholder for navigateToLogin to prevent errors
  const navigateToLogin = () => {
    alert("Login functionality is not available in the campaign platform.");
    setCurrentPage('home');
  };

  // Basic router
  if (currentPage === 'register') {
    return (
      <RegisterPage 
        onNavigateHome={navigateToHome}
        onNavigateRegister={navigateToRegister}
      />
    );
  }

  if (currentPage === 'stories') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar 
          onNavigateHome={navigateToHome}
          onNavigateRegister={navigateToRegister}
          onNavigateStories={navigateToStories}
          onNavigateResources={navigateToResources}
          onNavigateAbout={navigateToAbout}
          onNavigateLogin={navigateToLogin}
          currentPage="stories"
        />
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center mb-4">
              <div className="inline-block p-3 rounded-full bg-blue-100 mr-3">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 animate-pulse">
                <svg className="-ml-1 mr-1.5 h-2 w-2 text-yellow-400" fill="currentColor" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="3" />
                </svg>
                Under Development
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Stories Coming Soon
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We're collecting powerful stories from unemployed individuals across India. Be one of the first to share your journey and inspire others.
            </p>
            <div className="mt-6 mb-8 w-24 h-1 rounded-full bg-blue-500 mx-auto"></div>
            <div className="mt-8 inline-flex flex-col sm:flex-row gap-4 sm:gap-3">
              <button 
                onClick={navigateToRegister}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                Be an Early Contributor
              </button>
              <button 
                onClick={navigateToHome}
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                Return to Home
              </button>
            </div>
          </div>
          
          <div className="mt-16 bg-white shadow overflow-hidden sm:rounded-lg border border-yellow-200">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center mb-4">
                <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  In Development: We're Building Something Special
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                The Stories section is currently under active development. This feature will allow unemployed individuals to share their personal experiences, creating a powerful collective voice.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      Expected launch: Coming soon. Register now to be notified when this feature is available.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 border-t border-gray-200">
                <dl className="divide-y divide-gray-200">
                  <div className="py-4 sm:py-5">
                    <dt className="text-base font-medium text-blue-700">Personal Impact</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      Stories humanize statistics. Your personal struggles with unemployment help policymakers understand the real impact of the job crisis.
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5">
                    <dt className="text-base font-medium text-blue-700">Build Community</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      When others read your story, they realize they're not alone. Together, we form a stronger community for change.
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5">
                    <dt className="text-base font-medium text-blue-700">Drive Policy Change</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      Compelling stories are powerful tools for advocacy. They can influence government officials to implement better unemployment policies.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-600">
                  Development progress
                </span>
                <span className="text-sm text-gray-500">40% complete</span>
              </div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'resources') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar 
          onNavigateHome={navigateToHome}
          onNavigateRegister={navigateToRegister}
          onNavigateStories={navigateToStories}
          onNavigateResources={navigateToResources}
          onNavigateAbout={navigateToAbout}
          onNavigateLogin={navigateToLogin}
          currentPage="resources"
        />
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center mb-4">
              <div className="inline-block p-3 rounded-full bg-blue-100 mr-3">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 animate-pulse">
                <svg className="-ml-1 mr-1.5 h-2 w-2 text-yellow-400" fill="currentColor" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="3" />
                </svg>
                Under Development
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Resources Hub Under Construction
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We're building a comprehensive resource center with unemployment statistics, government policies, and job-seeking tools to help the Indian workforce.
            </p>
            <div className="mt-6 mb-8 w-24 h-1 rounded-full bg-blue-500 mx-auto"></div>
            <div className="mt-8 inline-flex flex-col sm:flex-row gap-4 sm:gap-3">
              <button 
                onClick={navigateToRegister}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                Join to Get Early Access
              </button>
              <button 
                onClick={navigateToHome}
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                Return to Home
              </button>
            </div>
          </div>
          
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg border border-yellow-100">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Employment Data</h3>
                  </div>
                </div>
                <div className="mt-4 text-gray-500 text-sm">
                  <p>Coming soon: Accurate unemployment statistics across different sectors and regions in India</p>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-blue-600">Progress</span>
                  <span className="text-xs text-gray-500">65% complete</span>
                </div>
                <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow rounded-lg border border-yellow-100">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Policy Documents</h3>
                  </div>
                </div>
                <div className="mt-4 text-gray-500 text-sm">
                  <p>Coming soon: Analysis of current government policies and proposals for better unemployment support</p>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-blue-600">Progress</span>
                  <span className="text-xs text-gray-500">30% complete</span>
                </div>
                <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow rounded-lg border border-yellow-100">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Job-Seeking Tools</h3>
                  </div>
                </div>
                <div className="mt-4 text-gray-500 text-sm">
                  <p>Coming soon: Resume templates, interview preparation guides, and skill development resources</p>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-blue-600">Progress</span>
                  <span className="text-xs text-gray-500">15% complete</span>
                </div>
                <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 bg-white shadow overflow-hidden sm:rounded-lg border border-yellow-200">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center mb-4">
                <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Help Us Build Our Resource Hub
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                We're actively developing the Resources section to provide valuable information and tools for unemployed individuals in India. Your participation and feedback can help us build a more robust platform.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      Register now to be among the first to access our resources when they are released.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar 
          onNavigateHome={navigateToHome}
          onNavigateRegister={navigateToRegister}
          onNavigateStories={navigateToStories}
          onNavigateResources={navigateToResources}
          onNavigateAbout={navigateToAbout}
          onNavigateLogin={navigateToLogin}
          currentPage="about"
        />
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center mb-4">
              <div className="inline-block p-3 rounded-full bg-blue-100 mr-3">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 animate-pulse">
                <svg className="-ml-1 mr-1.5 h-2 w-2 text-yellow-400" fill="currentColor" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="3" />
                </svg>
                Under Development
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Our Initiative
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              JobPriorityIndia is a grassroots movement advocating for better unemployment support and job creation policies in India.
            </p>
            <div className="mt-6 mb-8 w-24 h-1 rounded-full bg-blue-500 mx-auto"></div>
            <div className="mt-8 inline-flex flex-col sm:flex-row gap-4 sm:gap-3">
              <button 
                onClick={navigateToRegister}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                Join Our Growing Movement
              </button>
              <button 
                onClick={navigateToHome}
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                Return to Home
              </button>
            </div>
          </div>
          
          <div className="mt-16 bg-white shadow overflow-hidden sm:rounded-lg border border-yellow-200">
            <div className="border-b border-gray-200">
              <div className="px-4 py-5 sm:px-6 flex items-center">
                <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Our Mission & Vision <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-800">Coming Soon</span>
                </h3>
              </div>
              <p className="mt-1 max-w-2xl text-sm text-gray-500 px-4 py-2">
                Our full mission statement and team details will be available soon.
              </p>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="prose max-w-none">
                <p>
                  <strong className="text-blue-700">Our mission</strong> is to advocate for the millions of unemployed Indians who are struggling to find meaningful work during these challenging economic times. We believe that by uniting our voices, we can compel the government to prioritize job creation and support for those in need.
                </p>
                <p className="mt-4">
                  <strong className="text-blue-700">Our team</strong> is currently under development. We're assembling a diverse group of passionate advocates, policy experts, data analysts, and community organizers who believe in making a difference.
                </p>
                <p className="mt-4">
                  <strong className="text-blue-700">Our approach</strong> combines data collection, storytelling, and direct advocacy to create a compelling case for policy change. By registering with us, you're becoming part of the founding community that will help shape the future of employment policy in India.
                </p>
                <div className="mt-8 p-4 bg-blue-50 rounded-md border border-blue-100">
                  <h4 className="text-blue-700 font-medium flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    Be a Founding Member
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Join now to be recognized as a founding member of our initiative. Early supporters will receive special recognition and opportunities to shape our advocacy approach.
                  </p>
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-blue-600">Development progress</span>
                      <span className="text-xs text-gray-500">25% complete</span>
                    </div>
                    <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Home page
  return (
    <div>
      <Navbar 
        onNavigateHome={navigateToHome}
        onNavigateRegister={navigateToRegister}
        onNavigateStories={navigateToStories}
        onNavigateResources={navigateToResources}
        onNavigateAbout={navigateToAbout}
        onNavigateLogin={navigateToLogin}
        currentPage="home"
      />

      {/* Hero Section - Updated for Job Market Advocacy */}
      <section style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '4rem 1rem' }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center' 
          }}>
            <h1 style={{ marginBottom: '1.5rem' }}>
              Making Employment a National Priority for India
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '800px', lineHeight: '1.6' }}>
              The unemployment crisis in India has reached critical levels. Over <strong>5.2 million</strong> workers 
              have lost their jobs in recent years, with <strong>78%</strong> struggling to meet basic needs. 
              We're building a coalition to petition the Indian government for meaningful support and new job opportunities.
            </p>
            <div className="responsive-grid" style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: '2rem',
              marginBottom: '2rem',
              width: '100%',
              maxWidth: '900px'
            }}>
              <div style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                padding: '1.5rem', 
                borderRadius: '0.5rem',
                flex: '1',
                minWidth: '200px'
              }}>
                <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>56%</p>
                <p style={{ fontSize: '1rem' }}>youth unemployment rate in certain sectors</p>
              </div>
              <div style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                padding: '1.5rem', 
                borderRadius: '0.5rem',
                flex: '1',
                minWidth: '200px'
              }}>
                <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>83%</p>
                <p style={{ fontSize: '1rem' }}>faced salary cuts or delayed payments</p>
              </div>
              <div style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                padding: '1.5rem', 
                borderRadius: '0.5rem',
                flex: '1',
                minWidth: '200px'
              }}>
                <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>72%</p>
                <p style={{ fontSize: '1rem' }}>unable to pay EMIs and loan installments</p>
              </div>
            </div>
            <button
              onClick={navigateToRegister}
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#ffffff',
                color: '#1e3a8a',
                borderRadius: '0.375rem',
                fontWeight: '600',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.125rem'
              }}
            >
              Join Our Initiative
            </button>
          </div>
        </div>
      </section>

      {/* Campaign Registration Section */}
      <section style={{ backgroundColor: '#f7f9fc', padding: '4rem 1rem' }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '700px' }}>
              <h2 style={{ marginBottom: '1rem', color: '#1e3a8a' }}>
                Register to Strengthen Our Collective Voice
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#4b5563' }}>
                By registering with us, you help strengthen our petition to the Indian government 
                for unemployment benefits, skill development programs, and new job creation initiatives. 
                Together, we can make the government take action on this critical issue.
              </p>
            </div>
            
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '0.5rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
              padding: '2rem',
              width: '100%',
              maxWidth: '600px',
              textAlign: 'center'
            }}>
              <h3 style={{ marginBottom: '1.5rem', color: '#1e3a8a' }}>Join thousands of Indians fighting for change</h3>
              <p style={{ marginBottom: '2rem' }}>
                Our registration form collects essential information to strengthen our petition.
                Your details will be kept secure and only used for campaign purposes.
              </p>
              <button
                onClick={navigateToRegister}
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  borderRadius: '0.375rem',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                Sign the Petition
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Campaign Works (Features) */}
      <section style={{ padding: '4rem 1rem' }}>
        <div className="container">
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '3rem'
          }}>
            <h2 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>
              How Our Campaign Works
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#4b5563', maxWidth: '700px', margin: '0 auto' }}>
              Our three-step approach to advocate for government action on unemployment
            </p>
          </div>
          
          <div className="responsive-grid" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '2rem',
            margin: '0 auto',
            maxWidth: '1000px'
          }}>
            <div style={{ 
              flex: '1', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              backgroundColor: '#f9fafb'
            }}>
              <div style={{ 
                backgroundColor: '#dbeafe',
                borderRadius: '50%',
                width: '4rem',
                height: '4rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb' }}>1</span>
              </div>
              <h3 style={{ marginBottom: '0.75rem' }}>Collect Data & Signatures</h3>
              <p>We gather information from affected individuals across India to understand the full impact of unemployment.</p>
            </div>
            
            <div style={{ 
              flex: '1', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              backgroundColor: '#f9fafb'
            }}>
              <div style={{ 
                backgroundColor: '#dbeafe',
                borderRadius: '50%',
                width: '4rem',
                height: '4rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb' }}>2</span>
              </div>
              <h3 style={{ marginBottom: '0.75rem' }}>Present Evidence to Government</h3>
              <p>We compile the data and stories into a comprehensive report for submission to government officials.</p>
            </div>
            
            <div style={{ 
              flex: '1', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              backgroundColor: '#f9fafb'
            }}>
              <div style={{ 
                backgroundColor: '#dbeafe',
                borderRadius: '50%',
                width: '4rem',
                height: '4rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb' }}>3</span>
              </div>
              <h3 style={{ marginBottom: '0.75rem' }}>Advocate for Change</h3>
              <p>We engage with policymakers to push for concrete action: job creation programs, unemployment benefits, and skill development initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ backgroundColor: '#2563eb', color: 'white', padding: '4rem 1rem' }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '2rem',
            textAlign: 'center'
          }} className="responsive-grid md:flex-row md:text-left">
            <div style={{ flex: '1' }}>
              <p style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>85k+</p>
              <p>Petition Signatures</p>
            </div>
            <div style={{ flex: '1' }}>
              <p style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>27+</p>
              <p>Districts Represented</p>
            </div>
            <div style={{ flex: '1' }}>
              <p style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>8+</p>
              <p>MP Meetings Conducted</p>
            </div>
            <div style={{ flex: '1' }}>
              <p style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>15k+</p>
              <p>Personal Stories Shared</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: '4rem 1rem' }}>
        <div className="container">
          <div style={{ 
            backgroundColor: '#f9fafb', 
            borderRadius: '0.5rem', 
            padding: '2rem', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '1.875rem', marginBottom: '1rem' }}>Join the Movement for Change</h2>
            <p style={{ marginBottom: '2rem', maxWidth: '600px' }}>
              Your voice matters. Sign our petition and help us show the Indian government that urgent action is needed to address the unemployment crisis.
            </p>
            <button
              onClick={navigateToRegister}
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#2563eb',
                color: 'white',
                borderRadius: '0.375rem',
                fontWeight: '500',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Sign The Petition
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#1e3a8a', 
        color: 'white', 
        padding: '3rem 1rem',
        boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '2rem',
            flexWrap: 'wrap'
          }} className="footer-columns md:flex-row">
            <div style={{ flex: '1.5' }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '1rem',
                fontWeight: '600',
                color: '#fff',
                borderBottom: '2px solid #4f84e8',
                paddingBottom: '0.5rem',
                display: 'inline-block'
              }}>JobPriorityIndia</h3>
              <p style={{ 
                maxWidth: '400px',
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                Advocating for government action to address India's unemployment crisis. We gather data and stories to push for concrete policy changes and support for those affected.
              </p>
              <div className="social-icons" style={{ 
                display: 'flex', 
                gap: '1rem', 
                marginTop: '1.5rem'
              }}>
                <a href="#" style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  fontSize: '1.25rem',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#4267B2';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                }}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  fontSize: '1.25rem',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#1DA1F2';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                }}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  fontSize: '1.25rem',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#0077B5';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                }}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  fontSize: '1.25rem',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#E4405F';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                }}>
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div style={{ flex: '1' }}>
              <h4 style={{ 
                marginBottom: '1rem',
                fontWeight: '600',
                fontSize: '1.125rem',
                color: '#fff',
                borderBottom: '2px solid #4f84e8',
                paddingBottom: '0.5rem',
                display: 'inline-block'
              }}>Campaign</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#" 
                    onClick={(e) => { e.preventDefault(); navigateToHome(); }} 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    <span style={{ marginRight: '0.5rem' }}>›</span> Home
                  </a>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#" 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    <span style={{ marginRight: '0.5rem' }}>›</span> About Our Initiative
                  </a>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#" 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    <span style={{ marginRight: '0.5rem' }}>›</span> Impact Stories
                  </a>
                </li>
                <li>
                  <a href="#" 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    <span style={{ marginRight: '0.5rem' }}>›</span> Progress Updates
                  </a>
                </li>
              </ul>
            </div>
            <div style={{ flex: '1' }}>
              <h4 style={{ 
                marginBottom: '1rem',
                fontWeight: '600',
                fontSize: '1.125rem',
                color: '#fff',
                borderBottom: '2px solid #4f84e8',
                paddingBottom: '0.5rem',
                display: 'inline-block'
              }}>Resources</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#" 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    <span style={{ marginRight: '0.5rem' }}>›</span> Unemployment Statistics
                  </a>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#" 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    <span style={{ marginRight: '0.5rem' }}>›</span> Government Policies
                  </a>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href="#" 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    <span style={{ marginRight: '0.5rem' }}>›</span> Economic Reports
                  </a>
                </li>
                <li>
                  <a href="#" 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    <span style={{ marginRight: '0.5rem' }}>›</span> Media Articles
                  </a>
                </li>
              </ul>
            </div>
            <div style={{ flex: '1' }}>
              <h4 style={{ 
                marginBottom: '1rem',
                fontWeight: '600',
                fontSize: '1.125rem',
                color: '#fff',
                borderBottom: '2px solid #4f84e8',
                paddingBottom: '0.5rem',
                display: 'inline-block'
              }}>Contact Us</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ 
                  marginBottom: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'flex-start'
                }}>
                  <i className="fas fa-map-marker-alt" style={{ marginRight: '0.75rem', marginTop: '0.25rem' }}></i>
                  <span>123 Advocacy Street, New Delhi, India, 110001</span>
                </li>
                <li style={{ 
                  marginBottom: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <i className="fas fa-phone-alt" style={{ marginRight: '0.75rem' }}></i>
                  <span>+91 98765 43210</span>
                </li>
                <li style={{ 
                  marginBottom: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <i className="fas fa-envelope" style={{ marginRight: '0.75rem' }}></i>
                  <span>contact@jobsupportfe.com</span>
                </li>
                <li style={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <i className="fas fa-clock" style={{ marginRight: '0.75rem' }}></i>
                  <span>Mon-Fri: 9AM - 6PM</span>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ 
            textAlign: 'center', 
            marginTop: '3rem', 
            borderTop: '1px solid rgba(255,255,255,0.2)', 
            paddingTop: '1.5rem',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '0.875rem'
          }}>
            <p>&copy; {new Date().getFullYear()} JobPriorityIndia - Advocating for India's Unemployed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SimpleApp; 