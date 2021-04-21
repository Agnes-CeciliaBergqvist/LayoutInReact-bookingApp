import React from "react";
import Card from "./Card"; 



//ska komma från databas eller en API 
const arrayOfTrip = [

    {destination:"Revoli Playa", description:"In Puerto Rico, Gran Canaria, Spain" ,price:"Total price from: 4 832:-"}, 
    {destination:"Argo", description:"In Rethymnon, Crete, Greece" ,price:"Total price from: 4 856:-"}

]

function CardList() { 
    return (
        <div >
            
            {arrayOfTrip.map((e)=> {
               return(
               <Card destination={e.destination} description={e.description} price={e.price}/>
           )})}


        </div>
    )
}

export default CardList; 

//className="flex flex-row justify-center"