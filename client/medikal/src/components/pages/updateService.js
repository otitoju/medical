import React, { Component } from 'react'
import { updateServices } from '../../api/api'

export default class updateService extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            details:''
        }
    }
    async handleUpdate(e){
        e.preventDefault()
        const { name, details } = this.state
        const Update = await updateServices(this.state)
        console.log(Update)
    }
    handleName(e) {
        this.setState({name: e.target.value})
    }
    handleDetails(e) {
        this.setState({details: e.target.value})
    }
    componentDidMount() {
        //this.handleUpdate(this.props.match.params.doctorId)
    }
  render() {
    return (
      <div>
        <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-md-9 col-lg-9 col-xs-9">
              
                
          <form class=" border border-light p-5" style={{marginTop:'20px', marginBottom:'20px'}}>

          <p class="text-center h4 mb-4"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit medical service</p>
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
          <button class="btn  btn-success" type="submit" ><i class="fa fa-upload" aria-hidden="true"></i> Push to service</button> 
          </div>     
      </form>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
