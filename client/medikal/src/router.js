import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './components/MDB-Free/css/bootstrap.min.css'
import './components/MDB-Free/css/mdb.min.css'
import Home from './components/pages/home'
import Signin from './components/pages/signin'
import Signup from './components/pages/signup'
import Doctor from './components/pages/doctors'
import Service from './components/pages/medicalService'
import Schedule from './components/pages/appointment'
import DocProfile from './components/pages/doctorProfile'
import Bill from './components/pages/payBill'
import Disease from './components/pages/disease'

export default class router extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route path="/" strict exact={true} component={Home}/>
            <Route path="/signin" strict exact={true} component={Signin}/>
            <Route path="/signup" strict exact={true} component={Signup}/>
            <Route path="/doctor" strict exact={true} component={Doctor}/>
            <Route path="/services" strict exact={true} component={Service}/>
            <Route path="/schedule" strict exact={true} component={Schedule}/>
            <Route path="/pay" strict exact={true} component={Bill}/>
            <Route path="/disease" strict exact={true} component={Disease}/>
            <Route path="/doctor/:doctorId" strict exact={true} component={DocProfile}/>
        </Switch>
      </div>
    )
  }
}
