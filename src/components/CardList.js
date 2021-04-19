import React from "react";
import Card from "./Card"; 


//ska komma från databas eller en API 
const arrayOfProducts = [

    {productName:"Adidas", price:"100"}, 
    {productName:"Nike", price:"1400"}

]

function CardList() { 
    return(
        <div className="card-box">
           flera card card
           {arrayOfProducts.map((e)=> {
               return(
               <Card productName={e.productName} price={e.price}/>
           )})}

        </div>
    )
}

export default CardList; 

