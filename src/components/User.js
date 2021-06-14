import React from 'react'

export default function User({user, id, username, email}) {

    return (
        <div>
            <p>userID:{id}</p>
            <p>username: {username}</p>
            <p>email: {email}</p>
            
        </div>
    )
}


