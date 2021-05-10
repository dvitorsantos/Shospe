const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/User')
const Product = require('../models/Product')
const Order = require('../models/Order')

const connection = new Sequelize(dbConfig)

User.init(connection)
Product.init(connection)
Order.init(connection)

Order.associate(connection.models)
User.associate(connection.models)
Product.associate(connection.models)

module.exports = connection;