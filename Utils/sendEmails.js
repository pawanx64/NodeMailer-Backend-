const nodemailer = require('nodemailer');
const user = require('../models/User');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host:"smtp.gmail.com",
  port:587,
  secure:true,
  auth: {
    user: 'pawankumar.nov5@gmail.com',
    pass:'dzidzkjbpkqgztgu',
  },
});

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: 'pawankumar.nov5@gmail.com',
    to: to,  // Use the 'to' parameter to specify the recipient's email address
    subject: subject,
    text: text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email has been sent');
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendEmail;
