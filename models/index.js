const Sequelize = require('sequelize')
const itemsModel = require('./items')
//const usersModel = require('./users')
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
//const users = usersModel(connection, Sequelize)


module.exports = {
    items,
    //users
}