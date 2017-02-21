var express = require('express');
var router  = express.Router();
var controller = require('../controllers/house.controlle.js')

// GET all questions
router.get('/', controller.showHouseList)
router.post('/', controller.createHouseList)
router.put('/', controller.updateCreateList)
router.delete('/', controller.deleteCreateList)

module.exports = router;
