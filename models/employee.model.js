const { DataTypes } = require('sequelize')
const db = require('../utils/db')

const Employee = db.define('employee', {
  employeeId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'employee_id'
  },
  employeeName: {
    type: DataTypes.STRING(25),
    allowNull: false,
    field: 'employee_name'
  },
  employeeLastName: {
    type: DataTypes.STRING(25),
    allowNull: false,
    field: 'employee_lastname'
  }
}, {
  tableName: 'employee',
  timestamps: false 
})

module.exports = Employee
