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
router.put('/changeprofile/:doctorId', catchErrors(doctorcontroller.updateDoctorProfile))

//patient routes
router.post('/patient', catchErrors(patientcontroller.registerNewPatient))

//disease routes
router.post('/disease', catchErrors(diseasecontroller.postNewDisease))
router.get('/disease/get', catchErrors(diseasecontroller.getAllDisease))
router.get('/disease/:id', catchErrors(diseasecontroller.getsingleDisease))
router.put('/update/:id', catchErrors(diseasecontroller.updatePost))
router.delete('/delete/:id', catchErrors(diseasecontroller.deletePost))
//router.post('/comment/:id', catchErrors(diseasecontroller.addComment))

module.exports = router