
const { StatusCodes } = require('http-status-codes');
const { CityService } = require('../services')
const { SuccessResponse, ErrorResponse } = require('../utils/common')

async function createCity(req , res ){
    try{
        console.log("hello")
       const city = await CityService.createCity({
        name:req.body.name
       })
       SuccessResponse.data = city;
       SuccessResponse.message = 'City is created Successfully'
       return res
                 .status(StatusCodes.OK)
                 .json(SuccessResponse)
    }catch(error){
        ErrorResponse.message = 'There is some error while creating the city'
        ErrorResponse.error = error // note this error will thrown by service if any error come while creating
        return res  
                  .status( StatusCodes.INTERNAL_SERVER_ERROR )
                  .json(ErrorResponse)
    }

}

async function deleteCity(req, res) {
    try{
        console.log("delete me")
        const city = await CityService.deleteCity( req.params.id )
        SuccessResponse.data = city
        SuccessResponse.message = ' City is deleted Successfully'
        return res
                  .status(StatusCodes.OK)
                  .json(SuccessResponse)
    }catch(error){
         ErrorResponse.message = ' There is some error while deleting the city '
         ErrorResponse.error = error
         return res
                   .status(error.statusCode)
                   .json(ErrorResponse)

    }
    
}


async function getAllCities(req,res){
    try{
        const cities = await CityService.getAllCity();
        SuccessResponse.message = 'Successfully fetched all the  citiess';
        SuccessResponse.data =  cities
        return res
                  .status(StatusCodes.ACCEPTED)
                  .json(SuccessResponse);
    }catch(error){
     ErrorResponse.message = 'Failed to fetched to all cities'
     ErrorResponse.error = error;
     return resp
              .status(error.StatusCodes)
              .json(ErrorResponse);


    }

}



async function getCity(req,res) {
    try{
        const City = await CityService.getCity(req.params.id);
        SuccessResponse.message = 'Successfully fetched the city';
        SuccessResponse.data = City
        return res
                  .status(StatusCodes.OK)
                  .json(SuccessResponse);
    }catch(error){
     ErrorResponse.message = 'Failed to fetched the city'
     ErrorResponse.error = error;
     return res
              .status(error.statusCode)
              .json(ErrorResponse);

    }
}


module.exports = {
    getCity,
    getAllCities,
    deleteCity,
    createCity
}
