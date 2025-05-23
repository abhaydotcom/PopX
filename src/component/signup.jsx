import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';


export default function Signup() {

  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    password: '',
    companyName: '',
    isAgency: 'Yes'
  });

  const handleLogin=()=>{
    navigate('/login')
  }

  const [errors, setErrors] = useState({});

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

  const handleRadioChange = (value) => {
    setFormData(prev => ({
      ...prev,
      isAgency: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.phoneNumber.trim() ) {
      newErrors.phoneNumber = 'Phone number is required';
    }
    if (formData.phoneNumber.trim().length!==10 ) {
      newErrors.phoneNumber = 'Phone number must be 10 digits long';
    }
    
    if(!/^\d+$/.test(formData.phoneNumber)){
      newErrors.phoneNumber="Phone number must contain only digits";
    }
    

    
    
  
    
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email address';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    
    if (validateForm()) {

      localStorage.setItem('popxUserData', JSON.stringify(formData));
      
      toast.success('Account created successfully!')
      navigate('/')
      
   
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        password: '',
        companyName: '',
        isAgency: 'Yes'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Create your<br />
          PopX account
        </h1>
        
        <div className="space-y-4">
        
          <div>
            <label className="block text-sm text-purple-600 mb-1">
              Full Name*
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className={`w-full px-3 py-3 border rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.fullName ? 'border-red-500' : 'border-gray-200'
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>

  
          <div>
            <label className="block text-sm text-purple-600 mb-1">
              Phone number*
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className={`w-full px-3 py-3 border rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.phoneNumber ? 'border-red-500' : 'border-gray-200'
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
            )}
          </div>

  
          <div>
            <label className="block text-sm text-purple-600 mb-1">
              Email address*
            </label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className={`w-full px-3 py-3 border rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.emailAddress ? 'border-red-500' : 'border-gray-200'
              }`}
            />
            {errors.emailAddress && (
              <p className="text-red-500 text-xs mt-1">{errors.emailAddress}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-purple-600 mb-1">
              Password *
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className={`w-full px-3 py-3 border rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.password ? 'border-red-500' : 'border-gray-200'
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm text-purple-600 mb-1">
              Company name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className="w-full px-3 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Agency Question */}
          <div className="pt-2">
            <p className="text-sm text-gray-700 mb-3">Are you an Agency?*</p>
            <div className="flex gap-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  checked={formData.isAgency === 'Yes'}
                  onChange={() => handleRadioChange('Yes')}
                  className="sr-only"
                />
                <div className={`w-4 h-4 rounded-full border-2 mr-2 flex items-center justify-center ${
                  formData.isAgency === 'Yes' 
                    ? 'border-purple-600 bg-purple-600' 
                    : 'border-gray-300'
                }`}>
                  {formData.isAgency === 'Yes' && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="text-sm text-gray-700">Yes</span>
              </label>
              
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  checked={formData.isAgency === 'No'}
                  onChange={() => handleRadioChange('No')}
                  className="sr-only"
                />
                <div className={`w-4 h-4 rounded-full border-2 mr-2 flex items-center justify-center ${
                  formData.isAgency === 'No' 
                    ? 'border-purple-600 bg-purple-600' 
                    : 'border-gray-300'
                }`}>
                  {formData.isAgency === 'No' && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="text-sm text-gray-700">No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Create Account
            </button>
           
          </div>
          <div className='font-sans mt-2'>Already Have An Account ? <button 
          onClick={handleLogin}
          className='font-bold ml-2 text-purple-700'>Login</button></div>
        </div>
      </div>
    </div>
  );
}