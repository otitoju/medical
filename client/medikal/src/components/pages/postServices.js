import React, { Component } from 'react'


export default class postServices extends Component {
  render() {
    return (
      <div>
        <div class="container my-5">
          <div class="row justify-content-center">
            <div class="col-md-9 col-lg-9 col-xs-9">
                
                  
            <form class=" border border-light p-5" style={{marginTop:'20px', marginBottom:'20px'}}>

            <p class="text-center h4 mb-4">Post medical service</p>
            <hr/>
            <div class="form-group row">
              <div class="col-sm-6">
                <label>Title:</label>
                <input type="text" class="form-control" placeholder=""/>
              </div>
            </div>
    
        
            <div class="form-group">
              <label>Service details:</label>
                <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="8" placeholder="" ></textarea>
            </div>
        
            <div className="text-center">
            <button class="btn  btn-success" type="submit" ><i class="fa fa-plus-circle" aria-hidden="true"></i> Push to service</button> 
            </div>     
        </form>
            </div>
          </div>
        </div>


      </div>
    )
  }
}
