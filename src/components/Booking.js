import React from 'react'

function Booking({name, fromDate, toDate, mobile}) {
    return (
        <div>
            <li>name: {name}</li>
            <li>from: {fromDate}</li>
            <li>to: {toDate}</li>
            <li>mobile: {mobile}</li>
            
        </div>
    )
}

export default Booking
