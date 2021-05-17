import React, { useState } from "react";
import axios from "axios"

import { Link } from "react-router-dom";
import {getBooking} from "../utils/booking"
//import Card from "./Card"; 

function BookTrip() {
  const bookedTrip = JSON.parse(getBooking())
  console.log(bookedTrip[0])


  const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    mobile: ""
  }

  const [formValues, setFormValues] = useState(initialValues);

  function onSubmit(e) {
    e.preventDefault();
    // console.log(formValues)
   
  }

  function onChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
      
    });
    // console.log("firstName:", formValues.firstName, "lastName:", formValues.lastName)
  }




  const [trips, setTrips] = useState([]);
  const [loading, setLoading] =useState(true)



  React.useEffect(() => {
    const fetchTrips = async() => {
        setLoading(true)
          const response = await axios.get(`http://localhost:1337/trips/${bookedTrip[0]}`)
          //console.log(response)
          //window.location.reload(); Funkar ej, bara relodar hela tiden 
        console.log(response.data)
          setTrips(response.data)
          //console.log(response.data)
          //console.log(setTrips)

      }

     fetchTrips()
     setLoading(false)

  }, [bookedTrip]);


  return (
    //  <div>

    // //  {/* {book.lenght > 0 && (
    // //   <button>Clear booking</button>
    // // )}  */}
    // //  {book.map((currentTrip, idx)=> (
    // //             <div key={idx} className="bg-gray-200 rounded-xl p-6 m-4">

    //             <h2 className="text-2xl font-bold mb-2">{currentTrip.destination}</h2>
    //             <div className="text-gray-800 leading-relaxed mb-6">{currentTrip.description}</div>
    //             <img className=" w-72 h-52" src={"http://localhost:1337" + currentTrip.image.url} alt="images from the database strapi"/>
    //             <div className="text-gray-800 leading-relaxed mb-6">Total price from: {currentTrip.price}:-</div>
    //             </div>

    //   ))}
      
    <div className="flex justify-center bg-white mt-8 mx-96 rounded">
                                   {trips.length > 1 ? trips.map((currentTrip, idx) => { return(
                                   <div key={idx} className="bg-gray-200 rounded-xl p-6 m-4">
<h2 className="text-2xl font-bold mb-2">{currentTrip.destination}</h2>
<div className="text-gray-800 leading-relaxed mb-6">{currentTrip.description}</div>
<img className=" w-72 h-52" src={"http://localhost:1337" + currentTrip.image.url} alt="images from the database strapi"/>
<div className="text-gray-800 leading-relaxed mb-6">Total price from: {currentTrip.price}:-</div>
</div>)}) : 


(
  <div className="bg-gray-200 rounded-xl p-6 m-4">
<h2 className="text-2xl font-bold mb-2">{trips.destination}</h2>
<div className="text-gray-800 leading-relaxed mb-6">{trips.description}</div>
<img className=" w-72 h-52" src="" alt="images from the database strapi"/>
<div className="text-gray-800 leading-relaxed mb-6">Total price from: {trips.price}:-</div>
</div>)

}
     
      <form onSubmit={onSubmit}>
        <label className="text-l font-medium text-gray-800">
          Complete booking below:
        </label>
        <div className="mt-2 rounded-md">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Firstname:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              value={formValues.firstName}
              name="firstName"
              onChange={onChange}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              placeholder="Enter firstname"
            />
          </div>
          <div className="mt-2 rounded-md">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Lastname:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                value={formValues.lastName}
                name="lastName"
                onChange={onChange}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Enter lastname"
              />
            </div>
          </div>
          <div className="mt-2 rounded-md">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Address:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                value={formValues.address}
                name="address"
                onChange={onChange}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Enter address"
              />
            </div>
          </div>
          <div className="mt-2 rounded-md">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Mobile:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="number"
                value={formValues.mobile}
                name="mobile"
                onChange={onChange}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Enter mobile number"
              />
            </div>
          </div>
          <Link to="/trips">
          <button className="m-4 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
            Confirm
          </button>
          </Link>
        </div>
      </form>
    </div> 
    //</div>
     )
     
}


export default BookTrip;