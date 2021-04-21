import React from "react";
import Form from "./Form";
import CardList from "./CardList";
import Menu from "./Menu"; 
import './style.css'; 
import MyTrips from "./Trips";


import {Route, BrowserRouter as Router, Link} from "react-router-dom"; 

function AppRoute() { 
    return(
        <>
            <Router>

                <Menu/>
                <Route path="/" exact component={CardList} />
                <Route path="/form" component={Form} />
                <Route path="/trips" component={MyTrips} />
                

            </Router>
        </>
    )
}

export default AppRoute; 

