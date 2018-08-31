const patient = require('../models/patient')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.registerNewPatient = async (req, res) => {
    const body = req.body
    const genotype = body.genotype.toUpperCase().trim()
    const surname = body.surname.toUpperCase().trim()
    const firstname = body.firstname.toUpperCase().trim()
    const lastname = body.lastname.toUpperCase().trim()
    const email = body.email.toUpperCase().trim()
    const phone = body.phone.trim()
    
    if(!body.title || !body.surname || !body.firstname || !body.lastname ||!body.bloodgroup || !body.genotype || !body.patienttype || !body.occupation || !body.email || !body.phone){
        res.status(403).json({message:`please ensure all fields are filled`})
    }
    else if(body.patienttype != 'regular' && body.patienttype != 'outpatient'){
        res.status(403).json({message:`please select a valid patient type`})
    }
    else if(surname.length > 35 || firstname.length > 35 || lastname.length > 35){
        res.status(403).json({message:`name too long, please check your names`})
    }
    else if(genotype != 'AA' && genotype != 'AS' && genotype != 'SS' && genotype != 'AC'){
        res.status(403).json({message:`invalid genotype`})
    }
    else{
        const validEmail = await patient.findOne({email:req.body.email})
        if(validEmail){
            res.status(403).json({message:`Email already exist`})
        }
        else{
            const info = await patient.create(body)
            res.json({info:info})
        }
        
    }
}