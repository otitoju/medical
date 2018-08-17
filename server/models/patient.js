const mongoose = require('mongoose')
const mongodbErrorHandler = require('mongoose-mongodb-errors')

const patientTable = new mongoose.Schema({
    title:String,
    surname:String,
    firstname:String,
    lastname:String,
    bloodgroup:String,
    genotype:{type:String},
    disability:{type:String, default:null},
    patienttype:String,
    diagnosis:String,
    prescribtion:String,
    occupation:String,
    email:String,
    dob:String,
    phone:Number
})
patientTable.plugin(mongodbErrorHandler)
module.exports = mongoose.model('patient', patientTable)