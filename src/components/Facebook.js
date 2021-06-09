import React, {Component} from "react";
import FacebookLogin from "react-facebook-login"; 
//import ReactDOM from 'react-dom';


export default class Facebook extends Component { 

    state = {
        isLoggedIn: false,
        userID: "", 
        name: "", 
        email: "", 
        picture: ""
    }
    responseFacebook = response => { 
        // console.log(response)
        this.setState({
            isLoggedIn: true, 
            userID: response.userID, 
            name: response.name, 
            email: response.email, 
            picture: response.picture.data.url
        })
    }

    componentClicked = () => console.log("clicked")

    render() {

    let fbContent;  

     if(this.state.isLoggedIn) { 

         fbContent = (
             <div>
                <img src={this.state.picture} alt={this.state.name} />
                <h2>Welcome {this.state.name}!</h2>
                <p>Email:{this.state.email}</p>
             </div>
         )

     }else { 

         fbContent = (
             <div className="mt-2">
                <FacebookLogin
                appId="2633608160275783"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
            </div>

         );
        }
            return (
                <div>
                    {fbContent}
                </div>
            )
        }}