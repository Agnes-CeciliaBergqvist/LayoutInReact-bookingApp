import React, {useState, useEffect} from "react";
import axios from "axios"; 
import Card from "./Card"; 





//ska komma från databas eller en API 
// const arrayOfTrip = [

//     {key:"01", destination:"Revoli Playa", description:"In Puerto Rico, Gran Canaria, Spain" ,price:"Total price from: 4 832:-"}, 
//     {key:"02", destination:"Argo", description:"In Rethymnon, Crete, Greece" ,price:"Total price from: 4 856:-"},
//     {key:"03", destination: "Boutique Hotel", description: "Boutique Hotel", price: "Total price from: 11 130:-"}, 
//     {key:"04", destination: "Ilios Beach", description: "In Rethymnon, Crete, Greece", price: "Total price from: 5 586:-"},
//     {key:"05", destination: "Prego Beach", description: "The Haven, Khao Lak, Thailand", price: "Total price from: 16 262:-"},
//     {key:"06", destination: "Erato", description: "In Platianias, Crete, Greece", price: "Total price from: 7 938:-"}

// ]

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