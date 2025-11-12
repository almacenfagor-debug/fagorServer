

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  secure: true,
  auth: {
    user: "almacenfagor@gmail.com",
    pass: "lbnfidbsznhlbsqu",
  },
});

module.exports = transporter;





