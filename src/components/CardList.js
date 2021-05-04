import React, {useState, useEffect} from "react";
import axios from "axios"; 
import Card from "./Card"; 


function CardList() { 
    
        //useState for products 
        const [trips, setTrips] = useState([]);
        
        useEffect(() => {
            const fetchTrips = async() => {
                const response = await axios.get("http://localhost:1337/trips")
                console.log(response)

                setTrips(response.data)
            }

           fetchTrips()

        }, []);

       return (

        // useEffect för att kunna hämta data från databasen
        <div className="flex flex-row flex-wrap justify-center">
            
            {trips.map((trip)=> {
               return(
               <Card key={trip.id} tripDestination={trip.destination} tripDescription={trip.description} tripPrice={trip.price} tripImage={trip.image}/>
               
           )})}
           

        </div>
    )
}

export default CardList; 

//className="flex flex-row justify-center"<MyTrips key={e.key}/>