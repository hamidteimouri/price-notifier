'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Target extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Target.init({
        BrokerId: DataTypes.STRING,
        UserId: DataTypes.STRING,
        Base: DataTypes.STRING,
        Quote: DataTypes.STRING,
        TargetPrice: DataTypes.STRING,
        done: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Target',
    });
    return Target;
};