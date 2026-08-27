const express = require('express')
 const airplaneRoutes = require('./airplane-route')
//const { InfoController,AirplaneController }= require('../../controller')
const router = express.Router();


// router.get('/info',InfoController.info);
// router.post('/airplanes',AirplaneController.createAirplane);



router.use('/airplanes',airplaneRoutes)

module.exports =router;