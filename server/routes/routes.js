const express = require('express')
const router = express.Router()
const { catchErrors } = require('../handlers/errorhandler')
const doctorcontroller = require('../controllers/doctorcontroller')
const patientcontroller = require('../controllers/patientcontroller')
const diseasecontroller = require('../controllers/diseaseController')

//doctor routes
router.post('/register', catchErrors(doctorcontroller.createNewDoctor))
router.post('/signin', catchErrors(doctorcontroller.loginDoctor))
router.get('/decode', catchErrors(doctorcontroller.decodeToken))
router.get('/alldoctors', catchErrors(doctorcontroller.getAllDoctors))
router.post('/search', catchErrors(doctorcontroller.searchDoctor))
router.get('/doctor/:id', catchErrors(doctorcontroller.getSingleDoctor))

//patient routes
router.post('/patient', catchErrors(patientcontroller.registerNewPatient))

//disease routes
router.post('/disease', catchErrors(diseasecontroller.postNewDisease))
router.get('/disease/get', catchErrors(diseasecontroller.getAllDisease))
router.get('/disease/:id', catchErrors(diseasecontroller.getsingleDisease))
router.put('/update/:id', catchErrors(diseasecontroller.updatePost))
router.delete('/delete/:id', catchErrors(diseasecontroller.deletePost))
//router.post('/comment/:id', catchErrors(diseasecontroller.addComment))
// const Diseases = require('../models/sickness')

// const addNewComment = function(query, comment){
//     Diseases.update(query, {
//         $push:{
//             comments:comment
//         }
//     })
// }

// router.post('/comment/:id', (req,res) => {
//     let author = req.body.author
//     let message = req.body.message
//     Diseases.findById(req.params.id, (err, recipe)=> {
//         if(err){
//             console.log(err)
//         }
//         else{
//             Diseases.create({text:req.body.text}, (err, comment)=>{
//                 if(err){
//                     console.log(err)
//                 }
//                 else{
                    
//                     const comments = Diseases.comments
//                     // comment.author. = userId
//                     // comment.author.username = username
//                     // comment.save()

//                     //push comment to recipe model
//                     comments.push(comment)
//                     Diseases.save()
//                     console.log('yes')

//                 }
//             })
//         }
//     })
// })
module.exports = router