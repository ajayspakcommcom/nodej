const express = require('express');
const router = express.Router();

const controller = require('../controller/doctors');

router.get('/getmydoctorlist/:empId', controller.getMyDoctorList);

module.exports = router;

//router.get('/account-mapping/:empID', controller.getAccountMappingPage);


/**
 *  get doctor list
 *  get doctor profile
 *  save medicine report
 * 
 */