import axios from "axios";
import React, {useState, useEffect}  from "react";
import {Link} from "react-router-dom"; 


export default function User() {


    
    const [users, setUsers] = useState([]);
    const [userId, ] = useState(localStorage.getItem("userId")) 
    const url = GetRole();
    let [loading, setLoading] = useState(0);
    

    function GetRole() { 
        try{ 
            const res = localStorage.getItem("role")
            if(res === "admin") { 

                return "https://speedo-booking.herokuapp.com/users"
            }else{ 
                return `https://speedo-booking.herokuapp.com/users?id=${userId}`
            }

        }catch(error){ 
            

        }
    }
 

    //Fetching users for admin 
    useEffect(() => { 

        const fetchUsers = async () => { 
            await axios.get(url)
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
        
        // console.log(fetchUsers)
        console.log("renderar")
    },[loading])


    const handleDelete = async ({target}) => { 
        const {name} = target
        const id = Number(name)
        await axios.delete(`https://speedo-booking.herokuapp.com/users/${id}`)
        .then(() => { 
            // forceUpdate()
            setLoading(loading += 1 )
            console.log(loading)
        })
        
    }

   const updateUser = (event) => { 
       localStorage.setItem("updateUserId", event.target.name )
       

   }
   

    return ( 
    <>

        { users.map((user) => { 

            return (
            <div className="bg-white overflow-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <td className="w-1/3 text-left py-3 px-4">{user.id}</td>
                            <td className="w-1/3 text-left py-3 px-4">{user.username}</td>
                            <td className="text-left py-3 px-4">{user.email}
                                <button className="py-2 m-1 px-1 text-xs uppercase font-bold leading-snug bg-red-500 text-yellow-900 rounded-md"onClick={handleDelete} name={user.id}>Delete</button>
                               <Link to="/updateuser"><button className="py-2 m-1 px-1  text-xs uppercase font-bold leading-snug bg-yellow-400 text-yellow-900 rounded-md" name={user.id} onClick={updateUser}>Change</button></Link>
                            </td>
                        </tr>
                    </thead>
                 </table>
            </div>
            )

            })}
   </>
    );
}


