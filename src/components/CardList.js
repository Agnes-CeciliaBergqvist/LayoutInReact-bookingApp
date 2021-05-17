import React, {useState, useEffect} from "react";
import axios from "axios"; 
//import Card from "./Card"; 
import Pagination from "./Pagination"; 
import BookTrip from "./BookTrip"; 



function CardList() {

    const [book, setBook] = useState([]); 

    const BookTrip = (trip) => {
      setBook([...book, trip])
      localStorage.setItem("book", JSON.stringify(book))
    };
    


    
    
        //useState for products 
        const [trips, setTrips] = useState([]);
        const [loading, setLoading] = useState(false); 
        const [currentPage, setCurrentPage] = useState(1); 
        const [tripsPerPage] = useState(3); 

    
        useEffect(() => {
            const fetchTrips = async() => {
                setLoading(true)
                const response = await axios.get("http://localhost:1337/trips")
                //console.log(response)
                //window.location.reload(); Funkar ej, bara relodar hela tiden 

                setTrips(response.data)
                //console.log(response.data)
                //console.log(setTrips)

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
        <div className={`flex flex-row flex-wrap justify-center`}>
            <button className="w-10 h-10 bg-yellow-100">  ({book.length}) </button> 
            
            {currentTrip.map((currentTrip, idx)=> {
               return(
                <div key={idx} className="bg-gray-200 rounded-xl p-6 m-4">

                <h2 className="text-2xl font-bold mb-2">{currentTrip.destination}</h2>
                <div className="text-gray-800 leading-relaxed mb-6">{currentTrip.description}</div>
                <img className=" w-72 h-52" src={"http://localhost:1337" + currentTrip.image.url} alt="images from the database strapi"/>
                <div className="text-gray-800 leading-relaxed mb-6">Total price from: {currentTrip.price}:-</div>
                <button onClick={() => BookTrip(currentTrip.id)} className="text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300">
                  Book
                </button> 
              </div>
               //<Card key={idx} tripDestination={currentTrip.destination} tripDescription={currentTrip.description} tripPrice={currentTrip.price} tripImage={currentTrip.image} loading={loading}/> 
                
           )})}
           <Pagination tripsPerPage={tripsPerPage} totalTrips={trips.length} paginate={paginate}/>

        </div>
        
    )
    console.log(currentTrip.idx)
}

export default CardList; 

