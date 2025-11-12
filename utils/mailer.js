

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "almacenfagor@gmail.com",
    pass: "lbnfidbsznhlbsqu",
  },
  logger: true,
  debug: true, 
});

  
 

module.exports = transporter;





