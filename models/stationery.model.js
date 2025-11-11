const {DataTypes} = require('sequelize')

const db = require('../utils/db')

const Stationery = db.define('stationery',{

stationeryId: {type: DataTypes.INTEGER(), allowNull:false, primaryKey: true, autoIncrement: true, field: 'stationery_id'},
stationeryName: {type: DataTypes.STRING(25),unique:true, allowNull:false,field: 'stationery_name'},
stationeryStock: {type: DataTypes.INTEGER(), allowNull: false, field: 'stationery_stock'},
stationeryMaxOrder: {type: DataTypes.INTEGER(), allowNull: false, field: 'stationery_max_order'},
stationeryMinOrder: {type: DataTypes.INTEGER(), allowNull: false, field: 'stationery_min_order'},
stationeryLowStockAlert: {type: DataTypes.BOOLEAN(), defaultValue:false, field: 'stationery_low_stock_alert'},
  newStationeryDate: {
    type: DataTypes.DATE,
    defaultValue: db.literal('CURRENT_TIMESTAMP'),
    field: 'new_stationery_ate'
  }
},{
 timestamps: false })


 module.exports = Stationery