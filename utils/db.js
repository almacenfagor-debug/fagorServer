const { Sequelize } = require("sequelize");
require('dotenv').config();

const db = new Sequelize(process.env.EX_DATABASE_URL,{
  database: "fagordb",
  port: 5432,
  host: "localhost",
  dialect: "postgres",
  username: "fagordb_user",
  password: "2cjpUepETKUcZNJ82fuXumj8oARcsFS4",
  logging: false,
});

module.exports = db;




