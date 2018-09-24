import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class payBill extends Component {
  render() {
    return (
      <div>
            <h1 class="h1-responsive font-weight-bold text-center my-5">Pay Your Bills Here!</h1>
            <p class="text-center w-responsive mx-auto mb-5">Please select how you would like to pay your bill</p>
            <div className="col-md-4" >
              <div class="form-group">                   
                                  <select class="form-control" id="sel1">
                                    <option>--Pay with--</option>
                                    <option>Paypal</option>
                                    <option>PayStack</option>
                                    <option>Direct to hospital account</option>
                                  </select>
                                  <button className="btn btn-success">Proceed to pay</button>
              </div>
            </div>
          <div>
          <ul class="list-unstyled list-inline text-center" style={{fontSize:'80px'}}>
            <li class="list-inline-item" >
                <a class="btn-floating btn-fb mx-1">
                <i class="fa fa-cc-paypal"> </i>
                </a>
            </li>
            <li class="list-inline-item" >
                <a class="btn-floating btn-tw mx-1">
                <i class="fa fa-cc-mastercard"> </i>
                </a>
            </li>
            <li class="list-inline-item">
                <a class="btn-floating btn-gplus mx-1">
                <i class="fa fa-cc-stripe"> </i>
                </a>
            </li>
            <li class="list-inline-item">
                <a class="btn-floating btn-li mx-1">
                <i class="fa fa-credit-card"> </i>
                </a>
            </li>
            <li class="list-inline-item">
                <a class="btn-floating btn-visa mx-1">
                <i class="fa fa-cc-visa"> </i>
                </a>
            </li>
            </ul>
          </div>
      </div>
    )
  }
}

