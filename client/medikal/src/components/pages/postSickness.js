import React, { Component } from 'react'

export default class postSickness extends Component {
  render() {
    return (
      <div>
        <div class="container my-5">
          <div class="row justify-content-center">
            <div class="col-md-9 col-lg-9 col-xs-9">
                  
                    <form class="border border-light p-5" style={{marginTop:'20px', marginBottom:'20px'}}>

            

                        <p class="text-center h4 mb-4">Post common sickness</p>
                        <hr/>
                        <div class="form-group row">
                            <div class="col-sm-6">
                                <label>Sickness name:</label>
                                <input type="text" class="form-control" placeholder=""/>
                            </div>
                        </div>

                        <div class="form-group">
                            <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="8" placeholder="Causes of sickness" ></textarea>
                        </div>

                        <div class="form-group">
                            <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="8" placeholder="Symptoms" ></textarea>
                        </div>

                        <div class="form-group">
                            <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="8" placeholder="Precaution" ></textarea>
                        </div>

                        <div class="form-group">
                            <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="8" placeholder="Treatment" ></textarea>
                        </div>

                        <div class="form-group">
                            <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="8" placeholder="service details" ></textarea>
                        </div>

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

                        <div class="text-center">
                        <button class="btn btn-success" type="submit" ><i class="fa fa-plus-circle" aria-hidden="true"></i> Post</button>    </div>  
                    </form>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
