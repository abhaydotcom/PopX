import {useNavigate} from 'react-router-dom'

export default function Home() {
    const navigate=useNavigate();
    const handleCreateAccount = () => {

      navigate('/signup')
    };
  
    const handleLogin = () => {
        
      
      navigate('/login')
    };
  
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="bg-white rounded-lg p-6 sm:p-8 lg:p-10 w-full max-w-xs sm:max-w-sm md:max-w-md shadow-sm">
          <div className="text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-2 sm:mb-3 leading-tight">
              Welcome to PopX
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 mb-6 sm:mb-8 md:mb-10 leading-relaxed px-2 sm:px-0">
              Lorem ipsum dolor sit amet,<br />
              consectetur adipiscing elit.
            </p>
            
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              
              <button
                onClick={handleCreateAccount}
                className="w-full bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-medium py-3 sm:py-4 md:py-5 px-4 sm:px-6 text-sm sm:text-base md:text-lg rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 touch-manipulation"
              >
                Create Account
              </button>
              
         
              <button
                onClick={handleLogin}
                className="w-full bg-purple-300 hover:bg-purple-400 active:bg-purple-500 text-purple-800 hover:text-purple-900 font-medium py-3 sm:py-4 md:py-5 px-4 sm:px-6 text-sm sm:text-base md:text-lg rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 touch-manipulation"
              >
                Already Registered? Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }