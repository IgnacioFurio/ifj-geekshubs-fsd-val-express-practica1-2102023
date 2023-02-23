'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Relacion muchos a muchos entre Artist y User
      Artist.belongsToMany(models.User,
        {through: {model: models.Appointment, unique: false}}
        )
    }
  }
  Artist.init({
    name: DataTypes.STRING,
    style: DataTypes.STRING,
    instagram: DataTypes.STRING,
    pricing: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};