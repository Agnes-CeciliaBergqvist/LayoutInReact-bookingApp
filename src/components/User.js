import React from 'react'

export default function User({user, userId, username, email}) {

    return (
        <div>
            <p>userID:{userId}</p>
            <p>username: {username}</p>
            <p>email: {email}</p>
            
        </div>
    )
}


