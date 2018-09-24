import React, { Component } from 'react'

export default class login extends Component {
  render() {
    return (
      <div>
                <div class="container my-5">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6 col-xs-6">
                        
                  <form class="text-center border border-light p-5">
                  <p class="h4 mb-4"> Admin <strong>Sign in</strong></p>
      
                  <input type="text" id="defaultLoginFormText" class="form-control mb-4" placeholder="Username"/>
      
      
                  <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password"/>
                          <div class="text-center mb-4">
                                      <button type="button" class="btn btn-primary btn-block z-depth-2">Log in <i class="fa fa-sign-in ml-1"></i></button>
                          </div>
                        </form>
                  </div>
                </div>
              </div>
      </div>
    )
  }
}
