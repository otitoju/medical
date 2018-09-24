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

//delete service
exports.removeService = async (req, res) => {
    const info = await service.findByIdAndRemove(req.params.id)
    res.json({message:`You have successfully remove this service`})
}

//update service 
exports.updateService = async (req, res) => {
    const { details, name} = req.body
    const info = await service.findOne({_id: req.params.id})
    info.name = name || info.name
    info.details = details || info.details
    await info.save()
    res.json({message:'successfully updated service'})
}

//find a single service
exports.findSingleService = async (req, res) => {
    const info = await service.findById(req.params.id)
    res.json({message: info})
}