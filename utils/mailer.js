

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  secure: true,
  auth: {
    user: "thebestjay12358@gmail.com",
    pass: "buuvqxcpxbbvufks",
  },
});

module.exports = transporter;





