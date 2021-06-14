import axios from 'axios';
import React from 'react'

export default function User({user, userId, username, email}) {

    const admin = localStorage.getItem("role");

    const handleDelete = async () => { 
        await axios.delete(`https://speedo-booking.herokuapp.com/users/${userId}`)
    }

    return (

        <>
        {admin === "admin" ? (
            <div class="bg-white overflow-auto">
            <table class="min-w-full bg-white">
                            
                <td class="w-1/3 text-left py-3 px-4">{user.id}</td>
                <td class="w-1/3 text-left py-3 px-4">{username}</td>
                <td class="text-left py-3 px-4">{email}
                <button className="py-2 m-1 px-1 text-xs uppercase font-bold leading-snug bg-red-500 text-yellow-900 rounded-md"onClick={handleDelete}>Delete</button>
                <button className="py-2 m-1 px-1  text-xs uppercase font-bold leading-snug bg-yellow-400 text-yellow-900 rounded-md">Update</button>
                </td>
                   
            </table>
        </div>

        ) : (

            <div class="bg-white overflow-auto">
            <table class="min-w-full bg-white">
                            
                <td class="w-1/3 text-left py-3 px-4">{user.id}</td>
                <td class="w-1/3 text-left py-3 px-4">{username}</td>
                <td class="text-left py-3 px-4">{email}
                <button className="py-2 m-1 px-1 text-xs uppercase font-bold leading-snug bg-red-500 text-yellow-900 rounded-md">Delete</button>
                <button className="py-2 m-1 px-1  text-xs uppercase font-bold leading-snug bg-yellow-400 text-yellow-900 rounded-md">Update</button>
                </td>
                   
            </table>
        </div>

        )}
        

      </>
    );
}


