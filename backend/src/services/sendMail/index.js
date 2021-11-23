const nodemailer = require('nodemailer');

module.exports = ({email, message, subject}) =>{

    const user = process.env.USER;
    const pass = process.env.PASS;
    
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {user, pass}
    });

    transporter.sendMail({
      from: user,
      to: email,
      subject: subject,
      text: message
    }).then(info=>{
      console.log("email enviado");
    }).catch(error => {
      console.log(error);
    });
};