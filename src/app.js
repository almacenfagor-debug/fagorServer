const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("../utils/db");
const initModel = require("../models/init.model");
const authRouter = require("../routes/auth.route");
const employeeRouter = require("../routes/employee.route");
const supplyRouter = require("../routes/supply.route");
const ppeRouter = require("../routes/ppe.route");
const stationeryRouter = require("../routes/stationery.route");
const toolRouter = require("../routes/tool.route");
const errorRouter = require("../routes/errorHandler.route");
const path = require("path");


require("dotenv").config();

initModel();
db.authenticate()
  .then((res) => {
    console.log("db authenticated");
  })
  .catch((error) => {
    console.log(error);
  });
db.sync({alter: true })
  .then((res) => {
    console.log("db syncronized");
  })
  .catch((error) => {
    console.log(error);
  });

const PORT = process.env.PORT || 8000;

const app = express();


app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(authRouter);
app.use(employeeRouter);
app.use(supplyRouter);
app.use(ppeRouter);
app.use(stationeryRouter);
app.use(toolRouter);

errorRouter(app);

app.listen(PORT, () => {
  console.log(`listening in port ${PORT}`);
});

module.exports = app;




