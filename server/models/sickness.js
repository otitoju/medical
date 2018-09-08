const mongoose = require('mongoose')
const mongodbErrorHandler = require('mongoose-mongodb-errors')

const sicknessSchema = new mongoose.Schema({
    name:{type:String, trim:true},
    symptoms:String,
    precaution:String,
    treatment:String,
    comments:[{
        author:String,
        message:String
    }]
})
sicknessSchema.plugin(mongodbErrorHandler)
module.exports = mongoose.model('sickness', sicknessSchema)
exports.addNewComment = (query, comment) => {
    Sick.update(query,
    {
        $push:{
            comments:comment
        }
    })
}