const { Flight , Airplane , Airport} = require('../models');

const { Sequelize } =require('sequelize')

const { CrudRepository } = require('./crud-repository');
class FlightRepository extends CrudRepository{

    constructor(){
        super(Flight);
    }

    async  getAllFlights (filter , sort){
        console.log("helli");
        const response = await Flight.findAll({
            where : filter,
            order : sort,
            include :[
                {
                model:Airplane,
                as :'airplaneDetail'
                
            },
            {
                model:Airport ,
                as:'departureAirport',
                on:{
                    col1 : Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=" ,Sequelize.col('departureAirport.code'))

                },
             
            },
             {
                model:Airport ,
                as:'arrivalAirport',
                on:{
                    col1 : Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=" ,Sequelize.col('arrivalAirport.code'))

                },
             
            }
            ]
        });
        return response;
    }
    
}

module.exports = FlightRepository