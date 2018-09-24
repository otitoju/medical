import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class doctorLogin extends Component {
  render() {
    return (
      <div>
        <div class="container my-5">
          <div class="row justify-content-center">
            <div class="col-md-6 col-lg-6 col-xs-6">
                  
            <form class="border border-light p-5">
            <p class="text-center h4 mb-4"> Doctor <strong>Sign in</strong></p>
            <label>Email</label>
            <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder=""/>

            <label>Password</label>
            <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder=""/>
                    <div class="text-center mb-4">
                                <button type="button" class="btn btn-danger btn-block z-depth-2">Log in <i class="fa fa-sign-in ml-1"></i></button>
                    </div>
                    <hr/> 
                            <p class="font-small grey-text d-flex justify-content-center">Don't have an account? <Link to='/docreg' style={{color:'rgb(97, 5, 5)'}}> Sign up</Link></p>
                  </form>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
