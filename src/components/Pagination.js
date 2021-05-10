import React from 'react'

function Pagination({ tripsPerPage, totalTrips, paginate }) {

    //tom array i början tills forloopen
    const pageNumbers = []; 

    //om index är mindre eller lika med den totala posten per sida men rundar av det uppåt med ceil. 
    for(let i = 1; i<= Math.ceil(totalTrips / tripsPerPage); i++) {
        pageNumbers.push(i); //Här pushar vi arrayen in i indesxnumret 

    }
    return (
        <div>
             <ul className=" flex justify-center pagination">
             {pageNumbers.map(number => (
                 <li key={number} className="page-item"> 
                 <a onClick={() => paginate(number)}  className="page-link">
                     {number}
                 </a>
                </li>

             ))}
             </ul>
            
        </div>
    )
}

export default Pagination; 
