const mongoose = require('mongoose')
const mongodbErrorHandler = require('mongoose-mongodb-errors')
const scheduleSchema = new mongoose.Schema({
    surname:{type:String, trim:true},
    firstname:{type:String, trim:true},
    lastname:{type:String, trim:true},
    gender:{type:String, trim:true},
    email:{type:String, trim:true},
    phone:{type:Number, trim:true},
})
scheduleSchema.plugin(mongodbErrorHandler)
module.exports = mongoose.model('schedule', scheduleSchema)