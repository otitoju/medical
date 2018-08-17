const mongoose = require('mongoose')
const mongodbErrorHandler = require('mongoose-mongodb-errors')
const doctorSchema = new mongoose.Schema({
    surname:String,
    firstname:String,
    lastname:String,
    dob:String,
    gender:String,
    specialization:String,
    phone:Number,
    email:String,
    password:String
},
{
    timestamps:true
})
doctorSchema.plugin(mongodbErrorHandler)
module.exports = mongoose.model('doctor', doctorSchema)