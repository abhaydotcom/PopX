import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
    
  const [formData, setFormData] = useState({
    emailAddress: '',
    password: ''
  });
  const navigate=useNavigate();

  const [errors, setErrors] = useState({});

  const  handleSubmit=()=>{

    navigate('/signup')

  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
  
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email address';
    }
    
    
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      
      const savedUserData = localStorage.getItem('popxUserData');
      
      if (savedUserData) {
        const userData = JSON.parse(savedUserData);
        
        if (userData.emailAddress === formData.emailAddress && userData.password === formData.password) {
         
          
          setFormData({
            emailAddress: '',
            password: ''
          });
          
            toast.success('Login successful! Welcome back.');
            navigate('/account')
        } else {
          toast.error('Invalid email or password. Please try again.');
        }
      } else {
        toast.error('No account found. Please create an account first.');
      }
    }
  };

  return (
    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        
      <div className="bg-white rounded-lg p-6 sm:p-8 w-full max-w-sm sm:max-w-md shadow-sm">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 leading-tight">
            Signin to your<br />
            PopX account
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit.
          </p>
        </div>
        
        <div className="space-y-4 sm:space-y-5">
        
          <div>
            <label className="block text-xs sm:text-sm text-purple-600 mb-1 sm:mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              placeholder="Enter email address"
              className={`w-full px-3 py-3 sm:py-4 text-sm sm:text-base border rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.emailAddress ? 'border-red-500' : 'border-gray-200'
              }`}
            />
            {errors.emailAddress && (
              <p className="text-red-500 text-xs mt-1">{errors.emailAddress}</p>
            )}
          </div>

    
          <div>
            <label className="block text-xs sm:text-sm text-purple-600 mb-1 sm:mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              className={`w-full px-3 py-3 sm:py-4 text-sm sm:text-base border rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.password ? 'border-red-500' : 'border-gray-200'
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

  
          <div className="pt-4 sm:pt-6">
            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-gray-400 hover:bg-gray-500 text-white font-medium py-3 sm:py-4 px-4 text-sm sm:text-base rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Login
            </button>
          </div>
          <div className=' mt-2 font-sans'>Not Register Yet!
                <button  onClick={handleSubmit}
                
                className='font-bold ml-2 text-purple-700'>Register</button>
            </div>
        </div>
      </div>
    </div>
  );
}