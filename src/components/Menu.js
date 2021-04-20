import React from "react";
import { Link } from "react-router-dom";
// import 'https://fontawesome.com/';

function Menu() {
  return (
    // <div>
    //   <nav class="bg-grey-100">
    //     <div class="max-w-6x1 mx-auto border border-grey-400">
    //       <div class="flex justify-between">
    //         {/* <div class="flex"> */}
    //           <span>Last minute travel</span>
    //           <button>
    //             <i class="material-icons">menu</i>
    //           </button>

    //           <Link to="/">CardList</Link>
    //           <Link to="/form">Lägg till</Link>
    //           <Link to="/">My trips</Link>
    //           <button class="py-2 px-3 bg-yellow-400 text-yellow-900 rounded">Login</button>
    //         {/* </div> */}
    //       </div>
    //     </div>
    //   </nav>
    // </div>

   
<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
     
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
        
        <div class="sm:block sm:ml-6">
          <div class="flex space-x-4">

          
         
          <Link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">CardList</Link>

          <Link to="/form" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Form</Link>

          <Link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My trips</Link>
          <button class="absolute right-4 py-2 px-3 bg-yellow-400 text-yellow-900 rounded">Login</button>

            
          </div>
        </div>
      </div>
    </div>
  </div>

  
  
</nav>

  );
}

export default Menu;
