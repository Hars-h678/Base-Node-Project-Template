const {StatusCodes} = require('http-status-codes')

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next){
    if(!req.body.modelNumber){// does this modelNumber get validate means if u enter the modelNumber so will it get automatically updated

       ErrorResponse.message = 'Please enter the detail in a valid format' ;
      // ErrorResponse.error= {explanation : "Model Number not found in the oncoming request in the correct form"};



        ErrorResponse.error =
        new AppError(["Model Number not found in the oncoming request in the correct form"],StatusCodes.BAD_REQUEST)

        return res
                  .status(StatusCodes.BAD_REQUEST)
                  .json(ErrorResponse);
    }
    // next();
     console.log(req.body.capacity);
    if(req.body.capacity < 200 && req.body.capacity > 1000 ){
         ErrorResponse.message = 'Please enter the detail in a valid format' ;
         ErrorResponse.error= {explanation : "Capacity not found in the oncoming request in the correct form"};

        return res
                  .status(StatusCodes.BAD_REQUEST)
                  .json(ErrorResponse);
    }
    next();// THIS is for passing to the endpoint
}
module.exports ={
    validateCreateRequest
}