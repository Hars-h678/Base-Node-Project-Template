const { AirportRespository } = require("../repositories")


const airportRepository = new AirportRespository();

async function createAirport(data){
  try{
    console.log(data);
      const Airport = await airportRepository.create(data);
      return Airport;
  }catch(error){
      // throw error;
      console.log(error);
      if(error.name == 'SequelizeValidationError'){
        let explanation = [];
        error.errors.forEach((err) => {
          explanation.push(err.message);
        });
     console.log(explanation);
      throw new AppError(explanation , StatusCodes.BAD_REQUEST)
   }
  throw new AppError('Cannot create a new Airport object' , StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function getAirports(){
  try{
    const airport = await airportRepository.getAll();
    return airport;
  }catch(error){
   console.log(error);
   // there is nothing like validation here 
   // so the problem if occur then fetching only
    throw new AppError('Cannot fetch data new airport object' , StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function getAirport(id) {
   try{
    const airport = await airportRepository.get(id);
    return airport;
   }catch(error){
    console.log(error.name);
    if(error.statusCode == StatusCodes.NOT_FOUND){
      throw new AppError('There is no data corrresponding to given Id', error.statusCode )
    }
     throw new AppError('Cannot fetch data new airport object' , StatusCodes.INTERNAL_SERVER_ERROR)
   }
  
}

async function deleteAirport(id) {
  try{
    const airport = await airportRepository.destroy(id);
    return airport;
  }catch(error){
    if(error.statusCode == StatusCodes.NOT_FOUND){
      throw new AppError('There is no data corrresponding to given Id', error.statusCode )
    }
   throw new AppError('Cannot delete the airport',StatusCodes.INTERNAL_SERVER_ERROR)
  }
  
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    deleteAirport
} 









