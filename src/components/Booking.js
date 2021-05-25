import React from "react";

function Booking({ name, fromDate, toDate, mobile }) {
  return (
    <div className="">
      <div className="bg-gray-200 rounded-xl p-6 m-4 ">
        <h1 className="text-2xl">Booking</h1>
        <p>Complete name: {name}</p>
        <p>Departure: {fromDate}</p>
        <p>Home: {toDate}</p>
        <p>Mobile: {mobile}</p>
      </div>
    </div>
  );
}

export default Booking;
