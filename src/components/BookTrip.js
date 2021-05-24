import React, { useState, useEffect } from "react";
import axios from "axios"
import { useCart, useDispatchCart } from "./BookReducer";  
import Modal from "react-modal";  




  // const bookedTrip = JSON.parse(getBooking())
  // console.log(bookedTrip[0])
  const CartTrip = ({ trip, idx, handleRemove }) => { 

    return (
      <>
    
      <div className="bg-gray-200 rounded-xl p-6 m-4">
        <h2 className="text-2xl font-bold mb-2">{trip.destination}</h2>
        <div key={idx}>
        <div className="text-gray-800 leading-relaxed mb-6">{trip.description}</div>
        <img className=" w-72 h-52" src={"http://localhost:1337" + trip.image.url}  alt="images from the database strapi"/>
        <div className="text-gray-800 leading-relaxed mb-6">Total price from: {trip.price}:-</div>
        <button onClick={() => handleRemove(idx)} className="text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300">Remove</button>
      
      </div>
    </div>
   
   </>
  ); 
  
  }; 
  
  

  export default function Store(tripId) {

    const customStyles = {
        content: {
            background: "#391f56",
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    const modalInitialValues = { 
      name: "", 
      mobile: "", 
      fromDate: "", 
      toDate: ""


    }
    //State
    const [modalOpen, setOpen] = useState(false) 
    const [modalFormValues, setModalFormValues] = useState(modalInitialValues)
    const [username, setUsername] = useState(localStorage.getItem("username"))
    const [userId, setUserId] = useState(localStorage.getItem("userId")) 
    const [token, setToken] = useState(localStorage.getItem("jwt"))

    useEffect(() => {
      const userId = localStorage.getItem("userId")
      console.log(userId)
      //Uppdaterar state 
      setUserId(userId)

    }, []);

    function openModal() { 
        // if user is logged in, setIsOpen to true 
        // if not use another state for instance showLogin(true)
        setOpen(true)

    }

    function closeModal() { 
      //Same here but false because the modal will close 
      setOpen(false)
    }


    function onHandleChange(e) { 

      setModalFormValues({...modalFormValues, [e.target.name]:e.target.value})
    }




  

    async function onHandleSubmit(e) {

        e.preventDefault();
        //Här är request till user_bookings 
        try {
            const response = await axios.post("http://localhost:1337/user-bookings", 
          {
            name: modalFormValues.name,
            mobile:Number(modalFormValues.mobile),
            fromDate: modalFormValues.fromDate,
            toDate: modalFormValues.toDate,
            users_permissions_user:userId,
            tripId: tripId
          },  
          { 
                headers: {
                    Authorization: `Bearer ${token}`, 
                
            } }
            ) 
        console.log("added to userCart",response)
        //console.log("added to userCart",tripId)

        } 
        catch(error) {
            console.log(error.data)
        }

    }



    const items = useCart();
    const dispatch = useDispatchCart();
    //const totalPrice = items.reduce((total, b) => total + b.price, 0);

    const handleRemove = (idx) => {
        dispatch({ type: "REMOVE", idx });
    };

    if (items.length === 0) {
        return (
            <main className="h-screen">
                <h1 className="text-2xl font-black mt-40">Cart is empty, go and book a trip!</h1>
            </main>
        );
    }
    return (
      <div className="h-screen">
        <div className="flex flex-row flex-wrap justify-center pt-14">
          {items.map((item, idx) => (
            <CartTrip
              handleRemove={handleRemove}
              key={idx}
              trip={item}
              index={idx}
            />
          ))}
          <button
            className="h-2/4 px-6 py-3 mt-48 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
            onClick={openModal}
          >
            {" "}
            buy trip
          </button>

          <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
            contentLabel="Add to cart Modal"
          >
            <button className="bg-pink-500 rounded-full h-10 w-10 text-white font-bold" onClick={closeModal}>X</button>
            <div className="text-white font-bold mt-7"> Enter your travel details so we can book your trip.</div>

            <form className="mb-12 flex flex-row" onSubmit={onHandleSubmit}>
              <div className="bg-blue-500 p-2 w-full m-2 mt-8 rounded ">
              <input
                className="input-border mx-1 h-10 rounded"
                type="text"
                name="name"
                placeholder="Complete name"
                required
                value={modalFormValues.name}
                onChange={onHandleChange}
              />

              <span>From?</span>
              <input
                className="input-border mx-1 h-10 rounded"
                type="date"
                name="fromDate"
                placeholder="Travel date"
                required
                value={modalFormValues.fromDate}
                onChange={onHandleChange}
              />

              <span>To?</span>
              <input
                className="input-border mx-1 h-10 rounded"
                type="date"
                name="toDate"
                placeholder="Home date"
                required
                value={modalFormValues.toDate}
                onChange={onHandleChange}
              />

              <input
                className="input-border mx-1 h-10 rounded"
                type="number"
                name="mobile"
                placeholder="Mobile number"
                required
                value={modalFormValues.mobile}
                onChange={onHandleChange}
              />
              </div>

              <button className="btn text-white font-bold bg-gradient-to-r from-pink-600 to-purple-500 rounded-full h-24 w-24 flex items-center justify-center p-5 " type="submit">
                Confirm
              </button>
            </form>
          </Modal>
        </div>
      </div>
    );
}