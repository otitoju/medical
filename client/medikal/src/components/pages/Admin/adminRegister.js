import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class adminRegister extends Component {
  render() {
    return (
      <div>
        <div class="container my-5">
        
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-10">
          <div class="card">
          <div class="row justify-content-center">
        <p class="h4 mb-4"> Admin <strong>Registration Form</strong></p>
        </div>
        <hr class="hr-class"/>
            <div class="card-body">

            <label>Fullname</label>
            <input type="text" class="form-control" />

            <label>Username</label>
            <input type="text" class="form-control" />

            <label>Email</label>
            <input type="email" class="form-control"/>

            <label>password</label>
            <input type="password" class="form-control" />

            <label>Confirm password</label>
            <input type="password" class="form-control"/>

            <label>Phone Number</label>
            <input type="number" class="form-control" />

            <label>Gender</label>
            <select class="form-control" id="sel1">
                                            <option>--Select your gender--</option>
                                            <option>Female</option>
                                            <option>Male</option>
                                          </select>
            <hr/>
            <div class="text-center">
            <button class="btn btn-danger btn-block my-4" type="submit">Sign up as admin <i class="fa fa-sign-in ml-1"></i></button>

            <p class="font-small grey-text d-flex justify-content-center">Already Registered <Link to='/docsignin' style={{color:'rgb(97, 5, 5)'}}> Sign in</Link></p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
      </div>
    )
  }
}
