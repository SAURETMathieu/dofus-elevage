/* eslint-disable no-console */
const nodemailer = require('nodemailer');

// Configuration of the email address used
async function sendEmail(to, subject, text) {
  const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL,
      pass: process.env.MAIL_PASSWORD,
    },
    tls: {
      ciphers: 'SSLv3',
    },
  });

  const mailOptions = {
    from: process.env.MAIL,
    to,
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('E-mail envoyé:', info.response);
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = { sendEmail };
