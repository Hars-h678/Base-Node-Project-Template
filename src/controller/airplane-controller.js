const {AirplaneService} = require('../services');
const {StatusCodes} = require('http-status-codes');


const { SuccessResponse , ErrorResponse } = require('../utils/common')

/**
 * POST : /Airplanes
 * req-body {
 * now what are the think required for creating an airplane check the model
 * req-body {modelNumber : 'airbus320' , capacity : 200}
 * }
 *
 */
async function  createAirplane(req,resp){
    // what will happen if we send request body directly in req.body ?
    // ans: it will work but it is not a good practice to send the whole req.body because it may contain some other data also which we don't want to send in the request body so we will destructure the req.body and send only the required data in the request body
   try{
   
    const airplane = await AirplaneService.createAirplane({
        modelNumber : req.body.modelNumber,
        capacity : req.body.capacity
    })
        SuccessResponse.message = 'Successfully created a airplane';
        SuccessResponse.data = airplane
    return resp
              .status(StatusCodes.CREATED)
              .json(SuccessResponse);

   }catch(error){
    ErrorResponse.message = 'Failed to created an airplane'
    ErrorResponse.error = error;
     return resp
              .status(StatusCodes.INTERNAL_SERVER_ERROR)
              .json(ErrorResponse);
   }
}


async function getAllAirplanes(req,res){
    try{
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.message = 'Successfully fetched all the  airplanes';
        SuccessResponse.data = airplanes
        return res
                  .status(StatusCodes.ACCEPTED)
                  .json(SuccessResponse);
    }catch(error){
     ErrorResponse.message = 'Failed to fetched to all airplane'
     ErrorResponse.error = error;
     return resp
              .status(error.StatusCodes)
              .json(ErrorResponse);


    }

}



async function getAirplane(req,res) {
    try{
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.message = 'Successfully fetched the airplane';
        SuccessResponse.data = airplane
        return res
                  .status(StatusCodes.OK)
                  .json(SuccessResponse);
    }catch(error){
     ErrorResponse.message = 'Failed to fetched the airplane'
     ErrorResponse.error = error;
     return res
              .status(error.statusCode)
              .json(ErrorResponse);

    }
}


async function  deleteAirplane(req,resp){
   
   try{
   
    const airplane = await AirplaneService.deleteAirplane(req.params.id)
        SuccessResponse.message = 'Successfully deleted a airplane';
        SuccessResponse.data = airplane
    return resp
              .status(StatusCodes.OK)
              .json(SuccessResponse);

   }catch(error){
    ErrorResponse.message = 'Failed to delete an airplane'
    ErrorResponse.error = error;
     return resp
              .status(StatusCodes.INTERNAL_SERVER_ERROR)
              .json(ErrorResponse);
   }
}


module.exports ={
    createAirplane,
    getAllAirplanes,
    getAirplane,
    deleteAirplane
    
}