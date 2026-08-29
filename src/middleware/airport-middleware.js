const {StatusCodes} = require('http-status-codes')

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next){
    if(!req.body.name && ! req.body.code && req.body.cityId) {// does this modelNumber get validate means if u enter the modelNumber so will it get automatically updated

       ErrorResponse.message = 'Please enter sll the detail in a valid format' ;
      // ErrorResponse.error= {explanation : "Model Number not found in the oncoming request in the correct form"};



        ErrorResponse.error =
        new AppError(["CityID or AirportCode or Name not found in the oncoming request in the correct form"],StatusCodes.BAD_REQUEST)

        return res
                  .status(StatusCodes.BAD_REQUEST)
                  .json(ErrorResponse);
    }
    next();
}
module.exports = {
    validateCreateRequest
}