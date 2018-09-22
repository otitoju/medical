import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class payBill extends Component {
  render() {
    return (
      <div>
            <h1 class="h1-responsive font-weight-bold text-center my-5">Pay Your Bills Here!</h1>
            <p class="text-center w-responsive mx-auto mb-5">Please select how you would like to pay your bill</p>
            <div class="form-group">
                                
                                <select class="form-control" id="sel1">
                                  <option>--Pay with--</option>
                                  <option>Paypal</option>
                                  <option>PayStack</option>
                                  <option>Direct to hospital account</option>
                                </select>
                                <button className="btn btn-primary">Proceed to pay</button>
             </div>
      </div>
    )
  }
}

