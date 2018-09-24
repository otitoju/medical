import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class adminDashboard extends Component {
  render() {
    return (
      <div>
          <section id="breadcrumb" style={{marginTop:'20px', marginBottom:'20px'}}>
            <div class="container">
                <ol class="breadcrumb">
                <li class="active"><i class="fa fa-dashboard"></i> Administrative Dashboard</li>
                </ol>
            </div>
    </section>
          <div className="container" style={{marginTop:'20px', marginBottom:'20px'}}>
          <div className="row">
                <div className="col-md-3">
                <div class="list-group">
                <Link to="/" class="list-group-item active main-color-bg"  style={{background:'teal'}}>Actions</Link>
                <Link to="/postservice" class="list-group-item">Post service</Link>
                <Link to="/postsickness" class="list-group-item">Post sickness</Link>
                <Link to="/ourservices" class="list-group-item">Services</Link>
                <Link to="/admin-disease" class="list-group-item">Sickness</Link>
                <Link to="/" class="list-group-item">Patients</Link>
                <Link to="/" class="list-group-item">Doctors</Link>
                <Link to="/" class="list-group-item">Nurses</Link>
                <Link to="/" class="list-group-item"><i class="fa fa-map-marker"></i> Locations</Link>
                <Link to="/" class="list-group-item">Appointments</Link>
                </div>

                </div>

                <div className="col-md-9" style={{border:'1px solid black'}}>
                    <div style={{fontSize:'100px'}}>
                        <i class="fa fa-line-chart"></i>
                    </div>
                   
                </div>
            </div>
          </div>
        
      </div>
    )
  }
}
