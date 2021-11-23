const SendmailTransport = require('nodemailer/lib/sendmail-transport');
const User = require('../models/User');
const SendMailTo = require("../services/sendMail");


module.exports = {
  async store(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;  
    const role = req.body.role;  


    let user = await User.findOne({email, password});

    if(!user) {
      user = await User.create({name, email, password, role});
    };

    SendMailTo({email:email, message:"Usuário cadastrado com sucesso!", subject:"Usuário Cadastrado"})

    return res.json(user);
  },

  async login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    let user = await User.findOne({email, password});

    if(!user) {
      return res.json("user not found");
    }else{
      return res.json(user);
    }
  }
  
};