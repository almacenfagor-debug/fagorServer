const {DataTypes} = require('sequelize')

const db = require('../utils/db')

const Tool = db.define('tools',{

toolId: {type: DataTypes.INTEGER(), allowNull:false, primaryKey: true, autoIncrement: true, field: 'tool_id'},
toolName: {type: DataTypes.STRING(25), allowNull:false,field: 'tool_name'},
colorTool: {type: DataTypes.STRING(15), allowNull: false, field: 'color_tool'},
operationalStatus: {type: DataTypes.STRING(15), allowNull: false, field: 'operational_status'},

  newToolDate: {
    type: DataTypes.DATE,
    defaultValue: db.literal('CURRENT_TIMESTAMP'),
    field: 'new_tool_date'
  }
}, {
  timestamps: false 
});

module.exports = Tool;