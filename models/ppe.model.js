const {DataTypes} = require('sequelize')

const db = require('../utils/db')

const Ppe = db.define('ppe',{

ppeId: {type: DataTypes.INTEGER(), allowNull:false, primaryKey: true, autoIncrement: true, field: 'ppe_id'},
ppeName: {type: DataTypes.STRING(25),unique: true, allowNull:false,field: 'ppe_NAME'},
ppeStock: {type: DataTypes.INTEGER(), allowNull: false, field: 'ppe_stock'},
ppeMaxOrder: {type: DataTypes.INTEGER(), allowNull: false, field: 'ppe_max_order'},
ppeMinOrder: {type: DataTypes.INTEGER(), allowNull: false, field: 'ppe_min_order'},
ppeLowStockAlert: {type: DataTypes.BOOLEAN(), defaultValue:false, field: 'ppe_low_stock_alert'},
  newPpeDate: {
    type: DataTypes.DATE,
    defaultValue: db.literal('CURRENT_TIMESTAMP'),
    field: 'new_ppe_date'
  }

},{
 timestamps: false })


 module.exports = Ppe