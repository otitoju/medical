const express = require('express')
const router = express.Router()
const { catchErrors } = require('../handlers/errorhandler')
const doctorcontroller = require('../controllers/doctorcontroller')
const patientcontroller = require('../controllers/patientcontroller')

//doctor routes
router.post('/register', catchErrors(doctorcontroller.createNewDoctor))
router.post('/signin', catchErrors(doctorcontroller.loginDoctor))
router.get('/decode', catchErrors(doctorcontroller.decodeToken))
router.get('/alldoctors', catchErrors(doctorcontroller.getAllDoctors))

//patient routes
router.post('/patient', catchErrors(patientcontroller.registerNewPatient))
module.exports = router