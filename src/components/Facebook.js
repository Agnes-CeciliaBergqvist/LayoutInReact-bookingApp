import React from "react";
import FacebookLogin from "react-facebook-login"; 
import Homepage from "./HomePage";
import { useHistory } from "react-router-dom";


function Facebook() {

    const FbValues = {
        isLoggedIn: false,
        userID: "", 
        name: "", 
        email: "", 
        picture: ""

    }

    const history = useHistory();
    

    const responseFacebook = response => { 
        console.log(response)

        return({
                        isLoggedIn: true, 
                        userID: response.userID, 
                        name: response.name, 
                        email: response.email, 
                        picture: response.picture.data.url
                    })
    }

   const componentClicked = () => console.log("clicked")
       


    return ( 
        <>
        {FbValues.isLoggedIn ? (
            
            
        <div>    
            {/* history.push("/")   */}
            <img src={FbValues.picture} alt={FbValues.name} />
            <h2> Welcome {FbValues.name}!</h2>
            <p> Email:{FbValues.email}</p>
        </div>

    ) : (
        <div>
            <FacebookLogin
            appId="2633608160275783"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook} />

        </div>
    )} 
    </>)
       
    
}

export default Facebook