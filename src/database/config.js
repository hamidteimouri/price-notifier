const {Sequelize} = require('sequelize')


const sequelize = new Sequelize("price_notifier", "postgres", "postgres", {
    host: "localhost",
    port: "5433",
    ssl: false,
    dialect: "postgres"
})

module.exports = sequelize