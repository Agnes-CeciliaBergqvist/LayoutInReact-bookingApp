import React from "react";
import BookTrip from "./BookTrip";
import CardList from "./CardList"; 
import Menu from "./Menu"; 
import "./style.css"; 
import MyTrips from "./MyTrips";
import Registration from "./Registration"; 
import Login from "./Login"; 
import CreateTrip from "./CreateTrip"; 
import HomePage from "./HomePage"; 
import NotLoggedIn from "./NotLoggedIn"; 







import {Route, BrowserRouter as Router} from "react-router-dom"; 

function AppRoute() { 
    return(
        <>
            <Router>

                <Menu/>
                    <Route path="/" exact component={CardList} />
                    <Route path="/registration" component={Registration} />
                    <Route path="/login" component={Login} />                
                    <Route path="/homepage" component={HomePage} />
                    <Route path="/notloggedin" component={NotLoggedIn} />
                    <Route path="/createtrip" component={CreateTrip} />
                    <Route path="/mytrips" component={MyTrips} />
                    <Route path="/booktrip" component={BookTrip} />
            </Router>
        </>
    )
}

export default AppRoute; 

