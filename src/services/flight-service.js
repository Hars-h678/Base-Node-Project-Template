const {FlightRepository } = require("../repositories");

const { Op } = require('sequelize');

const { StatusCodes } = require('http-status-codes')
const AppError = require('../utils/errors/app-error')
const flightRepository =new FlightRepository();


async function createFlight(data) {
    try{
        const flight = await flightRepository.create(data);
        return flight;
    }catch(error){
        console.log(error)
        if(error.name == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach((err)=> {
                explanation.push(err.message);
            });
            throw new AppError(explanation , StatusCodes.BAD_REQUEST);
        }
       throw new AppError('Cannot create a new Airport object ', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

/// user cannot delete a flight and all will come under authorixation

async function getAllFlights(query){
    let customFilter = {};
    let sortFilter = [];                         
    const endingTripTime = '23:59:00';
    //trips = MUM-DEL
    console.log(query.trips);
    if(query.trips){
        console.log(query.trips);
        [departureAirportId , arrivalAirportId] = query.trips.split("-");
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;
         console.log(query.trips);
    }
    if(query.price){
        [minPrice , maxPrice]= query.price.split('-');
        customFilter.price = {
            // if nothing is send from the user then minPrice is undefined and undefined means 0
            [Op.between ]:[minPrice , (maxPrice == undefined)? 20000:maxPrice]
        }
    }

    if(query.travellers){
        customFilter.totalSeats = {
            [Op.gte] :query.travellers
        }
    }

   if(query.tripDate) {
    customFilter.departureTime = {
        [Op.between]: [
            `${query.tripDate} 00:00:00`,
            `${query.tripDate} 23:59:59`
        ]
    }
}
    console.log(customFilter);

    if(query.sort){
        const params = query.sort.split(',')
        const sortFilters = params.map((param)=>param.split('_'));
        sortFilter = sortFilters;
    }
    // todo task that what if depearture and arrival airport
    try{
       const flights = await flightRepository.getAllFlights(customFilter,sortFilter);
    //    console.log("empty");
    //    console.log(flights);
       return flights;

    }catch(error){
    throw new AppError('Cannot fetch data of all the flights',StatusCodes.INTERNAL_SERVER_ERROR)

    }
}

module.exports = {
    createFlight,
    getAllFlights
}