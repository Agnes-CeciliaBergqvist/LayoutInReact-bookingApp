import React, {useState, useEffect} from 'react'; 
import axios from "axios"; 
import User from "./User"; 


export default function GetUsers() {


    const [users, setUsers] = useState([]) 
     


    useEffect(() => { 
        const fetchUsers = async () => { 
            await axios.get("https://speedo-booking.herokuapp.com/users")
            .then(response => { 
                console.log(response)
                setUsers(response.data)
                console.log(response.data)
                console.log(setUsers)
            })
            .catch(err => { 
                console.log(err)
            })
            
          
           

          

        }
        
        fetchUsers();
        // console.log(fetchUsers)
        
    },[])




    return (
        <div>
            { 
            users.map((user) => { 
            return( 
                <User
                userId={user.id}
                user={user}
                username={user.username}
                email={user.email}
                />
                
            )
        })}</div>
    )
}

 
