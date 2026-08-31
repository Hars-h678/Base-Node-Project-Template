const {FlightService} = require('../services');
const {StatusCodes} = require('http-status-codes');


const { SuccessResponse , ErrorResponse } = require('../utils/common');
//const { error } = require('../utils/common/error-response');

/**
 * POST : /Flights
 * req-body {
 * flightNumber,
 * airplaneId,
 * departureAirportId,
 * arrivalAirportId,
 * arrivalTime, '11 :10 :00'
 * departureTime ,
 * price,
 * boardingGate,
 *  totalSeats
 * }
 *
 */
async function  createFlight(req,resp){
    // what will happen if we send request body directly in req.body ?
    // ans: it will work but it is not a good practice to send the whole req.body because it may contain some other data also which we don't want to send in the request body so we will destructure the req.body and send only the required data in the request body
   try{
   
    const Flight = await FlightService.createFlight({
        flightNumber : req.body.flightNumber,
        airplaneId : req.body.airplaneId,
        departureAirportId : req.body.departureAirportId,
        arrivalAirportId : req.body.arrivalAirportId,
        arrivalTime : req.body.arrivalTime,
        departureTime : req.body.departureTime,
        price : req.body.price,
        boardingGate : req.body.boardingGate,
        totalSeats : req.body.totalSeats

    });
        SuccessResponse.message = 'Successfully created an airport';
        SuccessResponse.data = Flight
    return resp
              .status(StatusCodes.CREATED)
              .json(SuccessResponse);

   }catch(error){
    console.log(error)
    ErrorResponse.message = 'Failed to created an airport'
    ErrorResponse.error = error;
     return resp
              .status(StatusCodes.INTERNAL_SERVER_ERROR)
              .json(ErrorResponse);
   }
}



async function getAllFlights( req, res){
   try{
    console.log(req.query)
      const flights = await FlightService.getAllFlights(req.query);
      
      SuccessResponse.data =flights;
      //SuccessResponse.message = 'All the customized flights are fetched successfully';
      res
         .status(StatusCodes.ACCEPTED)
         .json(SuccessResponse);
   }catch(error){
      ErrorResponse.message = 'Failed to fetch the customized data ';
      ErrorResponse.error = error;
      res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
   }
}

module.exports = {
    createFlight ,
    getAllFlights
}