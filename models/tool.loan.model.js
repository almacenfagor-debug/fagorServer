const { DataTypes } = require("sequelize");
const db = require("../utils/db");
const employeeModel = require("../models/employee.model");
const toolModel = require("../models/tool.model");

const ToolLoan = db.define(
  "tool_loans",
  {
    toolLoanId: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "tool_loan_id",
    },
    toolId: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      references: { model: toolModel, key: "tool_id" },
      field: "tool_id",
    },
    employeeId: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      references: { model: employeeModel, key: "employee_id" },
      field: "employee_id",
    },
    loanDate: { type: DataTypes.DATE, allowNull: false, field: "loan_date" },
    returnDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "return_date",
    },
     returnTime: {
      type: DataTypes.TIME,
      allowNull: false,
      field: "return_time",
    },
  },
  { timestamps: false }
);

module.exports = ToolLoan;
