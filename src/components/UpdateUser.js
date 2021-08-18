import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function UpdateUser () {
  const initialValues = {
    username: '',
    email: ''
  }

  const [formValues, setFormValues] = useState(initialValues)
  const [success, setSuccess] = useState(false)
  const userToUpdate = Number(localStorage.getItem('updateUserId'))

  useEffect(() => {
    axios.get(`https://speedo-booking.herokuapp.com/users/${userToUpdate}`)
      .then(res => {
        console.log('response', res)
        setFormValues({
          username: res.data.username,
          email: res.data.email
        })
      })
  }, [])

  function handleOnChange (e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  function handleOnSubmit (e) {
    e.preventDefault()

    axios.put(`https://speedo-booking.herokuapp.com/users/${userToUpdate}`, formValues
    )
      .then(() => {
        setFormValues(initialValues)
        setSuccess(true)
      })
  }

  return (
    <div className='min-h-screen bg-gray-100 p-0 sm:p-12'>
      <div className='mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl'>
        <h1 className='text-2xl font-bold mb-8'>Change user</h1>

        <form onSubmit={handleOnSubmit}>
          <div className='relative z-0 w-full mb-5'>
            <input
              value={formValues.username}
              name='username'
              type='text'
              onChange={handleOnChange}
              className='pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200'
              placeholder='New username'
            />
          </div>

          <div className='relative z-0 w-full mb-5'>
            <input
              value={formValues.email}
              name='email'
              type='email'
              onChange={handleOnChange}
              className='pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200'
              placeholder='New email'
            />
          </div>

          <button className='w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none'>
            Update
          </button>
          {success && (
            <p className='text-green-400 underline py-3 rounded-md mt-1'>
              User updated
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
