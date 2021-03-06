import React from 'react'

function Pagination ({ tripsPerPage, totalTrips, paginate }) {
  // tom array i början tills forloopen
  const pageNumbers = []

  // om index är mindre eller lika med den totala posten per sida men rundar av det uppåt med ceil.
  for (let i = 1; i <= Math.ceil(totalTrips / tripsPerPage); i++) {
    pageNumbers.push(i) // Här pushar vi arrayen in i indesxnumret
  }

  return (
    <div className='bg-white py-3 mt-40 relative bottom-0 w-full border-t border-gray-200 sm:px-6'>
      <div className='flex-1 flex justify-between' />
      <div className=' sm:flex-1 sm:flex sm:items-center sm:justify-between'>
        <div>
          <nav
            className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
            aria-label='Pagination'
          >
            <div className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
              <svg
                className='h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <ul className='flex'>
              {pageNumbers.map((number) => (
                <li key={number}>
                  <div
                    onClick={() => paginate(number)}
                    className='relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-300'
                  >
                    {number}
                  </div>
                </li>
              ))}
            </ul>

            <div className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
              <span className='sr-only' />

              <svg
                className='h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination
