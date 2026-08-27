const express = require('express');
const {AirplaneController}= require('../../controller')
const router = express.Router();
const {AirplaneMiddleware} = require('../../middleware')


// /api/v1/airplanes ---> POST
router
       .post ('/',
        AirplaneMiddleware.validateCreateRequest,
        AirplaneController.createAirplane)



        //api/v1/airplanes/---->GET
router 
     .get('/',AirplaneController.getAllAirplanes);


router
     .get('/:id', AirplaneController.getAirplane);
module.exports = router;