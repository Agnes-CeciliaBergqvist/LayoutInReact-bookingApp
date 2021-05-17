import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
//import {FaAlignRight} from "react-icons/fa"; 





function Menu() {



  const [jwt, setJwt] = useState("")


useEffect(  ()=>{
   //console.log("hej ")
   const JWT =  localStorage.getItem("jwt")
   setJwt(JWT)
 
}, [])

function clearLocalStorage() { 
  localStorage.clear();
  window.location.reload(); 

}


  return (
    <>
    { jwt ? (

<nav className="bg-white-800">
<div className="max-w-9xl mx-auto px-2 sm:px-6 lg:px-8 bg-white">
  <div className="relative flex items-center justify-between h-16">
   
    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
      
      <div className="sm:block sm:ml-6">
        <div className="flex space-x-4">

        <Link to="/"> 
          <svg className="mx-auto h-10 w-auto absolute flex left-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="orange">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </Link>
        <Link to="/homepage" className="gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Start</Link>
        <Link to="/" className="gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Last minute</Link>
        <Link to="/booktrip" className="gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My bookings/Checkout</Link>
        <Link to="/trips" className="gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My trips</Link>
        <Link to="/createtrip" className="gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add trips</Link>
        
        <button className="absolute right-4 py-2 px-3 bg-yellow-400 text-yellow-900 rounded-md" onClick={clearLocalStorage}>Logout</button>
          
        </div>
      </div>
    </div>
  </div>
</div>

</nav>



    ): (

   

    
    
<nav className="bg-white-800">
  <div className="max-w-9xl mx-auto px-2 sm:px-6 lg:px-8 bg-white">
    <div className="relative flex items-center justify-between h-16">
     
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
        
        <div className="sm:block sm:ml-6">
          <div className="flex space-x-4">

          <Link to="/"> 
            <svg className="mx-auto h-10 w-auto absolute flex left-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="orange">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </Link>
          <Link to="/homepage" className="gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Start</Link>
          <Link to="/" className="gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Last minute</Link>
          <Link to="/booktrip" className="gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My bookings/Checkout</Link>
          <Link to="/trips" className="gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My trips</Link>
          <Link to="/createtrip" className="gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add trips</Link>
          <Link to="/registration"><button className="absolute right-24 py-2 px-3 bg-yellow-400 text-yellow-900 rounded-md">Registrate</button></Link>
          <Link to="/login"><button className="absolute right-4 py-2 px-3 bg-yellow-400 text-yellow-900 rounded-md">Login</button></Link>
          
            
          </div>
        </div>
      </div>
    </div>
  </div>

</nav>
 )}
</>
  );
}

export default Menu;
