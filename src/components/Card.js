import React, {useState} from "react";
import Axios from "axios";
import {useDispatchCart} from "./BookReducer";




function Card({ trip, tripDestination, tripDescription, tripPrice, tripImage}) {

    
    const dispatch = useDispatchCart(); 

   

    const BookTrip = (item) => {
        console.log("item")
        dispatch ({type: "ADD", item}); 
  }; 
  


  return (
  
    <div className="bg-gray-200 rounded-xl p-6 m-4">
      <h2 className="text-2xl font-bold mb-2">{tripDestination}</h2>
      <div className="text-gray-800 leading-relaxed mb-6">{tripDescription}</div>
      <img className=" w-72 h-52" src={"http://localhost:1337" + tripImage.url} alt="images from the database strapi"/>
      <div className="text-gray-800 leading-relaxed mb-6">Total price from: {tripPrice}:-</div>
      <button onClick={() => BookTrip(trip)} className="text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300">
        Book
      </button> 
    </div>
    
  );
  
}

export default Card;

