const {DataTypes} = require('sequelize')
const ppeModel = require('./ppe.model')
const employeeModel = require('./employee.model')
const db = require('../utils/db')

const PpeDelivery = db.define('ppe_deliveries',{

ppeDeliveryId: {type: DataTypes.INTEGER(), allowNull:false, primaryKey: true, autoIncrement: true, field: 'ppe_delivery_id'},
ppeId: {type: DataTypes.INTEGER(), allowNull:false,field: 'ppe_id', references: { model: ppeModel, key: "ppe_id" }},
employeeId: {type: DataTypes.INTEGER(), allowNull: false, field: 'employee_id', references: { model: employeeModel, key: "employee_id" }},
ppeDeliveryDate: {type: DataTypes.DATE(), allowNull: false, field: 'ppe_delivery_date'},
ppeQuantityDelivered: {type: DataTypes.INTEGER(), allowNull: false, field: 'ppe_quantity_delivered'}

},{
 timestamps: true, updatedAt: false, createdAt:'ppe_quantity_delivered_creation' })


 module.exports = PpeDelivery