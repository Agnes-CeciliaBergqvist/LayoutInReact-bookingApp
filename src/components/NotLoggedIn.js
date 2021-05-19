import React from 'react'
import {Link} from "react-router-dom"; 


function NotLoggedIn() {
    return (
        <div className="bg-white h-screen">

            <h1>You are not logged in, please login to se our trips</h1>
            <Link to="/login">Click med to login</Link>
            
        </div>
    )
}

export default NotLoggedIn
