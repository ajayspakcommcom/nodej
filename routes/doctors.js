const express = require('express');
const router = express.Router();

const controller = require('../controller/doctors');

router.get('/getmydoctorlist/:empId', controller.getMyDoctorList);
router.get('/getdoctordetails/:doctorId', controller.getDoctorDetails);

module.exports = router;


/**
 *  get doctor list
 *  get doctor profile
 *  save medicine report
 * 
 */