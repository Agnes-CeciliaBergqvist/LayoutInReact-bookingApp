import React from "react";
import { Link } from "react-router-dom";
// import 'https://fontawesome.com/';

function Menu() {
  return (
    
<nav className="bg-gray-800">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
     
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
        
        <div className="sm:block sm:ml-6">
          <div className="flex space-x-4">

          
         
          <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Last minute</Link>

          <Link to="/form" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My bookings</Link>

          <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My trips</Link>
          <button className="absolute right-4 py-2 px-3 bg-yellow-400 text-yellow-900 rounded">Login</button>

            
          </div>
        </div>
      </div>
    </div>
  </div>

  
  
</nav>

  );
}

export default Menu;
