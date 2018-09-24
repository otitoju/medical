import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { findAllServices } from '../../api/api'

export default class medicalService extends Component {
        constructor(){
        super()
        this.state = {
                services: []
        }
        }
async componentDidMount() {
        const services = await findAllServices()
        this.setState({services: services.info})
}
// async componentDidUpdate() {
//         const services = await findAllServices()
//         this.setState({services: services.info})
// }
  render() {
    return (
      <div>
            <div class="jumbotron" style={{background:'rgb(187, 15, 15)'}}>
        <img src={require('../images/logo.jpg')} alt="" style={{width:'30px',height:'30px'}}/>
        <h1 class="font-weight-bold text-uppercase text-center mt-3 mb-4" style={{fontFamily:'Bookman Old Style'}}>Our Medical Services</h1>
    </div>
    <div class="card-deck">
        {
                this.state.services ? this.state.services.map( (service, index) => (
        <div class="col-sm-3" key={index}>
                <div class="card mb-4">
                        <div class="card-body">
                          <h4 class="card-title">{service.name}</h4>
                          <p class="card-text">{service.details}</p>
                         {/* <Link to={`/service/${service._id}`}> <button className="btn btn-success">View Doctor</button></Link> */}
                        </div>
                    
                </div>
        </div>  
                )) : (
                        <h1>Unable to fetch services please try again</h1>
                )
        }
        
    </div>
      </div>
    )
  }
}
