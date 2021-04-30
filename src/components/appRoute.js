import React from "react";
import Form from "./Form";
import CardList from "./CardList";
import Menu from "./Menu"; 
import './style.css'; 
import MyTrips from "./Trips";
import Registration from "./Registration"; 
import Login from "./Login"; 



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
                

            </Router>
        </>
    )
}

export default AppRoute; 

