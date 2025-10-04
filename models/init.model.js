const employeeModel = require('./employee.model')
const authorizationStatusModel = require('./authorization.status.model')
const authorizationRequestModel = require ('./authorization.request.model.js')
const toolLoanModel = require('./tool.loan.model.js')
const toolModel = require('./tool.model')
const supplyDeliveryModel = require('./supply.delivery.model')
const supplyModel = require('./supply.model')
const stationeryDeliveryModel = require('./stationery.delivery.model')
const stationeryModel = require('./stationery.model')
const ppeDeliveryModel = require('./ppe.delivery.model')
const ppeModel = require('./ppe.model')

const initModel = () => {
  //  authorization_request ↔ employee
  employeeModel.hasMany(authorizationRequestModel, { foreignKey: 'employee_id' })
  authorizationRequestModel.belongsTo(employeeModel, { foreignKey: 'employee_id' })

  //  authorization_request ↔ authorization_status
  authorizationStatusModel.hasMany(authorizationRequestModel, { foreignKey: 'status_id' })
  authorizationRequestModel.belongsTo(authorizationStatusModel, { foreignKey: 'status_id' })

  //  toolLoan ↔ employee
  employeeModel.hasMany(toolLoanModel, { foreignKey: 'employee_id' })
  toolLoanModel.belongsTo(employeeModel, { foreignKey: 'employee_id' })

  //  toolLoan ↔ tool
  toolModel.hasMany(toolLoanModel, { foreignKey: 'tool_id' })
  toolLoanModel.belongsTo(toolModel, { foreignKey: 'tool_id' })

  //  supplyDelivery ↔ employee
  employeeModel.hasMany(supplyDeliveryModel, { foreignKey: 'employee_id' })
  supplyDeliveryModel.belongsTo(employeeModel, { foreignKey: 'employee_id' })

  //  supplyDelivery ↔ supply
  supplyModel.hasMany(supplyDeliveryModel, { foreignKey: 'supply_id' })
  supplyDeliveryModel.belongsTo(supplyModel, { foreignKey: 'supply_id' })

  //  stationeryDelivery ↔ employee
  employeeModel.hasMany(stationeryDeliveryModel, { foreignKey: 'employee_id' })
  stationeryDeliveryModel.belongsTo(employeeModel, { foreignKey: 'employee_id' })

  //  stationeryDelivery ↔ stationery
  stationeryModel.hasMany(stationeryDeliveryModel, { foreignKey: 'stationery_id' })
  stationeryDeliveryModel.belongsTo(stationeryModel, { foreignKey: 'stationery_id' })

  //  ppeDelivery ↔ employee
  employeeModel.hasMany(ppeDeliveryModel, { foreignKey: 'employee_id' })
  ppeDeliveryModel.belongsTo(employeeModel, { foreignKey: 'employee_id' })

  //  ppeDelivery ↔ ppe
  ppeModel.hasMany(ppeDeliveryModel, { foreignKey: 'ppe_id' })
  ppeDeliveryModel.belongsTo(ppeModel, { foreignKey: 'ppe_id' })
}

module.exports = initModel
