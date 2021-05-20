import React, {useState, useEffect} from "react";
import axios from "axios"; 
import Pagination from "./Pagination";
import Card from "./Card";  

 



export default function CardList() {
 
   
         
        //useState for trips 
        const [trips, setTrips] = useState([]);
        const [loading, setLoading] = useState(false); 
        const [currentPage, setCurrentPage] = useState(1); //Vi är på sida ett först 
        const [tripsPerPage] = useState(3); // Hur många kort vill jag ha på varje sida

    
        useEffect(() => {
            const fetchTrips = async() => {
                setLoading(true)
                const response = await axios.get("http://localhost:1337/trips")
                //console.log(response)
                

                setTrips(response.data)
                setLoading(false)
                console.log(response.data)
                //console.log(setTrips)

            }

           fetchTrips()

        }, []); 

        //Get current post 
        const indexOfLastTrip = currentPage * tripsPerPage; 
        const indexOfFirstTrip = indexOfLastTrip - tripsPerPage;
        const trip = trips.slice(indexOfFirstTrip, indexOfLastTrip);  

        //Change page 
        const paginate = (pageNumber) => setCurrentPage(pageNumber);  


        return (

          // useEffect för att kunna hämta data från databasen
          <div className="flex flex-row flex-wrap justify-center">
              {/* hade trips här innan men då funkar ej pagination */}
              {trip.map((trip)=> {
                 return(
                 <Card trip={trip} key={trip.id} tripDestination={trip.destination} tripDescription={trip.description} tripPrice={trip.price} tripImage={trip.image} loading={loading}/> 
                   
             )})}
             <Pagination tripsPerPage={tripsPerPage} totalTrips={trips.length} paginate={paginate}/>
  
          </div>
      )
  }
  

