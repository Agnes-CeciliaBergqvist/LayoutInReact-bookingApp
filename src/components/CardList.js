import React from "react";
import Card from "./Card"; 



//ska komma från databas eller en API 
const arrayOfTrip = [

    {key:"01", destination:"Revoli Playa", description:"In Puerto Rico, Gran Canaria, Spain" ,price:"Total price from: 4 832:-"}, 
    {key:"02", destination:"Argo", description:"In Rethymnon, Crete, Greece" ,price:"Total price from: 4 856:-"},
    {key:"03", destination: "Boutique by Doryssa Hotel", description: "In Pythagorion, Samos, Greece", price: "Total price from: 11 130:-"}, 
    {key:"04", destination: "Ilios Beach", description: "In Rethymnon, Crete, Greece", price: "Total price from: 5 586:-"}

]

function CardList() { 
    return (
        <div>
            
            {arrayOfTrip.map((e)=> {
               return(
               <Card key={e.key} destination={e.destination} description={e.description} price={e.price}/>
           )})}


        </div>
    )
}

export default CardList; 

//className="flex flex-row justify-center"