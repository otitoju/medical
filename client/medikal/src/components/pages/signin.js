import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class signin extends Component {
  render() {
    return (
      <div>
          <div class="container my-5">
          <div class="row justify-content-center">
            <div class="col-md-6 col-lg-6 col-xs-6">
              <div class="card  text-center card-form">
                <div class="header pt-3 grey lighten-2">
                    <h3 class="text">Log in <i class="fa fa-sign-in ml-1"></i></h3>
                    <h6 class="font-weight-light ">Enter your login details</h6>
                </div>
                <div class="card-body">
                  
                  <form>
                    <div class="md-form">
                        <input type="text" id="Form-email4" class="form-control"/>
                        <label for="Form-email4"> <i class="fa fa-mail ml-1"></i> Email</label>
                    </div>
                    <div class="md-form pb-3">
                                <input type="password" id="Form-pass4" class="form-control"/>
                                <label for="Form-pass4">Password</label>
                                <p class="font-small grey-text d-flex justify-content-end">Forgot <a href="#" class="dark-grey-text font-weight-bold ml-1"> Password?</a></p>
                            </div>
                    <div class="text-center mb-4">
                                <button type="button" class="btn btn-danger btn-block z-depth-2">Log in <i class="fa fa-sign-in ml-1"></i></button>
                    </div>
                    <hr/> 
                            <p class="font-small grey-text d-flex justify-content-center">Don't have an account? <Link to='/signup' style={{color:'rgb(97, 5, 5)'}}> Sign up</Link></p>
                  </form>
                  <hr/>
                </div>
              </div>
            </div>
          </div>
        </div>
            
      </div>
    )
  }
}
