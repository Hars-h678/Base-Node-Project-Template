
const express = require('express')

const router = express.Router();

const { AirportController } = require('../../controller')
const {AirportMiddleware} = require('../../middleware')
// api/v1/airport ---->POST

router
      .post('/', AirportMiddleware.validateCreateRequest,AirportController.createAirport)

// api/v1/cities --->GET

router
      .get('/', AirportController.getAllAirports);


router
     .get('/:id', AirportController.getAirport);

router
     .delete('/:id',  AirportController.deleteAirport);     
module.exports = router;




