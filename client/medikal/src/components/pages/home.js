import React, { Component } from 'react'
import logo1 from '../images/Medical-Device.jpg'
import logo2 from '../images/seth.jpg'
import logo3 from '../images/medical-negligence.jpg'

export default class home extends Component {
  render() {
    return (
      <div>
          
          <div id="slider" >
                <div id="welcome">
                    <h1  className="font-weight-bold text-uppercase mt-3 mb-4">Welcome to life changing site</h1>
                    <h3 class="font-weight-light text-uppercase mt-3 mb-4">Health is wealth, don't take your health for granted</h3>
                    <h5 class="font-weight-bold text-uppercase mt-3 mb-4">We care about your health</h5>
                </div>
         </div>
         <div className="card-deck" style={{marginTop:'10px'}}>
                    <div class="card card-image mb-3" id="div1">
                    <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                        <div>
                            <h5 class="pink-text"><i class="fa fa-pie-chart"></i> Health Quote</h5>
                            <h3 class="card-title pt-2"><strong> A Simple Path: Mother Teresa </strong></h3>
                            <p>The greatest disease in the West today is not TB or leprosy; it is being unwanted, unloved, and uncared for. We can cure physical diseases with medicine, but the only cure for loneliness, despair, and hopelessness is love. There are many in the world who are dying for a piece of bread but there are many more dying for a little love. The poverty in the West is a different kind of poverty -- it is not only a poverty of loneliness but also of spirituality. There's a hunger for love, as there is a hunger for God.</p>
                            <a class="btn btn-pink"><i class="fa fa-clone left"></i> View Quote</a>
                        </div>
                    </div>
                </div>
                <div class="card card-image mb-3" id="div2">
                    <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                        <div>
                            <h5 class="pink-text"><i class="fa fa-pie-chart"></i> Health Quote</h5>
                            <h3 class="card-title pt-2"><strong> A Simple Path: Mother Teresa </strong></h3>
                            <p>The greatest disease in the West today is not TB or leprosy; it is being unwanted, unloved, and uncared for. We can cure physical diseases with medicine, but the only cure for loneliness, despair, and hopelessness is love. There are many in the world who are dying for a piece of bread but there are many more dying for a little love. The poverty in the West is a different kind of poverty -- it is not only a poverty of loneliness but also of spirituality. There's a hunger for love, as there is a hunger for God.</p>
                            <a class="btn btn-pink"><i class="fa fa-clone left"></i> View Quote</a>
                        </div>
                    </div>
                </div>
         </div>
         <div class="card-deck" >
                <div class="card mb-4">
                <div class="view overlay">
                    <img class="card-img-top" src={logo1} alt="Card image cap"/>
                    <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                    </a>
                </div>
            
                <div class="card-body">
            
                    <h4 class="card-title">Medical Laboratory</h4>
                    <p class="card-text">A medical laboratory or clinical laboratory is a laboratory where tests are carried out on clinical specimens in order to obtain information about the health of a patient in order to provide diagnosis, treatment, and prevention of disease.</p>
            
                </div>
            
                </div>
                <div class="card mb-4">
            
                <div class="view overlay">
                    <img class="card-img-top" src={logo2} alt="Card image cap"/>
                    <a href="#">
                    <div class="mask rgba-white-slight"></div>
                    </a>
                </div>

                <div class="card-body">
            
                    <h4 class="card-title">Sethoscope</h4>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
                </div>
            
                </div>
                <div class="card mb-4">

                <div class="view overlay">
                    <img class="card-img-top" src={logo3} alt="Card image cap"/>
                    <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                    </a>
                </div>
            
                <div class="card-body">
            
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
                </div>
            
                </div>
            
            </div>
      </div>
    )
  }
}
