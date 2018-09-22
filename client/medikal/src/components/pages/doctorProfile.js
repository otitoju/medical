import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { checkDoctorProfile} from '../../api/api'

export default class doctorProfile extends Component {
  constructor(){
    super()
    this.state = {
      doctor: ''
    }
  }
  async componentDidMount() {
    const doctor = await checkDoctorProfile(this.props.match.params.doctorId)
    this.setState({doctor})
  }
  render() {
    const { doctor} = this.state
    return (
      <div>
          <div class="card mb-3 text-center">
        <div class="card-body">
            <div class="row">
    
                <div class="col-md-4 offset-md-1 mx-3 my-3">
                    <div class="view overlay">
                        <img src={require('../images/smoky-mountain.jpg')} class="img-fluid" alt="Doctor image"/>
                        <a>
                            <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    <h5>Availability: Currently busy</h5>
                </div>
                <div class="col-md-7 text-left ml-3 mt-3">
                    <a href="" class="green-text">
                        <h6 class="font-bold pb-1"><i class="fa fa-desktop"></i> Work</h6>
                    </a>
                    <h4 class="mb-4"><strong>Profile</strong></h4>
                    <h5>Surname: {doctor.surname}</h5>
                    <h5>Firstname: {doctor.firstname}</h5>
                    <h5>Lastname: {doctor.lastname}</h5>
                    <h5>Title: {doctor.title}</h5>
                    <h5>Specialization: {doctor.specialization}</h5>
                    <h5>Work At: </h5>
                    <h5>Phone Number: {doctor.phone}</h5>
                    <h5>Gender: {doctor.gender}</h5>
                    <h5>E-mail: {doctor.email}</h5>
                    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modalPoll">Book an appointment</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade right" id="modalPoll" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
data-backdrop="false">
<div class="modal-dialog modal-full-height modal-right modal-notify modal-info" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <p class="heading lead">Book An Appointment
      </p>

      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true" class="white-text">×</span>
      </button>
    </div>

    <div class="modal-body">
      <div class="text-center">
        <i class="fa fa-file-text-o fa-4x mb-3 animated rotateIn"></i>
        <p>
          <strong>Doctors name</strong>
        </p>
      </div>

      <hr/>

      <p class="text-center">
        <strong>Enter your credientials</strong>
      </p>
                <div class="md-form ">
                    <input type="text" id="subject" name="subject" class="form-control"/>
                    <label for="subject" class="">Surname</label>
                </div>
                <div class="md-form ">
                        <input type="text" id="subject" name="subject" class="form-control"/>
                        <label for="subject" class="">First Name</label>
                </div>
                <div class="md-form ">
                        <input type="text" id="subject" name="subject" class="form-control"/>
                        <label for="subject" class="">Last Name</label>
                </div>
                <div class="md-form ">
                        <input type="text" id="subject" name="subject" class="form-control"/>
                        <label for="subject" class="">Phone number</label>
                </div>
                <div class="md-form ">
                    <input type="email" id="subject" name="subject" class="form-control"/>
                    <label for="subject" class="">Email address</label>
                </div>
                <div class="md-form ">
                        <input type="text" id="subject" name="subject" class="form-control"/>
                        <label for="subject" class="">Gender</label>
                </div>

    </div>

    <div class="modal-footer justify-content-center">
      <a type="button" class="btn btn-primary waves-effect waves-light">Send
        <i class="fa fa-paper-plane ml-1"></i>
      </a>
      <a type="button" class="btn btn-outline-primary waves-effect" data-dismiss="modal">Cancel</a>
    </div>
  </div>
</div>
</div>
      </div>
    )
  }
}
