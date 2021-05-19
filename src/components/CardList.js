import React, {useState, useEffect} from "react";
import axios from "axios"; 
import Pagination from "./Pagination";
import Card from "./Card";  

 



export default function CardList() {

   
        //Allows us to fire an dispatch to our reducer
        //const dispatch = useDispatchCart();
         
    
        // const addToCart = (currentTrip) => { 
        //   console.log(currentTrip)
        //   dispatch({ type: "ADD", currentTrip})
        // }  
        //useState for products 
        const [trips, setTrips] = useState([]);
        const [loading] = useState(false); 
        const [currentPage, setCurrentPage] = useState(1); 
        const [tripsPerPage] = useState(3); 

    
        useEffect(() => {
            const fetchTrips = async() => {
                //setLoading(true)
                const response = await axios.get("http://localhost:1337/trips")
                //console.log(response)
                

                setTrips(response.data)
                //console.log(response.data)
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
              
              {trip.map((trip)=> {
                 return(
                 <Card key={trip.id} tripDestination={trip.destination} tripDescription={trip.description} tripPrice={trip.price} tripImage={trip.image} loading={loading}/> 
                   
             )})}
             <Pagination tripsPerPage={tripsPerPage} totalTrips={trips.length} paginate={paginate}/>
  
          </div>
      )
  }
  

