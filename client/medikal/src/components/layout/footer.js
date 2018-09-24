import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/home.css'

export default class footer extends Component {
  render() {
    return (
      <div>
        <footer class="page-footer">

            <div class="container text-center text-md-left">

            <div class="row">

                <div class="col-md-4 mx-auto">

                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">About Us</h5>
                <p>We offer the very best health service and you can schedule an appointment with us, we render 24hrs medical service, we also provide a platform where you can chat with our doctors. Your well-being is our conceern, we treat but God heals</p>

                </div>

                <hr class="clearfix w-100 d-md-none"/>

                <div class="col-md-2 mx-auto">

                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Our services</h5>

                <ul class="list-unstyled">
                    <li>
                    Prescription services
                    </li>
                    <li>
                    Home nursing services
                    </li>
                    <li>
                    Mental health care
                    </li>
                    <li>
                    Nutritional counselling
                    </li>
                </ul>

                </div>

                <hr class="clearfix w-100 d-md-none"/>

                <hr class="clearfix w-100 d-md-none"/>

                <div class="col-md-2 mx-auto">

                
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Contact us</h5>

                <ul class="list-unstyled">
                    <li>
                    otitojumedicalline@gmail.com
                    </li>
                    <li>
                    or call us @
                    </li>
                    <li>
                    +234-8104215771
                    </li>
                    <li>
                    <a class="btn-floating btn-gplus mx-1">
                    <i class="fa fa-github"> </i></a>
                    </li>
                </ul>

                </div>

            </div>

            </div>

            <hr/>

            <ul class="list-unstyled list-inline text-center py-2">
            
            <li class="list-inline-item">
                <h5 class="mb-1">Register today</h5>
            </li>
           
            <Link to="/signup">
            <li class="list-inline-item">
                <button className="btn btn-danger btn-rounded">Sign up!</button>
            </li>
            </Link>
            </ul>

            <hr/>

            <ul class="list-unstyled list-inline text-center">
            <li class="list-inline-item">
                <a class="btn-floating btn-fb mx-1">
                <i class="fa fa-facebook"> </i>
                </a>
            </li>
            <li class="list-inline-item">
                <a class="btn-floating btn-tw mx-1">
                <i class="fa fa-twitter"> </i>
                </a>
            </li>
            <li class="list-inline-item">
                <a class="btn-floating btn-gplus mx-1">
                <i class="fa fa-google-plus"> </i>
                </a>
            </li>
            <li class="list-inline-item">
                <a class="btn-floating btn-li mx-1">
                <i class="fa fa-linkedin"> </i>
                </a>
            </li>
            <li class="list-inline-item">
                <a class="btn-floating btn-dribbble mx-1">
                <i class="fa fa-dribbble"> </i>
                </a>
            </li>
            </ul>

            <div class="footer-copyright text-center py-3">© 2018 Copyright:
            <a href="https://github.com/otitoju/">Oluwapelumi</a>
            </div>
        </footer>
      </div>
    )
  }
}
