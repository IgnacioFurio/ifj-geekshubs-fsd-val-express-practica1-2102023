'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Appointment.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type:DataTypes.INTEGER
    },
    date: DataTypes.STRING,
    hour: DataTypes.STRING,
    price: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    about: DataTypes.TEXT,
    cream: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};