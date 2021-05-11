import React, {useState, useEffect} from "react";
import axios from "axios"; 
import Card from "./Card"; 
import Pagination from "./Pagination"; 



function CardList() { 


    
    
        //useState for products 
        const [trips, setTrips] = useState([]);
        const [loading, setLoading] = useState(false); 
        const [currentPage, setCurrentPage] = useState(1); 
        const [tripsPerPage] = useState(2); 

    
        useEffect(() => {
            const fetchTrips = async() => {
                setLoading(true)
                const response = await axios.get("http://localhost:1337/trips")
                console.log(response)
                //window.location.reload(); Funkar ej, bara relodar hela tiden 

                setTrips(response.data)
                console.log(response.data)
                console.log(setTrips)

            }

           fetchTrips()

        }, []);

        //Get current post 
        const indexOfLastTrip = currentPage * tripsPerPage; 
        const indexOfFirstTrip = indexOfLastTrip - tripsPerPage;
        const currentTrip = trips.slice(indexOfFirstTrip, indexOfLastTrip);  

        //Change page 
        const paginate = (pageNumber) => setCurrentPage(pageNumber);  


       return (

        // useEffect för att kunna hämta data från databasen
        <div className="flex flex-row flex-wrap justify-center">
            
            {currentTrip.map((currentTrip)=> {
               return(
               <Card key={currentTrip.id} tripDestination={currentTrip.destination} tripDescription={currentTrip.description} tripPrice={currentTrip.price} tripImage={currentTrip.image} loading={loading}/> 
                
           )})}
           <Pagination tripsPerPage={tripsPerPage} totalTrips={trips.length} paginate={paginate}/>

        </div>
        
    )
    console.log(currentTrip.id)
}

export default CardList; 

