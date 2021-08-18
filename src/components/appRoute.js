import React from 'react'
import BookTrip from './BookTrip'
import CardList from './CardList'
import Menu from './Menu'
import './style.css'
import MyTrips from './MyTrips'
import Registration from './Registration'
import Login from './Login'
import CreateTrip from './CreateTrip'
import HomePage from './HomePage'
import NotLoggedIn from './NotLoggedIn'
import ForgotPassword from './ForgotPassword'
import Success from './Success'
import UpdateCard from './UpdateCard'
import GetUsers from './GetUsers'
import UpdateUser from './UpdateUser'
import ContactForm from './ContactForm'

import { Route, BrowserRouter as Router } from 'react-router-dom'

function AppRoute () {
  return (
    <>
      <Router>

        <Menu />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/cardlist' component={CardList} />
        <Route exact path='/notloggedin' component={NotLoggedIn} />
        <Route exact path='/createtrip' component={CreateTrip} />
        <Route exact path='/mytrips' component={MyTrips} />
        <Route exact path='/booktrip' component={BookTrip} />
        <Route exact path='/forgotpassword' component={ForgotPassword} />
        <Route exact path='/success' component={Success} />
        <Route exact path='/updatecard' component={UpdateCard} />
        <Route exact path='/getusers' component={GetUsers} />
        <Route exact path='/updateuser' component={UpdateUser} />
        <Route exact path='/contactform' component={ContactForm} />

      </Router>
    </>
  )
}

export default AppRoute
