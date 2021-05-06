import React from "react";
import Form from "./Form";
import CardList from "./CardList";
import Menu from "./Menu"; 
import './style.css'; 
import MyTrips from "./Trips";
import Registration from "./Registration"; 
import Login from "./Login"; 
import CreateTrip from "./CreateTrip"; 
import HomePage from "./HomePage"; 



import {Route, BrowserRouter as Router, Link} from "react-router-dom"; 

function AppRoute() { 
    return(
        <>
            <Router>

                <Menu/>
                <Route path="/" exact component={CardList} />
                <Route path="/form" component={Form} />
                <Route path="/trips" component={MyTrips} />
                <Route path="/registration" component={Registration} />
                <Route path="/login" component={Login} />
                <Route path="/createtrip" component={CreateTrip} />
                <Route path="/homepage" component={HomePage} />
                

            </Router>
        </>
    )
}

export default AppRoute; 

