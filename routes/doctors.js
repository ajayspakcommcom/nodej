const express = require('express');
const router = express.Router();

const controller = require('../controller/doctors');

router.get('/getmydoctorlist/:empId', controller.getMyDoctorList);
router.get('/getdoctordetails/:doctorId', controller.getDoctorDetails);
router.post('/getdoctordetails/:doctorId', controller.getDoctorDetails);
//router.post('/save-details/:empId', controller.addBrandDetails);
router.post('/save-details/', controller.addBrandDetails);


module.exports = router;


/**
 *  get doctor list
 *  get doctor profile
 *  save medicine report
 * 
 */