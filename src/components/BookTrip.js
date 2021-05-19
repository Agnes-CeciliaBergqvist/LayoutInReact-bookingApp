import React, { useState } from "react";
import axios from "axios"
import { useCart, useDispatchCart } from "./BookReducer";   




  // const bookedTrip = JSON.parse(getBooking())
  // console.log(bookedTrip[0])
  const CartTrip = ({ trip, idx, handleRemove }) => { 

    return (
      <>
    
      <div className="flex flex-row flex-wrap justify-center">
        <div key={idx} className="bg-gray-200 rounded-xl p-6 m-4">
        <h2 className="text-2xl font-bold mb-2">{trip.destination}</h2>
        <div className="text-gray-800 leading-relaxed mb-6">{trip.description}</div>
        <img className=" w-72 h-52" src={"http://localhost:1337" + trip.url}  alt="images from the database strapi"/>
        <div className="text-gray-800 leading-relaxed mb-6">Total price from: {trip.price}:-</div>
        <button onClick={() => handleRemove(idx)} className="text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300">Remove</button>
      
      </div>
    </div>
   
   </>
  ); 
  
  }; 
  
  

  export default function Store() {

    // const customStyles = {
    //     content: {
    //         // height: '300px',
    //         top: '50%',
    //         left: '50%',
    //         right: 'auto',
    //         bottom: 'auto',
    //         marginRight: '-50%',
    //         transform: 'translate(-50%, -50%)'
    //     }
    // };


  

    // async function onHandleSubmit(e) {
    //     e.preventDefault();

    //     try {
    //         const response = await axios.post("http://localhost:1337/user-carts", {
    //         name: modalFormValues.name,
    //         address: modalFormValues.address,
    //         mobile:Number(modalFormValues.mobile)
    //     }) 
    //     console.log("added to userCart",response)
    //     } 
    //     catch(error) {
    //         console.log(error.data)
    //     }

    // }



    const items = useCart();
    const dispatch = useDispatchCart();
    //const totalPrice = items.reduce((total, b) => total + b.price, 0);

    const handleRemove = (idx) => {
        dispatch({ type: "REMOVE", idx });
    };

    if (items.length === 0) {
        return (
            <main>
                <p>Cart is empty</p>
            </main>
        );
    }
    return (
      <>

        <div className="min-h-screen flex pt-14">
            {items.map((item, idx) => (
                <CartTrip
                    handleRemove={handleRemove}
                    key={idx}
                    trip={item}
                    index={idx}
                />
            ))}

          

        </div>
        </>
    );
}