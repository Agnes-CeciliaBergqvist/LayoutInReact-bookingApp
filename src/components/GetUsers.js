import React, {useState, useEffect} from 'react'; 
import axios from "axios"; 
import User from "./User"; 


export default function GetUsers() {


    const [users, setUsers] = useState([]) 


    useEffect(() => { 
        const fetchUsers = async () => { 
            const response = await axios.get("https://speedo-booking.herokuapp.com/users");
            console.log(response)

            setUsers(response.data)
            console.log(setUsers)

        }
        fetchUsers();
        console.log(fetchUsers)
    },[users])




    return (
        <div>
            { 
            users.map((user) => { 
            return( 
                <User
                userId={user.userId}
                user={user}
                username={user.username}
                email={user.email}
                />
                
            )
        })}</div>
    )
}

 
