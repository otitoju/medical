import React, { Component } from 'react'
import { getDisease, getAllDoctors } from '../../api/api'

export default class disease extends Component {
    constructor(props){
        super(props)
        this.state = {
            allDisease:null,
            isLoading:false
        }
    }
    async componentDidMount() {
         const disease = await getDisease()
         this.setState({allDisease: disease.message})
    }
//     async componentDidUpdate() {
//         const disease = await getDisease()
//         this.setState({allDisease: disease.message})
//    }
    componentWillUnMount(){
        getDisease()
    }
  render() {
    return (
      <div>

        <div class="accordion md-accordion accordion-1" id="accordionEx23" role="tablist" style={{marginBottom:'10px'}}>
                <ul class="list-unstyled d-flex justify-content-center pt-5 red-text">
                    <li><i class="fa fa-anchor mr-3 fa-2x" aria-hidden="true"></i></li>
                </ul>

                <h2 class="text-center text-uppercase red-text py-4 px-3">Here are some common sickness, disease in the world</h2>

                <hr class="mb-0"/>
                { 
                    this.state.allDisease ? this.state.allDisease.map( disease =>(
                    <div class="card">
                    <div class="card-header red lighten-3 z-depth-1" role="tab" id="heading96">
                        <h5 class="text-uppercase mb-0 py-1">
                            <a class="white-text font-weight-bold" data-toggle="collapse" href="#collapse96" aria-expanded="true" aria-controls="collapse96">
                                {disease.name}
                            </a>
                        </h5>
                    </div>
                    <div id="collapse96" class="collapse show" role="tabpanel" aria-labelledby="heading96" data-parent="#accordionEx23">
                        <div class="card-body">
                            <div class="row my-4">
                                <div class="col-md-8">
                                    <h2 class="font-weight-bold mb-3 black-text">What is {disease.name}</h2>
                                    <p class="">Fever is when a human's body temperature goes above the normal range of 36–37° Centigrade (98–100° Fahrenheit). It is a common medical sign.</p>
                                    <h3>Symptoms</h3>
                                    <p class="mb-0"> {disease.symptoms} </p>
                                    <h3>Causes</h3>
                                        <p> </p>
                                        <h3>Precaution</h3>
                                            <p> {disease.precaution} </p>
                                     <h3>Treatment</h3>
                                      <p> {disease.treatment} </p>
                                </div>
                                <div class="col-md-4 mt-3 pt-2">
                                    <div class="view z-depth-1">
                                        <img src={require('../images/smoky-mountain.jpg')} alt="" class="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    )) : (
                        <h2> Empty post</h2>
                    )
                }
            </div>

      </div>
    )
  }
}
