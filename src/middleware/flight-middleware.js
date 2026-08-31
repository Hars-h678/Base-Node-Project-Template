const {StatusCodes} = require('http-status-codes')

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next){
    // so we are validating those thing that cannpt be null
    if(!req.body.flightNumber || ! req.body.airplaneId ||  ! req.body.departureAirportId) {// does this modelNumber get validate means if u enter the modelNumber so will it get automatically updated

       ErrorResponse.message = 'Please enter sll the detail in a valid format' ;
      // ErrorResponse.error= {explanation : "Model Number not found in the oncoming request in the correct form"};



        ErrorResponse.error =
        new AppError(["flightNumber or airplaneId or departureAirportId not found in the oncoming request in the correct form"],StatusCodes.BAD_REQUEST)

        return res
                  .status(StatusCodes.BAD_REQUEST)
                  .json(ErrorResponse);
    }

    if(!req.body.arrivalAirportId || ! req.body.arrivalTime ||  ! req.body.departureTime) {// does this modelNumber get validate means if u enter the modelNumber so will it get automatically updated

       ErrorResponse.message = 'Please enter sll the detail in a valid format' ;
      // ErrorResponse.error= {explanation : "Model Number not found in the oncoming request in the correct form"};



        ErrorResponse.error =
        new AppError(["arrivalAirportId or arrivalTime or departureTime not found in the oncoming request in the correct form"],StatusCodes.BAD_REQUEST)

        return res
                  .status(StatusCodes.BAD_REQUEST)
                  .json(ErrorResponse);
    }
    if(!req.body.price || ! req.body.totalSeats ) {// does this modelNumber get validate means if u enter the modelNumber so will it get automatically updated

       ErrorResponse.message = 'Please enter sll the detail in a valid format' ;
      // ErrorResponse.error= {explanation : "Model Number not found in the oncoming request in the correct form"};



        ErrorResponse.error =
        new AppError(["price or totalSeats not found in the oncoming request in the correct form"],StatusCodes.BAD_REQUEST)

        return res
                  .status(StatusCodes.BAD_REQUEST)
                  .json(ErrorResponse);
    }
    next();
}
module.exports = {
    validateCreateRequest
}