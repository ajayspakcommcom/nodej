const express = require('express');
const router = express.Router();

const controller = require('../controller/auth');

//router.post('/getmydoctorlist/:empId', controller.getMyDoctorList);
router.post('/login', controller.getLogin);

module.exports = router;
