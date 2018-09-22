import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class signin extends Component {
  render() {
    return (
      <div>
            <div class="col-sm-4 offset-4" style={{marginTop:'20px', marginBottom:'20px'}}>
            <section class="form-simple">

                    <div class="card">
                        <div class="header pt-3 grey lighten-2">
                    
                            <div class="row d-flex justify-content-start">
                                <h3 class="deep-grey-text mt-3 mb-4 pb-1 mx-5">Log in <i class="fa fa-sign-in ml-1"></i></h3>
                            </div>
                    
                        </div>
                    
                        <div class="card-body mx-4 mt-4">
                    
                            <div class="md-form">
                                <input type="text" id="Form-email4" class="form-control"/>
                                <label for="Form-email4">Your email</label>
                            </div>
                    
                            <div class="md-form pb-3">
                                <input type="password" id="Form-pass4" class="form-control"/>
                                <label for="Form-pass4">Your password</label>
                                <p class="font-small grey-text d-flex justify-content-end">Forgot <a href="#" class="dark-grey-text font-weight-bold ml-1"> Password?</a></p>
                            </div>
                    
                            <div class="text-center mb-4">
                                <button type="button" class="btn btn-danger btn-block z-depth-2">Log in <i class="fa fa-sign-in ml-1"></i></button>
                            </div>
                            <p class="font-small grey-text d-flex justify-content-center">Don't have an account? <Link to='/signup' style={{color:'rgb(97, 5, 5)'}}> Sign up</Link></p>
                    
                        </div>
                    
                    </div>
                    
                    </section>
    </div>
      </div>
    )
  }
}
