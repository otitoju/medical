import React, { Component } from 'react'
import {  findAllServices } from '../../../api/api'

export default class adminService extends Component {
    constructor(props){
        super(props)
        this.state = {
            services:''
        }
    }
    async componentDidMount() {
       const services = await findAllServices()
       this.setState({services:services.info}) 
    }
  render() {
    return (
      <div>
        
        <section class="container text-center" style={{marginTop: '30px'}}>
          <h3>Our Medical services
          </h3>
          <hr class="hr-class" />
        </section>
        <div class="card-deck">
        {
                this.state.services && this.state.services.map( (service, index) => (
        <div class="col-sm-4" key={index}>
                <div class="card mb-4">
                        <div class="card-body">
                          <h4 class="card-title">{service.name}</h4>
                          <p class="card-text">{service.details}</p>
                         {/* <Link to={`/service/${service._id}`}> <button className="btn btn-success">View Doctor</button></Link> */}
                        </div>
                        <div class="seeButton">
                              <button class="btn btn-outline-primary">
                                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
                              </button>
                              <a data-toggle="modal" data-target="#exampleModal" class="btn btn-outline-danger">
                                  <i class="fa fa-trash-o" aria-hidden="true"></i> Delete</a>
                        </div>
                </div>
        </div>  
                )) }
        
    </div>
      </div>
    )
  }
}
