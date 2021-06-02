import React from "react";


function Booking({ name, fromDate, toDate, mobile , price, idx, handleRemove}) {
  
 

  return (
    <div className="">
      <div className="bg-gray-200 rounded-xl p-6 m-4 ">
        <h1 className="text-2xl">Booking</h1>
        <p>Complete name: {name}</p>
        <p>Departure: {fromDate}</p>
        <p>Home: {toDate}</p>
        <p>Mobile: {mobile}</p>
        <p>Total price: {price}</p>
        <button onClick={() => handleRemove(idx)} className="m-h-12 text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Booking;
