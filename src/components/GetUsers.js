import React, {useState, useEffect} from 'react'; 
import axios from "axios"; 
import User from "./User"; 


export default function GetUsers() {


    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);  
     


    useEffect(() => { 

        setLoading(true);

        const fetchUsers = async () => { 
            await axios.get("https://speedo-booking.herokuapp.com/users")
            .then(response => { 
                // console.log(response)
                setUsers(response.data)
                // console.log(response.data)
                // console.log(setUsers)
            })
            .catch(err => { 
                console.log(err)
            })
            
        }
        
        fetchUsers();
        setLoading(false);
        // console.log(fetchUsers)
        
    },[users])




    return (
        <div className="h-screen bg-white">
            <div className="bg-white overflow-auto">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">UserId</th>
                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Username</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                        </tr>
                    </thead>
                </table>
            </div>
               
            {!loading && users.map((user) => { 
            return( 
                <User
                key={user.id}
                userId={user.id}
                user={user}
                username={user.username}
                email={user.email}
                />
                
                
            )
        })}</div>
    )
}

 
