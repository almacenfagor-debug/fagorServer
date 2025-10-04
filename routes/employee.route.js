const {Router} = require('express')
const {getEmployeeController,getAllEmployeesController, createEmployeeController, deleteEmployeeController, updateEmployeeController}= require('../controllers/employee.controller')
//const authMiddleware = require('../middlewares/auth.middleware')

const employeeRouter = Router()

employeeRouter.get('/api/employee/', getAllEmployeesController)

employeeRouter.get('/api/employee/:id', getEmployeeController)

employeeRouter.post('/api/employee/', createEmployeeController)

employeeRouter.delete('/api/employee/:id', deleteEmployeeController)

employeeRouter.put('/api/employee/:id', updateEmployeeController)


module.exports = employeeRouter