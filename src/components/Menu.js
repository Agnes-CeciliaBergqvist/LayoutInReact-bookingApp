import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./BookReducer";

function Menu({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const currentTrip = useCart();
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    //console.log("hej ")
    const JWT = localStorage.getItem("jwt");
    setJwt(JWT);
  }, []);

  function clearLocalStorage() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <>
      { jwt ? (
        <nav className="bg-white relative flex flex-wrap items-center justify-between px-2 py-3 bg-amber-500 mb-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link to="/">
                <svg
                  className="mx-auto h-10 w-auto absolute flex left-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="orange"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h3 className="flex align-center text-sm font-bold py-2 uppercase gray-700 ">
                  Speedo
                </h3>
              </Link>
              <button
                className="text-gray-700 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-gray-500 block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                  <Link
                    to="/"
                    className="hover:bg-gray-700 hover:text-white px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug"
                    aria-current="page">
                    Last minute
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/booktrip"
                    className="hover:bg-gray-700 hover:text-white px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug"
                    aria-current="page">
                    My bookings/Checkout
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/createtrip"
                    className="hover:bg-gray-700 hover:text-white px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug"
                    aria-current="page"
                  >
                    Add trip
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug bg-yellow-400 text-yellow-900 rounded-md"
                    onClick={clearLocalStorage}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="bg-white relative flex flex-wrap items-center justify-between px-2 py-3 bg-amber-500 mb-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link to="/homepage">
                <svg
                  className="mx-auto h-10 w-auto absolute flex left-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="orange"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h3 className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase gray-700 ">
                  Speedo
                </h3>
              </Link>
              <button
                className="text-gray-700 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-gray-500 block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <Link
                    to="/homepage"
                    className="hover:bg-gray-700 hover:text-white px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/registration">
                    <button className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug bg-yellow-400 text-yellow-900 rounded-md">
                      Registrate
                    </button>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/login">
                    <button className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug bg-yellow-400 text-yellow-900 rounded-md">
                      Login
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Menu;

// { jwt ? (

//   <nav className="bg-white-800">
//   <div className="max-w-9xl mx-auto px-2 sm:px-6 lg:px-8 bg-white">
//     <div className="relative flex items-center justify-between h-16">

//       <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">

//         <div className="sm:block sm:ml-6">
//           <div className="flex space-x-4">

//           <Link to="/">
//             <svg className="mx-auto h-10 w-auto absolute flex left-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="orange">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//             </svg>
//           </Link>
//           <Link to="/homepage" className="gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Start</Link>
//           <Link to="/" className="gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Last minute</Link>
//           <Link to="/booktrip" className="gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My bookings/Checkout</Link>
//           <Link to="/trips" className="gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My trips</Link>
//           <Link to="/createtrip" className="gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add trips</Link>

//           <button className="absolute right-4 py-2 px-3 bg-yellow-400 text-yellow-900 rounded-md" onClick={clearLocalStorage}>Logout</button>

//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

//   </nav>

//       ): (

//   <nav className="bg-white-800">
//     <div className="max-w-9xl mx-auto px-2 sm:px-6 lg:px-8 bg-white">
//       <div className="relative flex items-center justify-between h-16">

//         <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">

//           <div className="sm:block sm:ml-6">
//             <div className="flex space-x-4">

//             <Link to="/">
//               <svg className="mx-auto h-10 w-auto absolute flex left-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="orange">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//               </svg>
//             </Link>
//             <Link to="/homepage" className="gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Start</Link>
//             <Link to="/" className="gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Last minute</Link>
//             <Link to="/booktrip" className="gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My bookings/Checkout({currentTrip.length})</Link>
//             <Link to="/trips" className="gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My trips</Link>
//             <Link to="/createtrip" className="gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add trips</Link>
//             <Link to="/registration"><button className="absolute right-24 py-2 px-3 bg-yellow-400 text-yellow-900 rounded-md">Registrate</button></Link>
//             <Link to="/login"><button className="absolute right-4 py-2 px-3 bg-yellow-400 text-yellow-900 rounded-md">Login</button></Link>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   </nav>
//    )}
