import React from 'react'
import { useDispatchCart } from './BookReducer'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Card ({
  trip,
  tripId,
  tripDestination,
  tripDescription,
  tripPrice,
  tripImage
}) {
  const dispatch = useDispatchCart()
  const admin = localStorage.getItem('role')

  const BookTrip = (item) => {
    console.log(item)
    dispatch({ type: 'ADD', item })
    localStorage.setItem('productsInCart', `${tripId}`)
  }

  const handleDelete = async () => {
    await axios.delete(`https://speedo-booking.herokuapp.com/trips/${tripId}`)
  }

  const handleUpdate = (event) => {
    localStorage.setItem('updateTripId', event.target.name)
  }

  return tripImage && (
    <>
      {admin === 'admin' ? (
        <div className='bg-gray-200 rounded-xl p-6 m-4 h-2/4'>
          <h2 className='text-2xl font-bold mb-2'>{tripDestination}</h2>
          <div className='text-gray-800 leading-relaxed mb-6'>
            {tripDescription}
          </div>
          <img
            className=' w-72 h-52'
            src={'https://speedo-booking.herokuapp.com' + tripImage.url}
            alt='images from the database strapi'
          />
          <div className='text-gray-800 leading-relaxed mb-6'>
            Total price from: {tripPrice}:-
          </div>
          <button
            onClick={() => BookTrip(trip)}
            className='text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300'
          >
            Book
          </button>
          <button
            onClick={handleDelete} className=' m-1 text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300'
          >
            Delete
          </button>
          <Link to='./updatecard'>
            <button
              name={tripId} onClick={handleUpdate} className=' m-1 text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300'
            >
              Update
            </button>
          </Link>

        </div>

      ) : (

        <div className='bg-gray-200 rounded-xl p-6 m-4 h-2/4'>
          <h2 className='text-2xl font-bold mb-2'>{tripDestination}</h2>
          <div className='text-gray-800 leading-relaxed mb-6'>
            {tripDescription}
          </div>
          <img
            className=' w-72 h-52'
            src={'https://speedo-booking.herokuapp.com' + tripImage.url}
            alt='images from the database strapi'
          />
          <div className='text-gray-800 leading-relaxed mb-6'>
            Total price from: {tripPrice}:-
          </div>
          <button
            onClick={() => BookTrip(trip)}
            className='text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300'
          >
            Book
          </button>
        </div>

      )}

    </>
  )
}

export default Card
