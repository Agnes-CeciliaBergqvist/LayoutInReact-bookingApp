import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Booking from "./Booking"; 

function MyTrips() { 

    const [tripData, setTripData] = useState([])
    const [userId, setUserId] = useState(localStorage.getItem("userId"))
    const [token, setToken] = useState(localStorage.getItem("jwt"))


    useEffect(() => { 

        console.log(userId)

        //"http://localhost:1337/user-bookings?user_permissions_user.id=14"

        const fetchData = async () => {
            

           const response = await axios.get(`http://localhost:1337/user-bookings?users_permissions_user.id=${userId}`,
           { 
               headers: {
                   Authorization: `Bearer ${token}`, 
               }
           })

            setTripData(response.data)
        }
        console.log(tripData)


        fetchData(); 


    }, [])






    return(
    
       <div>
           {tripData.map((booking) => {
               return(
                <Booking key={booking.id}
                    name={booking.name} 
                    fromDate={booking.fromDate}
                    toDate={booking.toDate}
                    mobile={booking.mobile}
                    
                 />
               )


           } ) }
           </div>
           )
            }

export default MyTrips; 