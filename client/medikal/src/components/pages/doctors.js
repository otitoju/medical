import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAllDoctors, searchDoctor } from '../../api/api'

export default class doctors extends Component {
  constructor(){
    super()
    this.state ={
      allDoctors: [],
      name:'',
      search:[],
      msg:'',
      match:''
    }
  }
  async componentDidMount() {
    const doctor = await getAllDoctors()
    this.setState({allDoctors: doctor.info})
  }
  // async componentDidUpdate(){
  //   const doctor = await getAllDoctors()
  //   this.setState({allDoctors: doctor.info})
  // }
  componentWillUnMount() {
    getAllDoctors()
  }
  async handleSearch(e){
    e.preventDefault()
    const { name } = this.state
    const search = await searchDoctor( this.state)
    if(search.info){
      this.setState({search:search.info, match:search.match})
    }
    else{
      this.setState({msg:search.message})
    }
  }
  handleName(e) {
    this.setState({name: e.target.value})
  }

  render() {
    return (
      <div>
        <div class="jumbotron text-center blue-grey lighten-5 ">
            <h1 class="font-weight-bold text-uppercase text-center mt-3 mb-4" style={{fontFamily:'Bookman Old Style'}}>Find a Doctor Of Your Choice Here</h1>
            <form class="form-inline active-cyan-3 active-cyan-4" style={{marginBottom:'10px'}}>
                <i class="fa fa-search" aria-hidden="true"></i>
                <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search for a doctor via name or specialization" aria-label="Search" value={this.state.name} onChange={this.handleName.bind(this)}/>
                <button class="btn btn-mdb-color btn-rounded btn-sm my-0 ml-sm-2" type="submit" onClick={this.handleSearch.bind(this)}>Search</button>
            </form>

            {this.state.msg}
            {this.state.match}
            <div class="card-deck" >
            { this.state.search.map( (res, index) => {
              return <div class="col-md-3" key={index}>
                <div class="card testimonial-card" style={{marginBottom:'20px'}}>
                    <div class="card-up indigo lighten-1">
                    </div>
     
                    <div class="avatar mx-auto white"><img src={require('../images/smoky-mountain.jpg')} class="rounded-circle" style={{width:'150px',height:'150px'}}/>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">Name: {res.firstname}</h4>
                      <hr/>
                      <h5>Specialization: {res.specialization}</h5>
                      <h6>Age: 36</h6>
                    </div>
                    <Link to={`/doctor/${res._id}`} className="nav-link" style={{color:'rgb(97, 5, 5)'}}>
                    <button class="btn btn-primary">View profile</button>
                    </Link>
                </div>
                </div>
            })}
            </div>
    </div>
    
    <div class="card-deck" style={{marginBottom:'10px'}}>
    {this.state.allDoctors ? this.state.allDoctors.map( (doctor, index) => (
 <div class="col-md-3" key={index}>
 <div class="card testimonial-card" style={{marginBottom:'20px'}}>
         <div class="card-up indigo lighten-1">
         </div>
     
         <div class="avatar mx-auto white"><img src={require('../images/smoky-mountain.jpg')} class="rounded-circle" style={{width:'150px',height:'150px'}}/>
         </div>
     
         <div class="card-body">
             <h4 class="card-title">Name: {doctor.firstname}</h4>
             <hr/>
             <h5>Specialization: {doctor.specialization}</h5>
             <h6>Age: 36</h6>
         </div>
         <Link to={`/doctor/${doctor._id}`} className="nav-link" style={{color:'rgb(97, 5, 5)'}}>
         <button class="btn btn-mdb-color">View profile</button>
           </Link>
     </div>
</div>
    )) : (
      <h1>No available doctor yet</h1>
    ) }
       
    </div>
      </div>
    )
  }
}
