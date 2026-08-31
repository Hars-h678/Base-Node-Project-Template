
const express = require('express')

const router = express.Router();

const { FlightController } = require('../../controller')
const { FlightMiddleware} = require('../../middleware')
// api/v1/flights ---->POST

router
      .post('/', FlightMiddleware.validateCreateRequest,FlightController.createFlight)

// api/v1/flgihts ? trips = MUM-DEL--->GET

router.get('/',FlightController.getAllFlights);

    
module.exports = router;
