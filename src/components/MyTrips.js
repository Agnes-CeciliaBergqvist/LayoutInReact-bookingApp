import axios from 'axios';
import React, {useState, useEffect} from 'react';
import OneTrip from "./OneTrip"; 

function MyTrips() { 

    const [bookings, setBookings] = useState([])
    const [userId, setUserId] = useState(localStorage.getItem("userId"))
    const [token, setToken] = useState(localStorage.getItem("jwt"))


    useEffect(() => { 

        console.log(userId)

        //"http://localhost:1337/user-bookings?user_permissions_user.id=14"

        const fetchData = async () => {

           const res =  axios.get(`http://localhost:1337/user-bookings?user_permissions_user.id=${userId}`,
           { 
               headers: {
                   Authorization: `Bearer ${token}`, 
               }
           })

            setBookings(res.data)
        }
        console.log(bookings)


        fetchData(); 


    }, [])






    return(
       <div>
           {bookings.map((booking) => {
               return(
                <OneTrip key={booking.id} name={booking.name} fromDate={booking.fromDate} toDate={booking.toDate} />
               )


           } ) }
           </div>
           )
            }

export default MyTrips; 