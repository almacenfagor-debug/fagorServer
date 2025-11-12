const { Sequelize } = require("sequelize");
require('dotenv').config();

const db = new Sequelize(process.env.EX_DATABASE_URL,{
  database: "railway",
  port: 17410,
  host: "interchange.proxy.rlwy.net",
  dialect: "postgres",
  username: "postgres",
  password: "tqYdfvZhYWhVVojBrjwJBgxaaKyDYWxX",
  logging: false,
  usuario: "postgres"

});

module.exports = db;




