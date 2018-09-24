import React, { Component } from 'react'
import { getDisease, getAllDoctors } from '../../../api/api'

export default class adminSickness extends Component {
    constructor(props){
        super(props)
        this.state = {
            diseases:''
        }
    }
    async componentDidMount() {
        const disease = await getDisease()
        this.setState({diseases: disease.message})
   }

  render() {
    return (
      <div>
        <section class="container text-center" style={{marginTop: '30px'}}>
          <h3>Diseases post</h3>
          <hr class="hr-class" />
        </section>
        <section class="container home_details">
          <div class="row card-deck">

            {
              this.state.diseases && this.state.diseases.map(disease => (
                <div class="col-md-4">
                  <div class="card">
                      <div class="view overlay hm-white-slight">
                          <img class="card-img-top img-zoom"  src={require('../../images/logo.jpg')} class="img-fluid" alt=""/>
                      </div>
                      <div class="card-body">
                          <a href="#">
                              <h4 class="card-title">{disease.name}</h4>
                              <hr/>
                          </a>
                          <div class="seeButton">
                              <button class="btn btn-outline-primary">
                                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
                              </button>
                              <a data-toggle="modal" data-target="#exampleModal" class="btn btn-outline-danger">
                                  <i class="fa fa-trash-o" aria-hidden="true"></i> Delete</a>
                          </div>
                      </div>
                  </div>
              </div>
              ))
            }
              
          </div>
          <br/>
        </section>
      </div>
    )
  }
}
