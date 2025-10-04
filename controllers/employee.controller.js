const employeeServices = require("../services/employee.service");

const getAllEmployeesController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getEmployees = await employeeServices.getAll();
    res.json(getEmployees);
  } catch (error) {
    next(error);
  }
};

const getEmployeeController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getEmployees = await employeeServices.getOne(id);
    res.json(getEmployees);
  } catch (error) {
    next(error);
  }
};

const createEmployeeController = async (req, res, next) => {
  try {
    const newEmployee = req.body;
    const EmployeeCreated = await employeeServices.createOne(newEmployee);
    res.status(201).send(EmployeeCreated);
  } catch (error) {
    next(error);
  }
};

const deleteEmployeeController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const EmployeeDelete = await employeeServices.deleteOne(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const updateEmployeeController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const EmployeeToUpdate = req.body;
    const EmployeeUpdated = await employeeServices.updateOne(id, EmployeeToUpdate);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getEmployeeController,
  getAllEmployeesController,
  createEmployeeController,
  deleteEmployeeController,
  updateEmployeeController,
};
