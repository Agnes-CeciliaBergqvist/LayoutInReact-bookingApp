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
        <img className=" w-72 h-52" src={"http://localhost:1337" + trip.url}  alt="images from the database strapi"/>
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
            background: "yellow",
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
    const[modalFormValues, setModalFormValues] = useState(modalInitialValues)
    const [userId, setUserId] = useState(null) 

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

        try {
            const response = await axios.post("http://localhost:1337/user-bookings", {
            name: modalFormValues.name,
            mobile:Number(modalFormValues.mobile),
            fromDate: modalFormValues.fromDate,
            toDate: modalFormValues.toDate
        }) 
        console.log("added to userCart",response)
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
            <main>
                <p>Cart is empty</p>
            </main>
        );
    }
    return (
      <>

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
                className="h-2/4 px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
                onClick={openModal}> buy trip</button>
          

            <Modal
                    isOpen={modalOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="Add to cart Modal"
                >

                    <button onClick={closeModal}>(X)</button>
                    <div> Enter your travel details so we can book your trip.</div>
                    <form className="my-12" onSubmit={onHandleSubmit}>

                        <input 
                        className="input-border mx-1" 
                        type="text" 
                        name="name" 
                        placeholder="your name" required
                        value={modalFormValues.name} 
                        onChange={onHandleChange} />

                        <span>from</span>
                        <input 
                        className="input-border mx-1" 
                        type="date" 
                        name="fromDate" 
                        placeholder="your travel date" required
                        value={modalFormValues.fromDate} 
                        onChange={onHandleChange} />

                        <span>to</span>
                        <input 
                        className="input-border mx-1" 
                        type="date" 
                        name="toDate" 
                        placeholder="your home date" required
                        value={modalFormValues.toDate} 
                        onChange={onHandleChange} />

                        <input 
                        className="input-border mx-1" 
                        type="number" 
                        name="mobile" 
                        placeholder="your mobile number" required
                        value={modalFormValues.mobile} 
                        onChange={onHandleChange} />

                        <button 
                        className="btn bg-pink-500" 
                        type="submit">Confirm trip.
                        </button>
                    </form>
                </Modal>


        

          

        </div>
        </>
    );
}