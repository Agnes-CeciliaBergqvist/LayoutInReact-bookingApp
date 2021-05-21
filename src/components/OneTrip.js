import React from 'react'

function OneTrip({name, fromDate, toDate}) {
    return (
        <div>
            <li>name: {name}</li>
            <li>from: {fromDate}</li>
            <li>to: {toDate}</li>
            
        </div>
    )
}

export default OneTrip
