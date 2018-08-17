const doctor = require('../models/doctor')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../configuration_folder/doctorconfig')

//new doctor
exports.createNewDoctor = async (req, res) => {
    const hashpassword = bcrypt.hashSync(req.body.password, 10)
    const body = req.body
    if(!body.surname || !body.firstname || !body.lastname || !body.dob || !body.gender || !body.specialization || !body.phone || !body.email || !body.password) {
        return res.status(422).json({message:`Please ensure all fields are properly filled`})
    }
    else if(body.surname.length > 25) {
        return res.status(403).json({message:`Surname is too long, ensure surname is not more than 25 characters`})
    }
    else if(body.firstname.length > 25 || body.lastname.length > 25){
        return res.status(403).json({message:`Name too long, please check your names`})
    }
    else if(body.gender != 'male' && body.gender != 'female') {
        return res.status(403).json({message:`Please who are you?`})
    }
    else if(body.phone.length > 11){
        return res.status(403).json({message:`phone number is too long`})
    }
    else{
        const info = await doctor.create(req.body)
        info.password = hashpassword
        info.save()
        res.status(200).json({info:info})
    }
}
//doctor signin
exports.loginDoctor = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(403).json({message:`please fill all fields and login`})
    }
    else {
        const info = await doctor.findOne({email:req.body.email})
        if(!info){
            return res.status(400).json({message:`no doctor with such email`})
        }
        else{
            const passwordIsValid = await bcrypt.compareSync(req.body.password, info.password)
            if(!passwordIsValid){
                return res.status(403).json({message:`Wrong password`})
            }
            else{
                const token = await jwt.sign({id:info.id, surname:info.surname, firstname:info.firstname, lastname:info.lastname, dob:info.dob, email:info.email, phone:info.phone, specialization:info.specialization}, config.doctorOat, {expiresIn:'24h'})
                var spec = info.specialization
                return res.status(200).json({
                    message:`successful`,
                    token:token,
                    spec:spec
                })
            }
        }
    }
}

//decode token
exports.decodeToken = async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]
    if(!token){
        res.json('Wrong or invalid token')
    }
    const decode = await jwt.verify(token, config.doctorOat)
    const result = await doctor.findById(decode.id)
    res.json(result)
}
//get all doctors
exports.getAllDoctors = async (req, res) => {
    const info = await doctor.find().sort({'_id':-1})
    return res.status(200).json({info:info})
}