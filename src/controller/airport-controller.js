const {AirportService} = require('../services');
const {StatusCodes} = require('http-status-codes'); 


const { SuccessResponse , ErrorResponse } = require('../utils/common')

/**
 * POST : /Airports
 * req-body {
 * now what are the think required for creating an airport check the model
 * req-body {modelNumber : 'airbus320' , capacity : 200}
 * }
 *
 */
async function  createAirport(req,resp){
    // what will happen if we send request body directly in req.body ?
    // ans: it will work but it is not a good practice to send the whole req.body because it may contain some other data also which we don't want to send in the request body so we will destructure the req.body and send only the required data in the request body
   try{
   
    const airport = await AirportService.createAirport({
       name:req.body.name,
       code:req.body.code,
       address:req.body.address,
       cityId:req.body.cityId
    })
        SuccessResponse.message = 'Successfully created a airport';
        SuccessResponse.data = airport
    return resp
              .status(StatusCodes.CREATED)
              .json(SuccessResponse);

   }catch(error){
    ErrorResponse.message = 'Failed to created an airport'
    ErrorResponse.error = error;
     return resp
              .status(StatusCodes.INTERNAL_SERVER_ERROR)
              .json(ErrorResponse);
   }
}


async function getAllAirports(req,res){
    try{
        const airports = await AirportService.getAirports();
        SuccessResponse.message = 'Successfully fetched all the  airports';
        SuccessResponse.data = airports
        return res
                  .status(StatusCodes.ACCEPTED)
                  .json(SuccessResponse);
    }catch(error){
     ErrorResponse.message = 'Failed to fetched to all airport'
     ErrorResponse.error = error;
     return res
              .status(error.StatusCodes)
              .json(ErrorResponse);


    }

}



async function getAirport(req,res) {
    try{
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.message = 'Successfully fetched the airport';
        SuccessResponse.data = airport
        return res
                  .status(StatusCodes.OK)
                  .json(SuccessResponse);
    }catch(error){
     ErrorResponse.message = 'Failed to fetched the airport'
     ErrorResponse.error = error;
     console.log(error)
     return res
              .status(error.statusCode)
              .json(ErrorResponse);

    }
}


async function  deleteAirport(req,resp){
   
   try{
   
    const airplort = await AirportService.deleteAirport(req.id)
        SuccessResponse.message = 'Successfully deleted a airport';
        SuccessResponse.data = airport
    return resp
              .status(StatusCodes.OK)
              .json(SuccessResponse);

   }catch(error){
    ErrorResponse.message = 'Failed to delete an airport'
    ErrorResponse.error = error;
     return resp
              .status(error.statusCode)
              .json(ErrorResponse);
   }
}







module.exports ={
    createAirport,
    getAllAirports,
    getAirport,
    deleteAirport
    
}