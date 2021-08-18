import React from 'react'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_51Ix6LSGaMeFrhWKCWoo8WGQUmzbv7fFkSjdEP5QbQNnivUNs9DAwYDHndO8ZXpaeBVi51putaDFqn58cftUBcs9c00CreRbRqY')

function Booking ({ id, name, fromDate, toDate, mobile, price }) {
  // Code for handeling the onclick function for checkout
  const handleClick = async (event) => {
    event.preventDefault()
    // Get Stripe.js instance
    const stripe = await stripePromise

    // Call your backend to create the Checkout Session
    const response = await axios.post('https://speedo-stripe.herokuapp.com/create-checkout-session', { name: name })

    console.log(response)
    const session = response.data.id

    console.log(session)

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session
    })

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  }

  const handleRemove = async (event) => {
    const id = Number(event.target.name)

    await axios.delete(`https://speedo-booking.herokuapp.com/user-bookings/${id}`)
  }

  return (
    <div className=''>
      <div className='bg-gray-200 rounded-xl p-6 m-4 '>
        <h1 className='text-2xl'>Booking</h1>
        <p>Complete name: {name}</p>
        <p>Departure: {fromDate}</p>
        <p>Home: {toDate}</p>
        <p>Mobile: {mobile}</p>
        <p>Total price: {price}</p>
        <button onClick={handleRemove} name={id} className='m-1.5 text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300'>
          Cancel
        </button>
        <button
          role='link'
          onClick={handleClick} className='m-1.5 text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300'
        >
          checkout
        </button>
      </div>
    </div>
  )
}

export default Booking
