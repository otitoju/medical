import React, { Component } from 'react'

export default class appointment extends Component {
  render() {
    return (
      <div>
                <div col-sm-6>
            <section class="section">

                <h2 class="h1-responsive font-weight-bold text-center my-5">Schedule An Appointment</h2>
                <p class="text-center w-responsive mx-auto mb-5">If you are expriencing any medical emergency please call +234-0806050540<br/>
                else you will be contacted before an appointment is offered</p>
            
                <div class="row">
                    <div class="col-md-9 offset-2 mb-5">
                        <form id="contact-form" method="POST">
            
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" name="name" class="form-control"/>
                                        <label for="name" class="">Patient Surname</label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                        <div class="md-form mb-0">
                                            <input type="text" id="name" name="name" class="form-control"/>
                                            <label for="name" class="">First Name</label>
                                        </div>
                                    </div>
                                <div class="col-md-3">
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" name="name" class="form-control"/>
                                        <label for="" class="">Last Name</label>
                                    </div>
                                </div>
            
                            </div>
                            <div class="row">
                                    <div class="col-md-9">
                                        <div class="md-form mb-0">
                                            <input type="email" id="email" name="email" class="form-control"/>
                                            <label for="subject" class="">Email address</label>
                                        </div>
                                    </div>
                                    
                            </div>
                            <div class="row">
                                    <div class="col-md-4">
                                            <div class="md-form mb-0">
                                                <input type="text" id="subject" name="subject" class="form-control"/>
                                                <label class="">Gender</label>
                                            </div>
                                    </div>
                                    <div class="col-md-5">
                                            <div class="md-form mb-0">
                                                <input type="text" id="phone" name="phone" class="form-control"/>
                                                <label class="">Phone Number</label>
                                            </div>
                                    </div>
                            </div>
                        </form>
            
                        <div class="text-center text-md-left">
                            <button class="btn btn-primary">Submit Appointment</button>
                        </div>
                        <div class="status"></div>
                    </div>
                </div>
            
            </section>
        </div>
      </div>
    )
  }
}
