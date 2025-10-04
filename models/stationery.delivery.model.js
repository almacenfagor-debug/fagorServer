const {DataTypes} = require('sequelize')

const db = require('../utils/db')

const StationeryDelivery = db.define('stationery_deliveries',{

stationeryDeliveryId: {type: DataTypes.INTEGER(), allowNull:false, primaryKey: true, autoIncrement: true, field: 'stationery_delivery_id'},
stationeryName: {type: DataTypes.STRING(25), allowNull:false,field: 'stationery_name'},
stationeryStock: {type: DataTypes.INTEGER(), allowNull: false, field: 'stationery_stock'},
stationeryMaxOrder: {type: DataTypes.INTEGER(), allowNull: false, field: 'stationery_max_order'},
stationeryMinOrder: {type: DataTypes.INTEGER(), allowNull: false, field: 'stationery_min_order'},
stationeryLowStockAlert: {type: DataTypes.BOOLEAN(), allowNull: false, field: 'stationery_low_stock_alert'}

},{
 timestamps: true, updatedAt: false, createdAt:'stationery_delivery_created' })


 module.exports = StationeryDelivery