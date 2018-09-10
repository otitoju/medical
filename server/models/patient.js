const mongoose = require('mongoose')
const mongodbErrorHandler = require('mongoose-mongodb-errors')

const patientTable = new mongoose.Schema({
    marital:String,
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
    phone:Number,
    address:String
})
patientTable.plugin(mongodbErrorHandler)
module.exports = mongoose.model('patient', patientTable)