import React, {useEffect, useState} from 'react'; 
import axios from "axios"; 
import login from './images/login.png';


function Registration() {

  const initialValue = { 
    username: " ", 
    email: " ", 
    password: ""
  }

  const [registerValues, setRegisterValues] = useState(initialValue)
  const [ username, setUsername] = useState(""); 
  const [loggedIn, setLoggedIn] = useState(false); 
  const [error, setError] = useState(); 

  //Här registerar vi 
  function handleOnChange(e) { 
    setRegisterValues({
      ...registerValues, 
      [e.target.name]: e.target.value}); 


  }
  //Här skickar vi datan till strapi
  function handleOnSubmit(e) { 

    e.preventDefault();
    axios.post('http://localhost:1337/auth/local/register', {
                                  username: registerValues.username,
                                  email: registerValues.email,
                                  password: registerValues.password,
                                })
                                .then( (e)=> { if(e.data.user) setLoggedIn(true)})
                                .catch((err)=> {setError(err.response.data.message[0].messages[0].message)})



  //console.log(response)
// vi ska skicka user registration data till strapi /enpoints 
} 



  

    // useEffect(() => { 

    //     const registrateUser = async() => { 

    //         axios.post('http://localhost:1337/auth/local/register', {
    //             username: registerValues.username,  
    //             email: registerValues.email, 
    //             password: registerValues.password,
    //         })
    //         console.log(registrateUser)
    
    //     }
    //     registrateUser(); 
    
    
    
    // },[])

    return (

      <>
      {loggedIn ? (<div>du kan logga in </div>) :  (


<div className="min-h-screen flex items-center justify-center bg-black-50 py-12 px-4 sm:px-6 lg:px-8">
  
  <div className="max-w-md w-full space-y-8">
    <div>
    
      <img className="mx-auto h-24 w-auto rounded-full" src={login} alt="login-avatar"/>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register below</h2> 
    </div>
    <form className="mt-8 space-y-6" action="#" x-data="{password: '',password_confirm: ''}" onSubmit={handleOnSubmit}>
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
      <div>
          <label for="username" className="sr-only">Username</label>
          <input id="username" name="username" value={registerValues.username} onChange={handleOnChange} autocomplete="username" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username"/>
        </div>
        <div>
          <label for="email-address" className="sr-only">Email</label>
          <input id="email-address" name="email" type="email" value={registerValues.email} onChange={handleOnChange} autocomplete="email-address" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email"/>
        </div>
        <div>
          <label for="password" className="sr-only">Password</label>
          <input id="password" name="password" type="password" value={registerValues.password} onChange={handleOnChange} autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
          <label for="remember_me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

       
      </div>

      <div>
        <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Registrate
        </button>
        <div className="text-red-900 font-extrabold m-6">{error}</div>
      </div>
      </form>
    
  </div>
</div> 
      )} 

</> 

  )   
}

export default Registration; 
