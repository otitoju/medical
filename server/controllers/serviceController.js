const service = require('../models/service')

exports.postNewService = async (req, res) => {
    const body = req.body
    if(!body.name || !body.details) {
        res.status(204).json({
            message:'Please fill all fields'
        })
    }
    else{
        const info = await service.create(req.body)
        res.json({
            message:'You have successfully created new medical service'
        })
    }
}
//get all service
exports.findAllServices = async (req, res) => {
    const info = await service.find().sort({'_id':-1})
    res.json({info: info})
}