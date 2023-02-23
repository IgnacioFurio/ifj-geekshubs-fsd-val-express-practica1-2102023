'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Relacion muchos a muchos entre User y Artist
      User.belongsToMany(models.Artist,
        {through: {model: models.Appointment, unique: false}}
        )
      User.belongsTo(models.Rol)
    }
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    phone: DataTypes.STRING,
    payment: DataTypes.STRING,
    dni: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};