import React from 'react'

export default function User({user, username, email}) {

    return (
        <div class="bg-white overflow-auto">
            <table class="min-w-full bg-white">
                            
                <td class="w-1/3 text-left py-3 px-4">{user.id}</td>
                <td class="w-1/3 text-left py-3 px-4">{username}</td>
                <td class="text-left py-3 px-4">{email}
                <button className="ml-7 m-1 bg-red-700 text-white">Delete</button>
                <button className="bg-yellow-600 text-white">Update</button>
                </td>
                   
            </table>
        </div>

      
    );
}


