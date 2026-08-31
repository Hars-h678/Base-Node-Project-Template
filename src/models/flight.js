'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane,{
        foreignKey:'airplaneId',
        onDelete : 'CASCADE',
        as :'airplaneDetail'
      });
      this.belongsTo(models.Airport,{
        foreignKey:'departureAirportId',
        as :'departureAirport'
      });
      this.belongsTo(models.Airport,{
        foreignKey:'arrivalAirportId',
        as :'arrivalAirport'
      })
    }
  }
  Flight.init({
    flightNumber: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // ek flgiht belons to one airplane but one airplane can have multiple flights
    },
    departureAirportId: {
      type: DataTypes.STRING,
      onDelete: 'CASCADE',
    },
    arrivalAirportId:{
       type :DataTypes.STRING,
       allowNull: false,
        
    },
    arrivalTime:{
      type: DataTypes.DATE,
      allowNull: false
    },
    departureTime:{
      type: DataTypes.DATE,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    boardingGate: DataTypes.STRING,
    totalSeats:{// this is basically the total remaining seats 
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Flight',
    validate: {
      arrivalAfterDeparture() {
        if (
          this.departureTime &&
          this.arrivalTime &&
          new Date(this.arrivalTime) <= new Date(this.departureTime)
        ) {
          throw new Error('arrivalTime must be after departureTime');
        }
      }
    }
  }
  );
  return Flight;
};