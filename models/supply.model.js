const {DataTypes} = require('sequelize')

const db = require('../utils/db')

const Supply = db.define('supplys',{

supplyId: {type: DataTypes.INTEGER(), allowNull:false, primaryKey: true, autoIncrement: true, field: 'supply_id'},
supplyName: {type: DataTypes.STRING(25), allowNull:false,field: 'supply_name'},
supplyStock: {type: DataTypes.INTEGER(), allowNull: false, field: 'supply_stock'},
supplyMaxOrder: {type: DataTypes.INTEGER(), allowNull: false, field: 'supply_max_order'},
supplyMinOrder: {type: DataTypes.INTEGER(), allowNull: false, field: 'supply_min_order'},
supplyLowStockAlert: {type: DataTypes.BOOLEAN(), allowNull: false, field: 'supply_low_stock_alert'}

},{
 timestamps: true, updatedAt: false, createdAt:'supply_created_date' })


 module.exports = Supply