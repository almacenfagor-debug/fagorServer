

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  port: 587,
  host: "smtp.gmail.com",
  secure: true,
  auth: {
    user: "almacenfagor@gmail.com",
    pass: "ngdzbnkmyeonrvsw",
  },
});

module.exports = transporter;





