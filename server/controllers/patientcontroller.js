const patient = require('../models/patient')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const emailExistence = require('email-existence')

exports.registerNewPatient = async (req, res) => {
    const body = req.body
    const genotype = body.genotype.toUpperCase().trim()
    const surname = body.surname.toUpperCase().trim()
    const firstname = body.firstname.toUpperCase().trim()
    const lastname = body.lastname.toUpperCase().trim()
    const email = body.email.toUpperCase().trim()
    const phone = body.phone.trim()
    const validEmail = await patient.findOne({email:req.body.email})
    
    if(!body.marital || !body.surname || !body.firstname || !body.lastname  || !body.genotype  || !body.occupation || !body.email || !body.phone){
        res.status(403).json({message:`please ensure all fields are filled`})
    }
    // else if(body.patienttype != 'regular' && body.patienttype != 'outpatient'){
    //     res.status(403).json({message:`please select a valid patient type`})
    // }
    else if(surname.length > 35 || firstname.length > 35 || lastname.length > 35){
        res.status(403).json({message:`name too long, please check your names`})
    }
    else if(genotype != 'AA' && genotype != 'AS' && genotype != 'SS' && genotype != 'AC'){
        res.status(403).json({message:`invalid genotype`})
    }
    else if(validEmail){
        res.status(403).json({message:`Email already exist`})
    }
    else{
        emailExistence.check(req.body.email, function(error, response){
            if(response === false){
                res.status(400).json({message:`invalid email address`})
            }
            else{
                const info = patient.create(body)
                res.json({info:info, successs:true})
            }
        })
        
    }
}
//search for patient
exports.searchPatient = async (req, res) => {
    const name = req.body.name
    const search = await new RegExp(name, 'i')
    if(!name){
        res.status(400).json({message:`field cannot be empty`})
    }
    else{
        const result = await patient.find({$or: [{surname:search}, {firstname:search}, {email:search}, {lastname:search}]}, {password:0})
        if(result == ''){
            res.json({message:`No record found, ${result.length} matches `})
        }
        else{
            res.json({info:result,
                match:`${result.length} matches`
            })
        }
    }
    

}