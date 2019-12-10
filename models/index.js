const Sequelize = require('sequelize')
const itemsModel = require('./items')
const allConfigs = require('../config/sequelize')

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const {
    host,
    database,
    username,
    password,
    dialect
} = allConfigs[environment]

const connection = new Sequelize(database, username, password, {
    host,
    dialect
})

const items = itemsModel(connection, Sequelize)

module.exports = {
    items,
}