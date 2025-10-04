const {DataTypes} = require('sequelize')
const employeeModel = require("../models/employee.model");
const supplyModel = require("../models/supply.model");

const db = require('../utils/db')

const SupplyDelivery = db.define('supply_deliveries',{

supplyDeliveryId: {type: DataTypes.INTEGER(), allowNull:false, primaryKey: true, autoIncrement: true, field: 'supply_delivery_id'},
supplyId: {type: DataTypes.INTEGER(), allowNull:false,field: 'supply_id',references: { model: supplyModel, key: "supply_id" }},
employeeId: {type: DataTypes.INTEGER(), allowNull: false, field: 'employee_id', references: { model: employeeModel, key: "employee_id" }},
deliveryDate: {type: DataTypes.DATE(), allowNull: false, field: 'delivery_date'},
supplyQuantityDelivered: {type: DataTypes.INTEGER(), allowNull: false, field: 'supply_quantity_delivered'}

},{
 timestamps: false })


 module.exports = SupplyDelivery