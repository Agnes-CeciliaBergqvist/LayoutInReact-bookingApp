import React, {useEffect, useState} from "react"; 
import axios from "axios"; 

function API() { 


    // Ni som använder yarn : yarn add axios 
// npm : npm i axios 


    const [data , setData ] = useState({});
    
    useEffect(() => {

         const fetchData = async()=> {

            try {

                // anropa user-bookings  axios.get("http://localhost:1337/user-bookings"
         const response =   await axios.get("http://localhost:1337/user-bookings?users_permissions_user.id=33")
          // axios är ett fetch bibliotek , http get, post, update , delete  
          console.log(response.data)
          const res = response.data 
          // json.string
         setData(res)
        }
    
    catch(err) {
        console.log(err)    
    }
        
}
        fetchData()   
    }, [])



    // async function name() { 
    // const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
    // console.log(response)   }

    //  axios.get("https://jsonplaceholder.typicode.com/todos/1").then(  (response)=> console.log(response) )
    //  .catch(err => {console.log(err) }) 


    // try{    // async function name() { 
    // const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
    // console.log(response)   }
    //}  catch (err) { console.log(err) } 


    // vi ska inte lägga fetchData functionen utanför useEffect
    // I useEffect ni ska inte skriva ut state data.


    return (
    <>
    data kommer att kunna skriva ut här:-  
    {data.map( e => <div> {e.name} </div>)}
   

    <div> Hello from api </div> 
    </>
    
    )

}
export default API; 


//     const [data, setData] = useState([]); 

//     useEffect(() => { 

//         const fetchData = async() => { //denna funktionen måste ligga inuti useEffect annars funkar det ej
//             try {
//             const response = await axios.get("https://jsonplaceholder.typicode.com/todos")

//             console.log(response.data)
//             const res = response.data

//             setData(res)
    
//         }
//         catch(err) {
//             console.log(err)
//         }
//         }

//         fetchData(); 


//     }, []); 

//     return( 
//         <div>
//             {data.map((singleData) => { 
//                 return <h1>{singleData.title}</h1>
//             })}
//             <button className="border black" >Klicka här </button>
//             Detta är en API
//         </div>
//     )
// }

