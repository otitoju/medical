const mongoose = require('mongoose')
const mongodbErrorHandler = require('mongoose-mongodb-errors')
const serviceSchema = new mongoose.Schema({
    name:String,
    details: String
})
serviceSchema.plugin(mongodbErrorHandler)
module.exports = mongoose.model('service', serviceSchema)