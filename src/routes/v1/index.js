const express = require('express')
 const airplaneRoutes = require('./airplane-route')
 const cityRoutes = require('./city-route');
const airportRoutes = require('./airport-routes')
//const { InfoController,AirplaneController }= require('../../controller')
const router = express.Router();


// router.get('/info',InfoController.info);
// router.post('/airplanes',AirplaneController.createAirplane);



router.use('/airplanes',airplaneRoutes)
router.use('/cities' , cityRoutes);
router.use('/airports',airportRoutes);

module.exports =router;