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
        <div className="h-screen bg-white">
            <div class="bg-white overflow-auto">
                <table class="min-w-full bg-white">
                    <thead class="bg-gray-800 text-white">
                        <tr>
                            <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">UserId</th>
                            <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Username</th>
                            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                        </tr>
                    </thead>
                </table>
            </div>
               
            { 
            users.map((user) => { 
            return( 
                <User
                key="id"
                userId={user.id}
                user={user}
                username={user.username}
                email={user.email}
                />
                
                
            )
        })}</div>
    )
}

 
