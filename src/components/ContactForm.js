import React from 'react'
import emailjs from 'emailjs-com'

export default function ContactForm () {
  function handleSubmit (e) {
    e.preventDefault()

    emailjs.sendForm('service_ns96466', 'template_o5axqxu', e.target, 'user_9gOxTrmVgSnv3d0uiUzRP')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
    e.target.reset()
  }

  return (
    <div className='h-screen'>
      <div className='min-h-screen bg-gray-100 p-0 sm:p-12'>
        <form className='mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl' onSubmit={handleSubmit}>

          <h1 className='text-2xl font-bold mb-8'>CONTACT US</h1>
          <div>
            <input
              type='text' name='name' placeholder='Name' required
              className='pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200'
            />
          </div>

          <div>
            <input
              type='email' name='email' placeholder='Email' required
              className='pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200'
            />
          </div>

          <div>
            <input
              type='subject' name='subject' placeholder='Subject' required
              className='pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200'
            />
          </div>

          <div>
            <textarea
              placeholder='Enter your message' name='message' required
              className='h-52 pt-3 pb-2 block w-full px-0 mt-2 bg-transparent border-2 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200'
            />
          </div>

          <button className='bg-yellow-200 border-5 rounded-md mt-4 p-1 text-gray-700' type='submit' value='Send message'>Send</button>
        </form>
      </div>
    </div>

  )
}
