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

      const getEmployeeDates = await employeeModel.findByPk(newRequest.employeeId)
      if(getEmployeeDates){
        const newUser = await authorizationRequestModel.create(newRequest)
        
    const employee = await authorizationRequestModel.findOne({
  where: { employeeId: newRequest.employeeId },
  include: [
    {
      model: employeeModel,
      attributes: ["employeeName", "employeeLastName"],
    },
  ],
});


const mailOptions = {
        from: 'thebestjay12358@gmail.com',
        to: "japay01@hotmail.com",
        subject: "Nueva solicitud de acceso",
        html: `
          <h3>Se ha recibido una nueva solicitud de acceso</h3>
          <p><strong>Nombre:</strong> ${employee.employee.employeeName}</p>
          <p><strong>Apellido:</strong> ${employee.employee.employeeLastName}</p>
          <p><strong>Documento Empleado:</strong> ${newRequest.documentId}</p>
          <p>¿Desea autorizar el registro de esta persona?</p>
          <p>
            <a href="http://localhost:8000/api/auth/autorize/${newRequest.employeeId}" style="color:green">Autorizar</a> |
            <a href="http://localhost:8000/api/auth/reject/${newRequest.employeeId}" style="color:red">Rechazar</a>
          </p>
        `,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("Correo enviado: ", info.messageId);

      }else{return console.log('no created')}

      

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
