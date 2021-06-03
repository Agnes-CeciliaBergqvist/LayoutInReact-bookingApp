import React from 'react'; 
import {Link} from "react-router-dom";

function Success() {
    return (
        <div>
            
            <h1>Thanks for your order!</h1>
            <p>
                Your trip is booked and soon you will take off!
                If you have any questions, please email
            <Link to="hej@hej.se">speedo@example.com</Link></p>.

       
        </div>
    )
}

export default Success; 
