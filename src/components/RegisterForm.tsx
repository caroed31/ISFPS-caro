'use client';

import { useState } from 'react';

// registration
export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    firstname: '',
    email: '',
    password: '',
    plan: 'starter',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear errors when user types
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    
    if (error) setError(null);
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      plan: e.target.value
    }));
    
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setFieldErrors({});
    
    try {
      // Send data to our API
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        if (response.status === 400 && data.details) {
          // Format field errors
          const newFieldErrors: Record<string, string> = {};
          Object.entries(data.details).forEach((entry) => {
            const field = entry[0];
            const error = entry[1] as { _errors?: string[] };
            // Make sure _errors exists and has items
            if (error._errors && error._errors.length > 0) {
              newFieldErrors[field] = error._errors[0];
            }
          });
          setFieldErrors(newFieldErrors);
          setError("Please fix the errors in the form");
        } else if (response.status === 409) {
          setError("An account with this email already exists");
          setFieldErrors({ email: "Email already registered" });
        } else {
          setError(data.error || "Something went wrong. Please try again.");
        }
        setIsSubmitting(false);
        return;
      }
      
      // If successful, redirect to the thank you page
      window.location.href = '/register/thank-you';
    } catch (error) {
      console.error('Error submitting form:', error);
      setError("Network error. Please check your connection and try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative z-10">      
      <form onSubmit={handleSubmit} className="relative p-8 bg-white border border-gray-100 shadow-lg rounded-xl">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#178fc1] text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
          Limited Time Offer
        </div>
        
        <h3 className="mt-2 mb-6 text-2xl font-bold text-center">Create Your Account</h3>
        
        {error && (
          <div className="p-3 mb-4 text-red-700 border border-red-200 rounded-lg bg-red-50">
            {error}
          </div>
        )}
        
        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
          <div>
            <label htmlFor="firstname" className="block mb-1 text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 border ${fieldErrors.firstname ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-lg focus:ring-2 focus:ring-[#178fc1] focus:border-[#178fc1] focus:outline-none transition-all duration-200`}
              placeholder="John"
            />
            {fieldErrors.firstname && (
              <p className="mt-1 text-sm text-red-600">{fieldErrors.firstname}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 border ${fieldErrors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-lg focus:ring-2 focus:ring-[#178fc1] focus:border-[#178fc1] focus:outline-none transition-all duration-200`}
              placeholder="Smith"
            />
            {fieldErrors.name && (
              <p className="mt-1 text-sm text-red-600">{fieldErrors.name}</p>
            )}
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
            Work Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 border ${fieldErrors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-lg focus:ring-2 focus:ring-[#178fc1] focus:border-[#178fc1] focus:outline-none transition-all duration-200`}
            placeholder="john.smith@company.com"
          />
          {fieldErrors.email && (
            <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 border ${fieldErrors.password ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-lg focus:ring-2 focus:ring-[#178fc1] focus:border-[#178fc1] focus:outline-none transition-all duration-200`}
            placeholder="••••••••"
          />
          {fieldErrors.password ? (
            <p className="mt-1 text-sm text-red-600">{fieldErrors.password}</p>
          ) : (
            <p className="mt-1 text-xs text-gray-500">
              Min. 8 characters with at least 1 number and 1 special character
            </p>
          )}
        </div>
        
        <div className="mb-6">
          <p className="block mb-3 text-sm font-medium text-gray-700">Select Your Plan</p>
          
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <label className={`relative border ${formData.plan === 'starter' ? 'border-[#178fc1] bg-blue-50' : 'border-gray-200'} rounded-lg p-4 cursor-pointer transition-colors hover:bg-blue-50/50`}>
              <input
                type="radio"
                name="plan"
                value="starter"
                checked={formData.plan === 'starter'}
                onChange={handleRadioChange}
                className="sr-only"
              />
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">Starter</span>
                <span className={`h-4 w-4 rounded-full ${formData.plan === 'starter' ? 'bg-[#178fc1]' : 'bg-gray-200'} flex items-center justify-center`}>
                  {formData.plan === 'starter' && (
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  )}
                </span>
              </div>
              <p className="text-sm text-gray-600">Free</p>
              <p className="mt-1 text-xs text-gray-500">100 messages/mo</p>
            </label>
            
            <label className={`relative border ${formData.plan === 'pro' ? 'border-[#178fc1] bg-blue-50' : 'border-gray-200'} rounded-lg p-4 cursor-pointer transition-colors hover:bg-blue-50/50`}>
              <input
                type="radio"
                name="plan"
                value="pro"
                checked={formData.plan === 'pro'}
                onChange={handleRadioChange}
                className="sr-only"
              />
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">Pro</span>
                <span className={`h-4 w-4 rounded-full ${formData.plan === 'pro' ? 'bg-[#178fc1]' : 'bg-gray-200'} flex items-center justify-center`}>
                  {formData.plan === 'pro' && (
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  )}
                </span>
              </div>
              <p className="text-sm text-gray-600">$49/mo</p>
              <p className="mt-1 text-xs text-gray-500">1,000 messages/mo</p>
            </label>
            
            <label className={`relative border ${formData.plan === 'enterprise' ? 'border-[#178fc1] bg-blue-50' : 'border-gray-200'} rounded-lg p-4 cursor-pointer transition-colors hover:bg-blue-50/50`}>
              <input
                type="radio"
                name="plan"
                value="enterprise"
                checked={formData.plan === 'enterprise'}
                onChange={handleRadioChange}
                className="sr-only"
              />
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">Enterprise</span>
                <span className={`h-4 w-4 rounded-full ${formData.plan === 'enterprise' ? 'bg-[#178fc1]' : 'bg-gray-200'} flex items-center justify-center`}>
                  {formData.plan === 'enterprise' && (
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  )}
                </span>
              </div>
              <p className="text-sm text-gray-600">Custom</p>
              <p className="mt-1 text-xs text-gray-500">Unlimited messages</p>
            </label>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-[#178fc1] hover:bg-[#1578a7] transition-all duration-300 shadow-md group"
        >
          {isSubmitting ? (
            <>
              <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            <>
              <span>Get Started Now</span>
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </>
          )}
        </button>
        
        <div className="mt-4 text-xs text-center text-gray-500">
          By joining, you agree to our <a href="/register" className="text-[#178fc1] hover:underline">Terms of Service</a> and <a href="/register" className="text-[#178fc1] hover:underline">Privacy Policy</a>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xs">No credit card for Starter plan</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xs">Cancel anytime</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xs">24/7 support</span>
          </div>
        </div>
      </form>
    </div>
  );
}