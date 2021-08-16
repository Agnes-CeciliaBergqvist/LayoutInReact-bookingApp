// import React, {useEffect, useState} from "react";
// import axios from "axios";

// function API() {

//     const [data , setData ] = useState({});

//     useEffect(() => {

//          const fetchData = async()=> {

//             try {

//                 // anropa user-bookings  axios.get("https://speedo-booking.herokuapp.com/user-bookings"
//          const response =   await axios.get("https://speedo-booking.herokuapp.com/user-bookings?users_permissions_user.id=33")
//           // axios är ett fetch bibliotek , http get, post, update , delete
//           console.log(response.data)
//           const res = response.data
//           // json.string
//          setData(res)
//         }

//     catch(err) {
//         console.log(err)
//     }

// }
//         fetchData()
//     }, [])

//     return (
//     <>
//     data kommer att kunna skriva ut här:-
//     {data.map( e => <div> {e.name} </div>)}

//     <div>  </div>
//     </>

//     )

// }
// export default API;
