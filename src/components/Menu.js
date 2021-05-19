import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./BookReducer";


function Menu() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const trip = useCart();
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
        <nav className="bg-white h-20 relative flex flex-wrap items-center justify-between px-2 py-3 bg-amber-500 mb-3">
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
                </Link>
                <div className="flex lg:text-center ml-2">
                
                <h3 className="flex align-center text-sm font-bold py-2 uppercase gray-700 ">
                  Speedo
                </h3>
                </div>
             
              <button
                className="text-gray-700 cursor-pointer text-xl leading-none px-3 py-1 m-1 border border-solid border-transparent rounded  block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="30px" height="30px"><radialGradient id="DtMiIZm7jDQ8jq4FOzmy4a" cx="36.833" cy="35.917" r="26" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#f4e09d"/><stop offset=".226" stop-color="#f8e8b5"/><stop offset=".513" stop-color="#fcf0cd"/><stop offset=".778" stop-color="#fef4dc"/><stop offset="1" stop-color="#fff6e1"/></radialGradient><path fill="url(#DtMiIZm7jDQ8jq4FOzmy4a)" d="M10,8L10,8c2.209,0,4-1.791,4-4v0c0-2.209-1.791-4-4-4h0C7.791,0,6,1.791,6,4v0 C6,6.209,7.791,8,10,8z"/><radialGradient id="DtMiIZm7jDQ8jq4FOzmy4b" cx="31.417" cy="29.917" r="28.77" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#f4e09d"/><stop offset=".226" stop-color="#f8e8b5"/><stop offset=".513" stop-color="#fcf0cd"/><stop offset=".778" stop-color="#fef4dc"/><stop offset="1" stop-color="#fff6e1"/></radialGradient><path fill="url(#DtMiIZm7jDQ8jq4FOzmy4b)" d="M7.5,64L7.5,64c1.933,0,3.5-1.567,3.5-3.5v0c0-1.933-1.567-3.5-3.5-3.5h0 C5.567,57,4,58.567,4,60.5v0C4,62.433,5.567,64,7.5,64z"/><radialGradient id="DtMiIZm7jDQ8jq4FOzmy4c" cx="32" cy="32" r="32" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#f4e09d"/><stop offset=".226" stop-color="#f8e8b5"/><stop offset=".513" stop-color="#fcf0cd"/><stop offset=".778" stop-color="#fef4dc"/><stop offset="1" stop-color="#fff6e1"/></radialGradient><path fill="url(#DtMiIZm7jDQ8jq4FOzmy4c)" d="M62,20.5L62,20.5c0-2.485-2.015-4.5-4.5-4.5H49c-2.209,0-4-1.791-4-4v0c0-2.209,1.791-4,4-4 h2c2.209,0,4-1.791,4-4v0c0-2.209-1.791-4-4-4L20,0c-2.209,0-4,1.791-4,4v0c0,2.209,1.791,4,4,4h2c1.657,0,3,1.343,3,3v0 c0,1.657-1.343,3-3,3H7.5C5.567,14,4,15.567,4,17.5v0C4,19.433,5.567,21,7.5,21H9c1.657,0,3,1.343,3,3v0c0,1.657-1.343,3-3,3H5 c-2.761,0-5,2.239-5,5v0c0,2.761,2.239,5,5,5h2.5c1.933,0,3.5,1.567,3.5,3.5v0c0,1.933-1.567,3.5-3.5,3.5H6c-2.209,0-4,1.791-4,4v0 c0,2.209,1.791,4,4,4h11.5c1.381,0,2.5,1.119,2.5,2.5v0c0,1.381-1.119,2.5-2.5,2.5h0c-1.933,0-3.5,1.567-3.5,3.5v0 c0,1.933,1.567,3.5,3.5,3.5h30c1.933,0,3.5-1.567,3.5-3.5v0c0-1.933-1.567-3.5-3.5-3.5H47c-1.105,0-2-0.895-2-2v0 c0-1.105,0.895-2,2-2h13c2.209,0,4-1.791,4-4v0c0-2.209-1.791-4-4-4h-3.5c-1.381,0-2.5-1.119-2.5-2.5v0c0-1.381,1.119-2.5,2.5-2.5 H57c2.209,0,4-1.791,4-4v0c0-2.209-1.791-4-4-4h-4.5c-1.933,0-3.5-1.567-3.5-3.5v0c0-1.933,1.567-3.5,3.5-3.5h5 C59.985,25,62,22.985,62,20.5z"/><linearGradient id="DtMiIZm7jDQ8jq4FOzmy4d" x1="32.5" x2="32.5" y1="1.229" y2="64.477" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#a4a4a4"/><stop offset=".63" stop-color="#7f7f7f"/><stop offset="1" stop-color="#6f6f6f"/><stop offset="1" stop-color="#6f6f6f"/></linearGradient><path fill="url(#DtMiIZm7jDQ8jq4FOzmy4d)" d="M14.5,28h36c1.933,0,3.5,1.567,3.5,3.5v0c0,1.933-1.567,3.5-3.5,3.5h-36 c-1.933,0-3.5-1.567-3.5-3.5v0C11,29.567,12.567,28,14.5,28z M11,16.5L11,16.5c0,1.933,1.567,3.5,3.5,3.5h36 c1.933,0,3.5-1.567,3.5-3.5v0c0-1.933-1.567-3.5-3.5-3.5h-36C12.567,13,11,14.567,11,16.5z M11,46.5L11,46.5 c0,1.933,1.567,3.5,3.5,3.5h36c1.933,0,3.5-1.567,3.5-3.5v0c0-1.933-1.567-3.5-3.5-3.5h-36C12.567,43,11,44.567,11,46.5z"/></svg>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center bg-white" +
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
                    My bookings/Checkout({trip.length})
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
        <nav className="bg-white h-20 relative flex flex-wrap items-center justify-between px-2 py-3 bg-amber-500 mb-3">
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
                </Link>
                <div className="flex lg:text-center ml-2">
                
                <h3 className="flex align-center text-sm font-bold py-2 uppercase gray-700 ">
                  Speedo
                </h3>
                </div>
              
              <button
                className="text-gray-700 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="30px" height="30px"><radialGradient id="DtMiIZm7jDQ8jq4FOzmy4a" cx="36.833" cy="35.917" r="26" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#f4e09d"/><stop offset=".226" stop-color="#f8e8b5"/><stop offset=".513" stop-color="#fcf0cd"/><stop offset=".778" stop-color="#fef4dc"/><stop offset="1" stop-color="#fff6e1"/></radialGradient><path fill="url(#DtMiIZm7jDQ8jq4FOzmy4a)" d="M10,8L10,8c2.209,0,4-1.791,4-4v0c0-2.209-1.791-4-4-4h0C7.791,0,6,1.791,6,4v0 C6,6.209,7.791,8,10,8z"/><radialGradient id="DtMiIZm7jDQ8jq4FOzmy4b" cx="31.417" cy="29.917" r="28.77" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#f4e09d"/><stop offset=".226" stop-color="#f8e8b5"/><stop offset=".513" stop-color="#fcf0cd"/><stop offset=".778" stop-color="#fef4dc"/><stop offset="1" stop-color="#fff6e1"/></radialGradient><path fill="url(#DtMiIZm7jDQ8jq4FOzmy4b)" d="M7.5,64L7.5,64c1.933,0,3.5-1.567,3.5-3.5v0c0-1.933-1.567-3.5-3.5-3.5h0 C5.567,57,4,58.567,4,60.5v0C4,62.433,5.567,64,7.5,64z"/><radialGradient id="DtMiIZm7jDQ8jq4FOzmy4c" cx="32" cy="32" r="32" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#f4e09d"/><stop offset=".226" stop-color="#f8e8b5"/><stop offset=".513" stop-color="#fcf0cd"/><stop offset=".778" stop-color="#fef4dc"/><stop offset="1" stop-color="#fff6e1"/></radialGradient><path fill="url(#DtMiIZm7jDQ8jq4FOzmy4c)" d="M62,20.5L62,20.5c0-2.485-2.015-4.5-4.5-4.5H49c-2.209,0-4-1.791-4-4v0c0-2.209,1.791-4,4-4 h2c2.209,0,4-1.791,4-4v0c0-2.209-1.791-4-4-4L20,0c-2.209,0-4,1.791-4,4v0c0,2.209,1.791,4,4,4h2c1.657,0,3,1.343,3,3v0 c0,1.657-1.343,3-3,3H7.5C5.567,14,4,15.567,4,17.5v0C4,19.433,5.567,21,7.5,21H9c1.657,0,3,1.343,3,3v0c0,1.657-1.343,3-3,3H5 c-2.761,0-5,2.239-5,5v0c0,2.761,2.239,5,5,5h2.5c1.933,0,3.5,1.567,3.5,3.5v0c0,1.933-1.567,3.5-3.5,3.5H6c-2.209,0-4,1.791-4,4v0 c0,2.209,1.791,4,4,4h11.5c1.381,0,2.5,1.119,2.5,2.5v0c0,1.381-1.119,2.5-2.5,2.5h0c-1.933,0-3.5,1.567-3.5,3.5v0 c0,1.933,1.567,3.5,3.5,3.5h30c1.933,0,3.5-1.567,3.5-3.5v0c0-1.933-1.567-3.5-3.5-3.5H47c-1.105,0-2-0.895-2-2v0 c0-1.105,0.895-2,2-2h13c2.209,0,4-1.791,4-4v0c0-2.209-1.791-4-4-4h-3.5c-1.381,0-2.5-1.119-2.5-2.5v0c0-1.381,1.119-2.5,2.5-2.5 H57c2.209,0,4-1.791,4-4v0c0-2.209-1.791-4-4-4h-4.5c-1.933,0-3.5-1.567-3.5-3.5v0c0-1.933,1.567-3.5,3.5-3.5h5 C59.985,25,62,22.985,62,20.5z"/><linearGradient id="DtMiIZm7jDQ8jq4FOzmy4d" x1="32.5" x2="32.5" y1="1.229" y2="64.477" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#a4a4a4"/><stop offset=".63" stop-color="#7f7f7f"/><stop offset="1" stop-color="#6f6f6f"/><stop offset="1" stop-color="#6f6f6f"/></linearGradient><path fill="url(#DtMiIZm7jDQ8jq4FOzmy4d)" d="M14.5,28h36c1.933,0,3.5,1.567,3.5,3.5v0c0,1.933-1.567,3.5-3.5,3.5h-36 c-1.933,0-3.5-1.567-3.5-3.5v0C11,29.567,12.567,28,14.5,28z M11,16.5L11,16.5c0,1.933,1.567,3.5,3.5,3.5h36 c1.933,0,3.5-1.567,3.5-3.5v0c0-1.933-1.567-3.5-3.5-3.5h-36C12.567,13,11,14.567,11,16.5z M11,46.5L11,46.5 c0,1.933,1.567,3.5,3.5,3.5h36c1.933,0,3.5-1.567,3.5-3.5v0c0-1.933-1.567-3.5-3.5-3.5h-36C12.567,43,11,44.567,11,46.5z"/></svg>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center bg-white" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <Link
                    to="/homepage"
                    className="hover:bg-gray-700 hover:text-white px-3 py-2 m-1 flex items-center text-xs uppercase font-bold leading-snug"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                <Link
                    to="/notloggedin"
                    className="hover:bg-gray-700 hover:text-white px-3 py-2 m-1 flex items-center text-xs uppercase font-bold leading-snug"
                    aria-current="page"
                  >
                    Last minute
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/registration">
                    <button className="px-3 py-2 m-1 w-24 flex items-center text-xs uppercase font-bold leading-snug bg-yellow-400 text-yellow-900 rounded-md">
                      Registrate
                    </button>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/login">
                    <button className="px-3 py-2 m-1 w-24 flex items-center justify-center text-xs uppercase font-bold leading-snug bg-yellow-400 text-yellow-900 rounded-md">
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
