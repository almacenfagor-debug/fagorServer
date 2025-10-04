const { Sequelize } = require("sequelize");
require('dotenv').config();

const db = new Sequelize(process.env.EX_DATABASE_URL,{
  database: "fagorwarehousedb",
  port: 5432,
  host: "localhost",
  dialect: "postgres",
  username: "postgres",
  password: "root",
  logging: false,
});

module.exports = db;




