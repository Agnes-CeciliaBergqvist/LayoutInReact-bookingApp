import axios from 'axios';
import React, {useState, useEffect} from 'react';
import OneTrip from "./OneTrip"; 

function MyTrips() { 

    const [tripData, setTripData] = useState([])
    const [userId, setUserId] = useState(localStorage.getItem("userId"))
    const [token, setToken] = useState(localStorage.getItem("jwt"))


    useEffect(() => { 

        console.log(userId)

        //"http://localhost:1337/user-bookings?user_permissions_user.id=14"

        const fetchData = async () => {
            

           const response =  axios.get(`http://localhost:1337/user-bookings?user_permissions_user.id=${userId}`,
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
           {tripData.map((trip) => {
               return(
                <OneTrip key={trip.id}
                 name={trip.name} 
                 fromDate={trip.fromDate}
                  toDate={trip.toDate} />
               )


           } ) }
           </div>
           )
            }

export default MyTrips; 