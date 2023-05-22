const express = require('express');
const router = express.Router();

const controller = require('../controller/TestController');

router.get('/', controller.getTest);
router.get('/list', controller.getTestList);
router.post('/add', controller.postTest);
router.get('/detail/:id', controller.getTestDetail);
router.post('/:id', controller.postTestDetail);

module.exports = router;