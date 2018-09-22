import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class medicalService extends Component {
  render() {
    return (
      <div>
            <div class="jumbotron" style={{background:'rgb(187, 15, 15)'}}>
        <img src={require('../images/logo.jpg')} alt="" style={{width:'30px',height:'30px'}}/>
        <h1 class="font-weight-bold text-uppercase text-center mt-3 mb-4" style={{fontFamily:'Bookman Old Style'}}>Our Medical Services</h1>
    </div>
    <div class="card-deck">
        <div class="col-sm-3">
                <div class="card mb-4">
                        <div class="card-body">
                          <h4 class="card-title">Orthopedics</h4>
                          <p class="card-text">A medical laboratory or clinical laboratory is a laboratory where tests are carried out on clinical specimens in order to obtain information about the health of a patient in order to provide diagnosis, treatment, and prevention of disease.</p>
                          <Link to='/' className="nav-link" style={{color:'rgb(97, 5, 5)'}}>View Doctor</Link>
                        </div>
                    
                </div>
        </div>
            <div class="col-sm-3">
                    <div class="card mb-4">
                            <div class="card-body">
                              <h4 class="card-title">Cancer</h4>
                              <p class="card-text">A medical laboratory or clinical laboratory is a laboratory where tests are carried out on clinical specimens in order to obtain information about the health of a patient in order to provide diagnosis, treatment, and prevention of disease.</p>
                              <Link to='/' className="nav-link" style={{color:'rgb(97, 5, 5)'}}>View Doctor</Link>
                            </div>
                        
                    </div>
            </div>
            <div class="col-sm-3">
                    <div class="card mb-4">
                            <div class="card-body">                       
                              <h4 class="card-title">Neurology</h4>
                              <p class="card-text">A medical laboratory or clinical laboratory is a laboratory where tests are carried out on clinical specimens in order to obtain information about the health of a patient in order to provide diagnosis, treatment, and prevention of disease.</p>
                        
                            </div>
                        
                    </div>
            </div>
            <div class="col-sm-3">
                    <div class="card mb-4">
                            <div class="card-body">
                              <h4 class="card-title">Primary Health Care</h4>
                              <p class="card-text">A medical laboratory or clinical laboratory is a laboratory where tests are carried out on clinical specimens in order to obtain information about the health of a patient in order to provide diagnosis, treatment, and prevention of disease.</p>
                        
                            </div>
                        
                    </div>
            </div>
            <div class="col-sm-3">
                    <div class="card mb-4">
                            <div class="card-body">
                              <h4 class="card-title">Woman Care</h4>
                              <p class="card-text">A medical laboratory or clinical laboratory is a laboratory where tests are carried out on clinical specimens in order to obtain information about the health of a patient in order to provide diagnosis, treatment, and prevention of disease.</p>
                        
                            </div>
                        
                    </div>
            </div>
            <div class="col-sm-3">
                    <div class="card mb-4">
                            <div class="card-body">
                              <h4 class="card-title">Children Care</h4>
                              <p class="card-text">A medical laboratory or clinical laboratory is a laboratory where tests are carried out on clinical specimens in order to obtain information about the health of a patient in order to provide diagnosis, treatment, and prevention of disease.</p>
                        
                            </div>
                        
                    </div>
            </div>
    </div>
      </div>
    )
  }
}
