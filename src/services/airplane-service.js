const { StatusCodes } = require('http-status-codes');
const {AirplaneRepository}= require('../repositories');


const AppError = require('../utils/errors/app-error')
const airplaneRepository = new AirplaneRepository();


async function createAirplane(data){
  try{
    console.log(data);
      const airplane = await airplaneRepository.create(data);
      return airplane;
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
  throw new AppError('Cannot create a new Airplane object' , StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function getAirplanes(){
  try{
    const airplane = await airplaneRepository.getAll();
    return airplane;
  }catch(error){
   console.log(error);
   // there is nothing like validation here 
   // so the problem if occur then fetching only
    throw new AppError('Cannot fetch data new Airplane object' , StatusCodes.INTERNAL_SERVER_ERROR)
  }
}


module.exports = {
    createAirplane,
    getAirplanes
} 