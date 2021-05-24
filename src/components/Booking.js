import React from 'react'

function Booking({name, fromDate, toDate, mobile, trip}) {
    return (
        <div className="">
            <div className="bg-gray-200 rounded-xl p-6 m-4 ">

            <h1 className="text-2xl">Destination: {trip}</h1>    
            <li>Name: {name}</li>
            <li>Departure: {fromDate}</li>
            <li>Home: {toDate}</li>
            <li>Mobile: {mobile}</li>
            
            </div>
            
        </div>
    )
}

export default Booking
