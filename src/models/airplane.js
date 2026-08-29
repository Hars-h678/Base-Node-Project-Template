'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Flight,{
        foreignKey:'airplaneID'
      })
    }
  }
  Airplane.init({
    modelNumber: {
      type:DataTypes.STRING,// STRING means varchar(255)
      allowNull:false,
      validate:{
        isAlphanumeric: true,
      }
          },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0,
      validate: {
        min:200,// see seince we haven;t apply any constraints of capacity of db so if in case if some run direct query or use db directlt so they can enter wrong value
        max:1000
      }
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};