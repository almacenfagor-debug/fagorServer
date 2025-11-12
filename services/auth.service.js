const jwt = require("jsonwebtoken");
const employeeModel = require("../models/employee.model");
const authorizationRequestModel = require("../models/authorization.request.model")
const transporter = require("../utils/mailer");

class authServices {
  static genToken(payload) {
    try {
      const token = jwt.sign(payload, "clave", {
        algorithm: "HS512",
        expiresIn: "1d",
      });
      return token;
    } catch (error) {
      throw error;
    }
  }

static async accessRequest(newRequest) {
    try {
      console.log(newRequest)

      const getEmployeeDates = await employeeModel.findOne({ where: { employeeEmail: newRequest.email }})
      if(!getEmployeeDates){console.log('user no exists')}
      else{ 
       const newAccess = {
         employeeId: getEmployeeDates.employeeId,
         documentId: newRequest.documentId,
         password: newRequest.password,
         role: newRequest.role
        }
        //const newUser = await authorizationRequestModel.create(newAccess)
        
   /* const employee = await authorizationRequestModel.findOne({
  where: { employeeId: getEmployeeDates.employeeId },
  include: [
    {
      model: employeeModel,
      attributes: ["employeeName", "employeeLastName"],
    },
  ],
});*/


const mailOptions = {
        from: 'almacenfagor@gmail.com',
        to: "japay01@hotmail.com",
        subject: "Nueva solicitud de acceso",
        html: `
          <h3>Se ha recibido una nueva solicitud de acceso :</h3>
          <p><strong>Nombre:</strong> ${employee.employee.employeeName}</p>
          <p><strong>Apellido:</strong> ${employee.employee.employeeLastName}</p>
          <p><strong>Documento del Empleado:</strong> ${newRequest.documentId}</p>
          <p><strong>Cargo del Empleado:</strong> ${newRequest.role}</p>
          <p><strong>Mensaje:</strong> ${newRequest.reason}</p>
          <p>¿Desea autorizar el registro de esta persona?</p>
          <p>
            <a href="https://fagorserver.onrender.com/api/auth/authorize/${getEmployeeDates.employeeId}" style="color:green">Autorizar</a> |
            <a href="https://fagorserver.onrender.com/api/auth/reject/${getEmployeeDates.employeeId}" style="color:red">Rechazar</a>
          </p>
        `,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("Correo enviado: ", info.messageId);

    }

      

      return { message: "Solicitud enviada a propietario para aprobación" };
    } catch (error) {
      throw error;
    }
  }

  static async loginIncludes(employeeId){

       try {
      const employee = await authorizationRequestModel.findOne({
  where: { employeeId},
  include: [
    {
      model: employeeModel,
      attributes: ["employeeName", "employeeLastName"],
    },
  ],
});
return employee
} catch (error) {
      throw error;
    }
  }

  

  static async getUser(documentId) {
    try {
      const getUsers = await authorizationRequestModel.findOne({ where: {documentId} });
      return getUsers;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = authServices;
