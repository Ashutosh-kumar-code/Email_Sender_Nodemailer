const express = require('express');
const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "ashu3231kumar@gmail.com",//sender mail Address
        pass: "" //sender mail Password
    }
})

let options = {
    from:"ashu3231kumar@gmail.com", // Sender Mail Address
    to:"ashu9908kumar@gmail.com", // Receiver Mail Address
    subject:" TEST Email ",
    text:" Testing node mailer "
}

mailTransporter.sendMail(options,(err)=>{
    if(err){
        console.log("Mail NOT Sent",err);
    } else {
        console.log("Email Sent Successfully");
    }
})