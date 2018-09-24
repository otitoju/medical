import React, { Component } from 'react'
//import { registerPatient } from '../../api/api'
import { Link, Redirect } from 'react-router-dom'
import '../css/reg.css'

export default class signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            surname: '',
            firstname:'',
            lastname:'',
            dob:'',
            email:'',
            gender:'',
            disability:'',
            address:'',
            occupation:'',
            phone:'',
            genotype:'',
            marital:'',
            response:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    async handleSubmit(e) {
        e.preventDefault()
        const { surname, firstname, lastname, email, gender, phone, genotype, occupation, disability, marital, address, dob } = this.state
        fetch('http://localhost:7000/patient', {
           method: 'POST',
           headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
           },
           body:JSON.stringify({
            surname:surname,
            firstname:firstname,
             lastname:lastname,
             email:email,
             gender:gender,
             phone:phone,
             genotype:genotype,
             occupation:occupation,
             disability:disability,
             marital:marital,
             address:address,
             dob:dob
           }) 
        })
        .then( res => res.json())
        .then( res => {
            console.log(res)
            this.setState({response:res.message})
        })
        .catch( err => console.log(err))
        // const patient = await registerPatient(this.state)
        // this.setState({response:patient})
        // console.log(patient)
    }
    handleSurname(e) {
        this.setState({surname: e.target.value})
    }
    handleFirstname(e) {
        this.setState({firstname: e.target.value})
    }
    handleLastname(e) {
        this.setState({lastname: e.target.value})
    }
    handleDob(e) {
        this.setState({dob: e.target.value})
    }
    handleOccupation(e) {
        this.setState({occupation: e.target.value})
    }
    handleGender(e) {
        this.setState({gender: e.target.value})
    }
    handlePhone(e) {
        this.setState({phone: e.target.value})
    }
    handleEmail(e) {
        this.setState({email: e.target.value})
    }
    handleDisability(e){
        this.setState({disability: e.target.value})
    }
    handleAddress(e) {
        this.setState({address: e.target.value})
    }
    handleMarital(e) {
        this.setState({marital: e.target.value})
    }
    handleDate(e) {
        this.setState({date: e.target.value})
    }
    handleGenotype(e) {
        this.setState({genotype: e.target.value})
    }

  render() {
    return (
      <div>
        <div class="container my-5">
          <div class="row justify-content-center">
            <div class="col-md-9 col-lg-9 col-xs-9">
                <h2 class="text-center font-bold pt-4 pb-5 mb-5"><strong>Patient Registration form</strong></h2>
                <h4 style={{textAlign:'center'}}> {this.state.response}</h4>
                <hr/>
                <form id="contact-form" method="POST">
            
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" name="name" class="form-control" value={this.state.surname} onChange={this.handleSurname.bind(this)}/>
                                        <label for="name" class="">Surname</label>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                        <div class="md-form mb-0">
                                            <input type="text" id="name" name="name" class="form-control" value={this.state.firstname} onChange={this.handleFirstname.bind(this)}/>
                                            <label for="name" class="">First Name</label>
                                        </div>
                                    </div>
                                <div class="col-md-4">
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" name="name" class="form-control" value={this.state.lastname} onChange={this.handleLastname.bind(this)}/>
                                        <label for="" class="">Last Name</label>
                                    </div>
                                </div>
            
                            </div>
                            <div class="row">
                                    <div class="col-md-4">
                                        <div class="md-form mb-0">
                                            <input type="email" id="email" name="email" class="form-control" value={this.state.email}onChange={this.handleEmail.bind(this)}/>
                                            <label for="subject" class="">Email address <i class="fa fa-message ml-1"></i></label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="md-form mb-0">
                                            <input type="text" id="name" name="name" class="form-control" value={this.state.occupation} onChange={this.handleOccupation.bind(this)}/>
                                            <label for="subject" class="">Occupation</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="md-form mb-0">
                                            <input type="text" id="name" name="name" class="form-control" value={this.state.address} onChange={this.handleAddress.bind(this)}/>
                                            <label for="subject" class="">Home Address</label>
                                        </div>
                                    </div>
                                    
                            </div>
                            <div class="row">
                                    <div class="col-md-4">
                                            <div class="md-form mb-0">
                                                <input type="text" id="subject" name="subject" class="form-control" value={this.state.gender} onChange={this.handleGender.bind(this)}/>
                                                <label class="">Gender</label>
                                            </div>
                                    </div>
                                    <div class="col-md-4">
                                            <div class="md-form mb-0">
                                                <input type="text" id="phone" name="phone" class="form-control" value={this.state.phone} onChange={this.handlePhone.bind(this)}/>
                                                <label class="">Phone Number</label>
                                            </div>
                                    </div>
                                    <div class="col-md-4">
                                            <div class="md-form mb-0">
                                                <input type="date" id="phone" name="date" class="form-control" value={this.state.date} onChange={this.handleDate.bind(this)}/>
                                                <label class="">Date of Birth</label>
                                            </div>
                                    </div>
                            </div>
                            <div class="row">
                                    
                                    <div class="col-md-4">
                                            <div class="md-form mb-0">
                                                <input type="text" id="disability" name="" class="form-control" value={this.state.disability} onChange={this.handleDisability.bind(this)}/>
                                                <label class="">Disability</label>
                                            </div>
                                    </div>
                                    <div class="col-md-4">
                                            <div class="md-form mb-0">
                                                <input type="text" id="marital" name="" class="form-control" value={this.state.marital} onChange={this.handleMarital.bind(this)}/>
                                                <label class="">Marital Status</label>
                                            </div>
                                    </div>
                                    <div class="col-md-4">
                                            <div class="md-form mb-0">
                                                <input type="text" id="geno" name="geno" class="form-control" value={this.state.genotype} onChange={this.handleGenotype.bind(this)}/>
                                                <label class="">Genotype </label>
                                            </div>
                                    </div>
                            </div>
                            <div class="text-center text-md-left">
                                <button class="btn btn-primary" onClick={this.handleSubmit}>signup <i class="fa fa-sign-in ml-1"></i></button>
                            </div>
                        </form>
               
              
            </div>
          </div>
        </div>

            
      </div>
    )
  }
}
