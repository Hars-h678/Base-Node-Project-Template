const  AppError  = require('../utils/errors/app-error')
const { CityRepository }= require('../repositories');
// const city = require('../models/city');
const { StatusCodes } = require('http-status-codes');
const cityRepository = new CityRepository();

async function createCity(data){
  try{
    console.log(data);
    console.log("wait what");
      const city = await cityRepository.create(data);
      return city;
  }catch(error){
      // throw error;
      console.log(error);
      if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError'){
        let explanation = [];
        error.errors.forEach((err) => {
          explanation.push(err.message);
        });
     console.log(explanation);
      throw new AppError(explanation , StatusCodes.BAD_REQUEST)
   }
  throw new AppError('Cannot create a new City object' , StatusCodes.INTERNAL_SERVER_ERROR)
  }
}


//delete on the basis of id 
async function deleteCity(id) {
    try{
      console.log(id)
        const city = await cityRepository.destroy(id);
        return city;
    }catch(error){
       console.log(error.statusCode);
       if(error.statusCode == StatusCodes.NOT_FOUND){ 
        throw new AppError('Given id doesnot exist in the table' , error.statusCode)
     }
     throw new AppError('There is some problem with this deletion Operation' , StatusCodes.INTERNAL_SERVER_ERROR)
    }
    
}





//find by id
async function getCity(id) {

    try{
       const city = await cityRepository.get(id);
       return city;
    }catch(error){
    if(error.name == StatusCodes.NOT_FOUND) {
        return new AppError('City with this Id is not present',error.statusCode)
    };
    return new AppError('There is some Error while finding the City with this Id' , error.statusCode)
 }
    
}

async function getAllCity() {
    try{
       const cities = await cityRepository.getAll();
       return cities;
    }catch(error){
      if(error.name == StatusCodes.NOT_FOUND) {
        throw new AppError ('There is no City in the Table', error.statusCode)
      }
    }
    
}


module.exports ={
    createCity,
    deleteCity,
    getAllCity,
    getCity
}


