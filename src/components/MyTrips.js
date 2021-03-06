import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Booking from './Booking'

function MyTrips () {
  const [tripData, setTripData] = useState([])
  const [userId] = useState(localStorage.getItem('userId'))
  const [token] = useState(localStorage.getItem('jwt'))
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const response = await axios.get(
        `https://speedo-booking.herokuapp.com/user-bookings?users_permissions_user.id=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      setTripData(response.data)
    }

    fetchData()
    setLoading(false)
  }, [tripData])

  if (tripData.length === 0) {
    return (
      <div className='h-screen'>
        <h1 className='text-2xl font-black mt-40'>
          You dont have any bookings yet{' '}
        </h1>
      </div>
    )
  }

  return (

    <div className='h-screen'>
      <h1 className='text-4xl font-bold'>Bookings</h1>
      <p className='text-2xl'>Below you see your booked trips</p>
      <div className='flex flex-row flex-wrap justify-center '>
        {!loading && tripData && tripData.map((booking) => {
          return (

            <Booking
              id={booking.id}
              key={booking.id}
              name={booking.name}
              fromDate={booking.fromDate}
              toDate={booking.toDate}
              mobile={booking.mobile}
              destination={booking.trip}
              price={booking.price}
            />

          )
        })}
      </div>
    </div>
  )
}

export default MyTrips
