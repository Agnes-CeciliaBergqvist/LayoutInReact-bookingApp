import React from 'react'
import { Link } from 'react-router-dom'

function NotLoggedIn () {
  return (
    <div className='bg-white h-screen relative flex flex-wrap items-center flex-col '>
      <svg
        className='mt-24'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 40 40'
        width='140px'
        height='160px'
      >
        <path
          fill='#f78f8f'
          stroke='#c74343'
          strokmiterlimit='10'
          d='M20,1C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19	S30.493,1,20,1z M6,20c0-7.732,6.268-14,14-14c2.963,0,5.706,0.926,7.968,2.496L8.496,27.968C6.926,25.706,6,22.963,6,20z M20,34	c-2.963,0-5.706-0.926-7.968-2.496l19.472-19.472C33.074,14.294,34,17.037,34,20C34,27.732,27.732,34,20,34z'
        />
      </svg>

      <p className='m-5 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
        You need to be logged in to see our trips!
      </p>

      <Link className='hover:bg-yellow-50' to='/login'>
        Click me to login
      </Link>
    </div>
  )
}

export default NotLoggedIn
