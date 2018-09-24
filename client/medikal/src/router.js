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
import UpdateService from './components/pages/updateService'
import DocRegister from './components/pages/registerDoctor'
import DocSignin from './components/pages/doctorLogin'
import PostService from './components/pages/postServices'
import PostSickness from './components/pages/postSickness'
import Location from './components/pages/locations'
import PatientTable from './components/pages/patientList'
import EditDocProfile from './components/pages/editDocProfile'
import AdminDashboard from './components/pages/adminDashboard'
import OurServices from './components/pages/Admin/adminService'
import Diseases from './components/pages/Admin/adminSickness'
import AdminRegister from './components/pages/Admin/adminRegister'
import AdminLogin from './components/pages/Admin/login'

export default class router extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route path="/" strict exact={true} component={Home}/>
            <Route path="/admin-reg" strict exact={true} component={AdminRegister}/>
            <Route path="/admin-login" strict exact={true} component={AdminLogin}/>
            <Route path="/dashboard" strict exact={true} component={AdminDashboard}/>
            <Route path="/admin-disease" strict exact={true} component={Diseases}/>
            <Route path="/ourservices" strict exact={true} component={OurServices}/>
            <Route path="/editdocprofile" strict exact={true} component={EditDocProfile}/>
            <Route path="/patients" strict exact={true} component={PatientTable}/>
            <Route path="/postservice" strict exact={true} component={PostService}/>
            <Route path="/postsickness" strict exact={true} component={PostSickness}/>
            <Route path="/location" strict exact={true} component={Location}/>
            <Route path="/docreg" strict exact={true} component={DocRegister}/>
            <Route path="/docsignin" strict exact={true} component={DocSignin}/>
            <Route path="/signin" strict exact={true} component={Signin}/>
            <Route path="/signup" strict exact={true} component={Signup}/>
            <Route path="/doctor" strict exact={true} component={Doctor}/>
            <Route path="/services" strict exact={true} component={Service}/>
            <Route path="/schedule" strict exact={true} component={Schedule}/>
            <Route path="/pay" strict exact={true} component={Bill}/>
            <Route path="/disease" strict exact={true} component={Disease}/>
            <Route path="/doctor/:doctorId" strict exact={true} component={DocProfile}/>
            <Route path="/service/:serviceId" strict exact={true} component={UpdateService}/>
        </Switch>
      </div>
    )
  }
}
