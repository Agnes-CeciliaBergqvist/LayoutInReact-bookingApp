import axios from "axios";
import React from "react";
import {Link} from "react-router-dom"; 


export default function User({user, userId, username, email}) {

    const admin = localStorage.getItem("role");

    const handleDelete = async () => { 
        await axios.delete(`https://speedo-booking.herokuapp.com/users/${userId}`)
    }

   const updateUser = (id) => { 
       console.log(id)

   }
   

    return (

        <>
        {admin === "admin" ? (
            <div className="bg-white overflow-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <td className="w-1/3 text-left py-3 px-4">{user.id}</td>
                            <td className="w-1/3 text-left py-3 px-4">{username}</td>
                            <td className="text-left py-3 px-4">{email}
                                <button className="py-2 m-1 px-1 text-xs uppercase font-bold leading-snug bg-red-500 text-yellow-900 rounded-md"onClick={handleDelete}>Delete</button>
                               <Link to="/updateuser"><button className="py-2 m-1 px-1  text-xs uppercase font-bold leading-snug bg-yellow-400 text-yellow-900 rounded-md" onClick={updateUser}>Change</button></Link>
                            </td>
                        </tr>
                    </thead>
                 </table>
            </div>

        ) : (

            <div className="bg-white overflow-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr> 
                            <td className="w-1/3 text-left py-3 px-4">{user.id}</td>
                            <td className="w-1/3 text-left py-3 px-4">{username}</td>
                            <td className="text-left py-3 px-4">{email}
                                <button className="py-2 m-1 px-1 text-xs uppercase font-bold leading-snug bg-red-500 text-yellow-900 rounded-md">Delete</button>
                                <button className="py-2 m-1 px-1  text-xs uppercase font-bold leading-snug bg-yellow-400 text-yellow-900 rounded-md">Update</button>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>

        )}
        

      </>
    );
}


