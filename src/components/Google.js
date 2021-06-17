import React from "react";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from 'react-google-login';

export default function Google() {

    const responseGoogle = (response) => {
        console.log(response);
      }

      const isSignedIn = true; 
      const logout = ""; 
      
    return (
        <>
        {isSignedIn ? (
            
            <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            isSignedIn={true}
            cookiePolicy={'single_host_origin'}/>
            
    

        ) : ( 

            <GoogleLogout
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}>
          </GoogleLogout>

        )}

        </>
    )
}










