const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authServices = require("../services/auth.service");
const authorizationRequestModel = require('../models/authorization.request.model')

const loginController = async (req, res, next) => {
  const { documentId, password } = req.body;

  try {
    const user = await authServices.getUser(documentId);
    if (!user) {
      return res.status(400).json({ message: "user doesnt exist in db" });
    }
    if(user.dataValues.statusId !== 2){return res.status(400).json('User statusId is not authorized!!')}
    const pass = await bcrypt.compare(password, user.dataValues.password)
    if(!pass){return res.status(400).json({message: 'pass not match with user'})} 
    
    const userIncludeDate = await authServices.loginIncludes(user.dataValues.employeeId)
    
   
    const name = userIncludeDate.employee.dataValues.employeeName
    const lastName = userIncludeDate.employee.dataValues.employeeLastName
    const employeeId = user.dataValues.employeeId
    const role = user.dataValues.role

    const token = await authServices.genToken({name, lastName,employeeId,role})

   res.status(200).json({

    name,
    lastName,
    employeeId,
    role,
    token

    })

    

   
  } catch (error) {
    next(error);
  }
};

const requestController = async (req, res, next) => {
  try {
    const newRequest = req.body;
    const userCreated = await authServices.accessRequest(newRequest);
     res.status(201).send(newRequest);
   } catch (error) {
    next(error);
  }
};

const authorizeController = async (req, res, next) => {
  try {
    const { employeeId } = req.params; 

    // Buscar la solicitud en DB y crear usuario
    const requestEmployee = await authorizationRequestModel.findOne({ where: { employeeId } });

    if (!requestEmployee) {
      return res.status(404).send("Solicitud no encontrada");
    }
      const updateUserStatus = await authorizationRequestModel.update({statusId: 2}, {where:{employeeId:requestEmployee.employeeId}})
       
        res.status(200).send(`Usuario con ID ${employeeId} autorizado`);
  } catch (error) {
    next(error);
  }
};


const rejectController = async (req, res, next) => {
  try {
    const { employeeId } = req.params; 

    // Buscar la solicitud en DB y crear usuario
    const requestEmployee = await authorizationRequestModel.findOne({ where: { employeeId } });

    if (!requestEmployee) {
      return res.status(404).send("Solicitud no encontrada");
    }
      const deleteUserStatus = await authorizationRequestModel.destroy({where:{employeeId:requestEmployee.employeeId}})
       
        res.status(200).send(`Usuario con ID ${employeeId} No autorizado`);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginController,
  requestController,
  authorizeController,
  rejectController
};
