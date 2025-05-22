const AccountCard = () => {
    const savedUserData = localStorage.getItem('popxUserData');
    const parseData=JSON.parse(savedUserData);
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="bg-white  w-full max-w-xs rounded-md h-[780px] shadow-2xl ">
       
          <div className="border-b px-4 py-3 text-sm font-medium text-gray-700">
            Account Settings
          </div>
  
    
          <div className="p-4">
            <div className="flex items-start space-x-3">
             
              <div className="relative w-12 h-12">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
              
                <span className="absolute bottom-0 right-0 w-4 h-4 bg-purple-600 border-2 border-white rounded-full"></span>
              </div>
  
         
              <div>
                <div className="text-sm font-semibold">{parseData.fullName}</div>
                <div className="text-xs text-gray-600">{parseData.emailAddress}</div>
              </div>
            </div>
  
    
            <p className="text-xs text-gray-700 mt-3 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AccountCard;
  