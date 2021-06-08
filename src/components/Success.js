import React from 'react'; 


function Success() {
    return (
        <div className="bg-white h-screen">
            <h1 className="font-bold text-3xl">Thanks for your order!</h1>
            <p className="text-1xl">
                Your trip is booked and soon you will take off!
                If you have any questions, please contact: 
            <a className="underline" href="test@test.se">speedo@example.com</a></p>
            <p className="font-cursive">Bon voyage!</p>
        </div>
    )
}

export default Success; 
