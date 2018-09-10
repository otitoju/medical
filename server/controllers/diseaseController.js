const disease = require('../models/sickness')

//post new disease
exports.postNewDisease = async (req, res, next) => {
    const body =  req.body
    if(!body.name || !body.symptoms || !body.precaution || !body.treatment){
        res.status(403).json({message:`please fill all fields`})
    }
    else{
        const info = await disease.create(body)
        res.status(200).json({message:info})
    }
}

//get all disease from the database
exports.getAllDisease = async (req, res, next) => {
    const info = await disease.find().sort({'_id':-1})
    res.status(200).json({message:info})
}

//get single disease
exports.getsingleDisease = async (req, res) => {
    const info = await disease.findById(req.params.id)
    res.status(200).json({message:info})
}

//delete post
exports.deletePost = async (req, res) => {
    const info = await disease.findByIdAndRemove(req.params.id)
    res.status(200).json({message:info})
}

//update post
exports.updatePost = async (req, res) => {
    const info = await disease.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json({message:info})
}

//Add comment 
exports.addComment = (req, res) => {
    
}
