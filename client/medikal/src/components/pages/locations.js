import React, { Component } from 'react'

export default class locations extends Component {
  render() {
    return (
      <div>
          <div class="card mb-3 text-center" style={{marginTop: '30px'}}>
        <div class="card-body">
            <div class="row">
    
                <div class="col-md-4 offset-md-1 mx-3 my-3">
                    <h5>View of <strong>Federal Medical Hospital(F.M.C)</strong></h5>
                    <hr/>
                    <div class="view overlay">
                        <img src={require('../images/smoky-mountain.jpg')} class="img-fluid" alt="Doctor image"/>
                        <a>
                            <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    <hr/>
                    <h6 class="font-bold pb-1"><i class="fa fa-map-marker"></i> Address: No 36, post office, lokoja kogi state</h6>
                    <h6 class="font-bold pb-1"><i class="fa fa-phone"></i> Hosipital Hotline: +234-816748445</h6>
                </div>
                <div class="col-md-7 text-left ml-3 mt-3">
                    <a href="" class="green-text">
                        <h6 class="font-bold pb-1"><i class="fa fa-map"></i> Hosipital Map</h6>
                    </a>
                    <div class="card card-cascade narrower">

                    <div class="view view-cascade gradient-card-header peach-gradient">
                        <h5 class="mb-0">Hospital map</h5>
                    </div>
                    <div class="card-body card-body-cascade text-center">

                        <div id="map-container-6" class="z-depth-1" style={{height: '300px'}}></div>

                    </div>

                </div>
                </div>
            </div>
        </div>
    </div>
       <hr/> 

      </div>
    )
  }
}
