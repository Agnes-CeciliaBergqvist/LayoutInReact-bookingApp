import React, { useState, useEffect } from "react";
import axios from "axios"
//import { Link } from "react-router-dom";
//mport {getBooking} from "../utils/booking"
import { useCart } from "./BookReducer";   




  // const bookedTrip = JSON.parse(getBooking())
  // console.log(bookedTrip[0])
  const CartTrip = ({ currentTrip, idx, destination, description, price }) => { 

    const [setTrips] = useState([]);

    useEffect(() => {
      const fetchTrips = () => {
          //setLoading(true)
          const response = axios.get("http://localhost:1337/trips")
          //console.log(response)
    
         // setTrips(response.data)
          //console.log(response.data)
          //console.log(setTrips)

      }

     fetchTrips()

  }, []);

  return (
    <>
    
    <div className={`flex flex-row flex-wrap justify-center`}>
      <div key={idx} className="bg-gray-200 rounded-xl p-6 m-4">
       <h2 className="text-2xl font-bold mb-2">{currentTrip}</h2>
      <div className="text-gray-800 leading-relaxed mb-6">{currentTrip}</div>
      <img className=" w-72 h-52" src="" alt="images from the database strapi"/>
      <div className="text-gray-800 leading-relaxed mb-6">Total price from: {currentTrip}:-</div>
      <button className="text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300">Remove</button>
      
    </div>
   </div>
   
   </>
  )
  
  }
  
  

  export default function BookTrip() {

    const currentTrips = useCart(); 
    //const dispatch = useDispatchCart();



  // const initialValues = {
  //   firstName: "",
  //   lastName: "",
  //   address: "",
  //   mobile: ""
  // }

  // const [formValues, setFormValues] = useState(initialValues);

  // function onSubmit(e) {
  //   e.preventDefault();
  //   // console.log(formValues)
   
  // }

  // function onChange(e) {
  //   setFormValues({
  //     ...formValues,
  //     [e.target.name]: e.target.value,
      
  //   });
    
  // }

  if (currentTrips.length === 0) { 
    return(
      <p>No trip added, please add a trip to book a trip</p>
    )
  }

  return (
    <div>
      {currentTrips.map((currentTrip, idx) => (
       <CartTrip key={idx} trip={currentTrip} index={idx}/>


      ))}


    </div>
    
      
      
      )
    }







{/* <div className="flex justify-center bg-white mt-8 mx-96 rounded">
 

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
 </div> */}