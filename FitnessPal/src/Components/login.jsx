import React, { useState } from 'react';
import { Google, Facebook, Github } from 'lucide-react';

const SignInPage = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    // Clear errors when user types
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!credentials.username.trim()) {
      newErrors.username = 'Username or email is required';
    }
    if (!credentials.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Add your authentication logic here
      console.log('Form submitted:', credentials);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    // Add social login logic here
  };

  return (
    <div className="min-h-screen flex bg-black">
      <div className="w-1/2 bg-black">
        {/* Background image would go here */}
      </div>
      
      <div className="w-1/2 flex items-center justify-center">
        <div className="bg-gray-100 p-8 rounded-lg w-96">
          <h1 className="text-3xl font-semibold mb-6">Sign in</h1>
          
          <div className="space-y-4 mb-6">
            <button
              onClick={() => handleSocialLogin('Google')}
              className="w-full flex items-center justify-center gap-2 p-2 border rounded-md hover:bg-gray-50"
            >
              <Google className="w-5 h-5" />
              Sign in with Google
            </button>
            
            <div className="flex gap-4">
              <button
                onClick={() => handleSocialLogin('Facebook')}
                className="flex-1 flex items-center justify-center gap-2 p-2 border rounded-md hover:bg-gray-50"
              >
                <Facebook className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => handleSocialLogin('Github')}
                className="flex-1 flex items-center justify-center gap-2 p-2 border rounded-md hover:bg-gray-50"
              >
                <Github className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">
                Enter your username or email address
              </label>
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Username or email address"
              />
              {errors.username && (
                <span className="text-red-500 text-sm">{errors.username}</span>
              )}
            </div>
            
            <div>
              <label className="block text-sm mb-1">
                Enter your Password
              </label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Password"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password}</span>
              )}
            </div>
            
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Sign in
              </button>
              <a href="#" className="text-blue-500 text-sm hover:underline">
                Forgot Password
              </a>
            </div>
          </form>
          
          <div className="mt-4 text-sm text-right">
            No Account? {' '}
            <a href="#" className="text-green-600 hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;