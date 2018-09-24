import React, { Component } from 'react'

export default class editDocProfile extends Component {
  render() {
    return (
      <div>
                <div class="container my-5">
        <div class="row justify-content-center">
          <h1 class="text-center my-5 header-color">Edit My Profile</h1>
        </div>
        <hr class="hr-class"/>
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-10">
          <div class="card">
            <div class="upload-img">
              <div class="row justify-content-center">
                <div class="col-12">
                  <p  class="text-center"><label>
                    <span class="h2">
                      <i class="fa fa-camera" aria-hidden="true"></i>
                    </span>
                    <br/><input type="file"style={{display:'none'}}/> Click to upload image <i class="fa fa-upload-o" aria-hidden="true"></i>
                  </label></p>
                </div>
              </div>
            </div>
            <hr/>
            <div class="card-body">
            <div class="form-group row">
              <div class="col-sm-4">
                <label>Surname</label>
                <input type="text" class="form-control" placeholder="Otitoju"/>
              </div>
              <div class="col-sm-4">
                <label>Firstname</label>
                <input type="text" class="form-control" placeholder="John"/>
              </div>
              <div class="col-sm-4">
                <label>Lastname</label>
                <input type="text" class="form-control" placeholder="Oluwapelumi"/>
              </div>
            </div>
            <label>Email</label>
            <input type="email" class="form-control" placeholder="Otitoju@gmail.com"/>

            <label>password</label>
            <input type="password" class="form-control" placeholder="My password"/>

            <label>Confirm password</label>
            <input type="password" class="form-control" placeholder="confirm password"/>

            <label>Specialization</label>
            <input type="text" class="form-control" placeholder="Dentist"/>

            <label>Phone Number</label>
            <input type="number" class="form-control" placeholder="08104215771"/>
            <hr/>
            <div class="text-center">
              <button class="btn btn-primary">
                <i class="fa fa-plus-circle" aria-hidden="true"></i> Update
              </button>
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
