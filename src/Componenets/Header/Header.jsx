function Header() {
    return (
      <div className="w-full h-auto flex bg-gradient-to-r from-blue-500 to-blue-700 justify-center items-center py-6 shadow-lg">
        <div className="flex items-center space-x-4">
          <img 
            src="./src/Images/logo.png" 
            alt="logo" 
            className="w-24 h-24 rounded-full shadow-xl" 
          />
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">Weather App</h1>
        </div>
      </div>
    );
  }
  
  export default Header;
  