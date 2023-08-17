const {Sequelize} = require('sequelize')


const sequelize = new Sequelize("pricenotifier", "postgres", "postgres", {
    host: "localhost",
    port: "5433",
    ssl: false,
    dialect: "postgres"
})

module.exports = sequelize