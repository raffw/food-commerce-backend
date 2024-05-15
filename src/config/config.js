const path = require('path')
require('dotenv').config({path: path.join(__dirname, '../../.env')})

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;


