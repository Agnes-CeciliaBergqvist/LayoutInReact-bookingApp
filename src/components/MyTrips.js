import axios from "axios";
import React, { useState, useEffect } from "react";
import Booking from "./Booking";
import { loadStripe } from "@stripe/stripe-js";
//import ReactDOM from "react-dom"


const stripePromise = loadStripe('pk_test_51Ix6LSGaMeFrhWKCWoo8WGQUmzbv7fFkSjdEP5QbQNnivUNs9DAwYDHndO8ZXpaeBVi51putaDFqn58cftUBcs9c00CreRbRqY');


function MyTrips() {

  //code for handeling the onclick function for checkout 
  const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await axios.post("https://heuristic-archimedes-2e4bb9.netlify.app/create-checkout-session")
    //fetch('/create-checkout-session', { method: 'POST' });

    console.log(response)
    const session = response.data.id

    console.log(session)

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };












  const [tripData, setTripData] = useState([]);
  const [userId] = useState(localStorage.getItem("userId"));
  const [token] = useState(localStorage.getItem("jwt"));

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://speedo-booking.herokuapp.com/user-bookings?users_permissions_user.id=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTripData(response.data);
    };
    console.log(tripData);

    fetchData();
  }, []);

  if (tripData.length === 0) {
    return (
      <div className="h-screen">
        <h1 className="text-2xl font-black mt-40">
          You dont have any bookings yet{" "}
        </h1>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <h1 className="text-4xl font-bold">Bookings</h1>
      <p className="text-2xl">Below you see your booked trips</p>
      <div className="flex flex-row flex-wrap justify-center ">
        {tripData.map((booking) => {
          return (
            <>
            <Booking
              key={booking.id}
              name={booking.name}
              fromDate={booking.fromDate}
              toDate={booking.toDate}
              mobile={booking.mobile}
              destination={booking.trip}
              price={booking.price}
            />
            <button role="link"
            onClick={handleClick} className="text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300">
              checkout
            </button>
          </>
          );

        })}
      </div>
    </div>
  );
}

export default MyTrips;
