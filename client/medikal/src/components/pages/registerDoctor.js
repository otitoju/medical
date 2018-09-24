import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class registerDoctor extends Component {
  render() {
    return (
      <div>

      <div class="container my-5">
        
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-10">
          <div class="card">
          <div class="row justify-content-center">
        <p class="h4 mb-4"> Doctor <strong>Registration Form</strong></p>
        </div>
        <hr class="hr-class"/>
            <div class="card-body">
            <div class="form-group row">
              <div class="col-sm-4">
                <label>Surname</label>
                <input type="text" class="form-control"/>
              </div>
              <div class="col-sm-4">
                <label>Firstname</label>
                <input type="text" class="form-control" />
              </div>
              <div class="col-sm-4">
                <label>Lastname</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <label>Email</label>
            <input type="email" class="form-control"/>

            <label>Dob</label>
            <input type="date" class="form-control" />

            <label>Place of work</label>
            <input type="text" class="form-control" />

            <label>password</label>
            <input type="password" class="form-control" />

            <label>Confirm password</label>
            <input type="password" class="form-control"/>

            <label>Specialization</label>
            <input type="text" class="form-control" />

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
            <button class="btn btn-danger btn-block my-4" type="submit">Sign up  <i class="fa fa-sign-in ml-1"></i></button>

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
